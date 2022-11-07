import * as Clock from "@effect/io/Clock"
import * as Deferred from "@effect/io/Deferred"
import * as Effect from "@effect/io/Effect"
import * as Fiber from "@effect/io/Fiber"
import * as Queue from "@effect/io/Queue"
import * as Ref from "@effect/io/Ref"
import * as it from "@effect/io/test/utils/extend"
import * as Chunk from "@fp-ts/data/Chunk"
import * as Duration from "@fp-ts/data/Duration"
import { pipe } from "@fp-ts/data/Function"

export const waitForValue = <A>(
  ref: Effect.Effect<never, never, A>,
  value: A
): Effect.Effect<never, never, A> => {
  return pipe(ref, Effect.zipLeft(Clock.sleep(Duration.millis(10))), Effect.repeatUntil((a) => value === a))
}

export const waitForSize = <A>(
  queue: Queue.Queue<A>,
  size: number
): Effect.Effect<never, never, number> => {
  return waitForValue(Queue.size(queue), size)
}

describe.concurrent("Queue", () => {
  it.effect("bounded - offerAll returns true when there is enough space", () =>
    Effect.gen(function*() {
      const queue = yield* Queue.bounded<number>(5)
      const result = yield* pipe(queue, Queue.offerAll([1, 2, 3]))
      assert.isTrue(result)
    }))

  // TODO(Mike/Max): never completes
  // it.effect("bounded - offerAll returns false when there is not enough space", () =>
  //   Effect.gen(function*() {
  //     const queue = yield* Queue.bounded<number>(2)
  //     const result = yield* pipe(queue, Queue.offerAll([1, 2, 3]))
  //     assert.isFalse(result)
  //   }))

  it.effect("awaitShutdown - once", () =>
    Effect.gen(function*() {
      const queue = yield* Queue.bounded<number>(3)
      const deferred = yield* Deferred.make<never, boolean>()
      yield* pipe(
        Queue.awaitShutdown(queue),
        Effect.zipRight(pipe(deferred, Deferred.succeed(true))),
        Effect.fork
      )
      yield* Queue.shutdown(queue)
      const result = yield* Deferred.await(deferred)
      assert.isTrue(result)
    }))

  it.effect("awaitShutdown - multiple", () =>
    Effect.gen(function*() {
      const queue = yield* Queue.bounded<number>(3)
      const deferred1 = yield* Deferred.make<never, boolean>()
      const deferred2 = yield* Deferred.make<never, boolean>()
      yield* pipe(Queue.awaitShutdown(queue), Effect.zipRight(pipe(deferred1, Deferred.succeed(true))), Effect.fork)
      yield* pipe(Queue.awaitShutdown(queue), Effect.zipRight(pipe(deferred2, Deferred.succeed(true))), Effect.fork)
      yield* Queue.shutdown(queue)
      const result1 = yield* Deferred.await(deferred1)
      const result2 = yield* Deferred.await(deferred2)
      assert.isTrue(result1)
      assert.isTrue(result2)
    }))

  it.effect("offers are suspended by back pressure", () =>
    Effect.gen(function*() {
      const queue = yield* Queue.bounded<number>(10)
      const ref = yield* Ref.make(true)
      yield* pipe(queue.offer(1), Effect.repeatN(9))
      const fiber = yield* pipe(
        queue,
        Queue.offer(2),
        Effect.zipRight(pipe(ref, Ref.set(false))),
        Effect.fork
      )
      yield* waitForSize(queue, 11)
      const result = yield* Ref.get(ref)
      yield* Fiber.interrupt(fiber)
      assert.isTrue(result)
    }))

  it.effect("back pressured offers are retrieved", () =>
    Effect.gen(function*() {
      const queue = yield* Queue.bounded<number>(10)
      const ref = yield* Ref.make<ReadonlyArray<number>>([])
      const values = Array.from(new Array(10), (_, i) => i + 1)
      const fiber = yield* Effect.forkAll(values.map((n) => pipe(queue, Queue.offer(n))))
      yield* waitForSize(queue, 10)
      yield* pipe(
        Queue.take(queue),
        Effect.flatMap((n) => pipe(ref, Ref.update((values) => [...values, n]))),
        Effect.repeatN(9)
      )
      const result = yield* Ref.get(ref)
      yield* Fiber.join(fiber)
      assert.deepStrictEqual(result, values)
    }))

  it.effect("back-pressured offer completes after take", () =>
    Effect.gen(function*() {
      const queue = yield* Queue.bounded<number>(2)
      yield* pipe(queue, Queue.offerAll([1, 2]))
      const fiber = yield* pipe(queue, Queue.offer(3), Effect.fork)
      yield* waitForSize(queue, 3)
      const result1 = yield* Queue.take(queue)
      const result2 = yield* Queue.take(queue)
      yield* Fiber.join(fiber)
      assert.strictEqual(result1, 1)
      assert.strictEqual(result2, 2)
    }))

  it.effect("back-pressured offer completes after takeAll", () =>
    Effect.gen(function*() {
      const queue = yield* Queue.bounded<number>(2)
      yield* pipe(queue, Queue.offerAll([1, 2]))
      const fiber = yield* pipe(queue, Queue.offer(3), Effect.fork)
      yield* waitForSize(queue, 3)
      const result = yield* Queue.takeAll(queue)
      yield* Fiber.join(fiber)
      assert.deepStrictEqual(result, Chunk.unsafeFromArray([1, 2]))
    }))

  it.effect("back-pressured offer completes after takeUpTo", () =>
    Effect.gen(function*() {
      const queue = yield* Queue.bounded<number>(2)
      yield* pipe(queue, Queue.offerAll([1, 2]))
      const fiber = yield* pipe(queue, Queue.offer(3), Effect.fork)
      yield* waitForSize(queue, 3)
      const result = yield* pipe(queue, Queue.takeUpTo(2))
      yield* Fiber.join(fiber)
      assert.deepStrictEqual(result, Chunk.unsafeFromArray([1, 2]))
    }))

  // TODO(Mike/Max): never completes
  // it.effect("back-pressured offerAll completes after takeAll", () =>
  //   Effect.gen(function*() {
  //     const queue = yield* Queue.bounded<number>(2)
  //     yield* pipe(queue, Queue.offerAll([1, 2]))
  //     const fiber = yield* pipe(queue, Queue.offerAll([3, 4, 5]), Effect.fork)
  //     yield* waitForSize(queue, 5)
  //     const result1 = yield* Queue.takeAll(queue)
  //     const result2 = yield* Queue.takeAll(queue)
  //     const result3 = yield* Queue.takeAll(queue)
  //     yield* Fiber.join(fiber)
  //     assert.deepStrictEqual(result1, Chunk.unsafeFromArray([1, 2]))
  //     assert.deepStrictEqual(result2, Chunk.unsafeFromArray([3, 4]))
  //     assert.deepStrictEqual(result3, Chunk.unsafeFromArray([5]))
  //   }))
})
