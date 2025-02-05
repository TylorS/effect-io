import type * as Fiber from "@effect/io/Fiber"
import * as Either from "@fp-ts/core/Either"
import { pipe } from "@fp-ts/core/Function"
import * as Chunk from "@fp-ts/data/Chunk"
import * as Context from "@fp-ts/data/Context"
import * as Equal from "@fp-ts/data/Equal"
import * as Hash from "@fp-ts/data/Hash"
import * as HashSet from "@fp-ts/data/HashSet"
import type * as MutableRef from "@fp-ts/data/MutableRef"
import type * as SortedSet from "@fp-ts/data/SortedSet"

/** @internal */
const TestAnnotationSymbolKey = "@effect/test/TestAnnotation"

/** @internal */
export const TestAnnotationTypeId = Symbol.for(TestAnnotationSymbolKey)

/** @internal */
export type TestAnnotationTypeId = typeof TestAnnotationTypeId

/** @internal */
export interface TestAnnotation<A> extends Equal.Equal {
  readonly [TestAnnotationTypeId]: TestAnnotationTypeId
  readonly identifier: string
  readonly tag: Context.Tag<A>
  readonly initial: A
  readonly combine: (a: A, b: A) => A
}

/** @internal */
class TestAnnotationImpl<A> implements Equal.Equal {
  readonly [TestAnnotationTypeId]: TestAnnotationTypeId = TestAnnotationTypeId
  constructor(
    readonly identifier: string,
    readonly tag: Context.Tag<A>,
    readonly initial: A,
    readonly combine: (a: A, b: A) => A
  ) {}
  [Hash.symbol](): number {
    return pipe(
      Hash.hash(TestAnnotationSymbolKey),
      Hash.combine(Hash.hash(this.identifier)),
      Hash.combine(Hash.hash(this.tag))
    )
  }
  [Equal.symbol](that: unknown): boolean {
    return isTestAnnotation(that) &&
      this.identifier === that.identifier &&
      Equal.equals(this.tag, that.tag)
  }
}

/** @internal */
export const isTestAnnotation = (u: unknown): u is TestAnnotation<unknown> => {
  return typeof u === "object" && u != null && TestAnnotationTypeId in u
}

/** @internal */
export const make = <A>(
  identifier: string,
  tag: Context.Tag<A>,
  initial: A,
  combine: (a: A, b: A) => A
): TestAnnotation<A> => {
  return new TestAnnotationImpl(identifier, tag, initial, combine)
}

/** @internal */
export const compose = <A>(
  left: Either.Either<number, Chunk.Chunk<A>>,
  right: Either.Either<number, Chunk.Chunk<A>>
): Either.Either<number, Chunk.Chunk<A>> => {
  if (Either.isLeft(left) && Either.isLeft(right)) {
    return Either.left(left.left + right.left)
  }
  if (Either.isRight(left) && Either.isRight(right)) {
    return Either.right(pipe(left.right, Chunk.concat(right.right)))
  }
  if (Either.isRight(left) && Either.isLeft(right)) {
    return right
  }
  if (Either.isLeft(left) && Either.isRight(right)) {
    return right
  }
  throw new Error("BUG: TestAnnotation.compose - please report an issue at https://github.com/Effect-TS/io/issues")
}

/** @internal */
export const fibers: TestAnnotation<
  Either.Either<
    number,
    Chunk.Chunk<MutableRef.MutableRef<SortedSet.SortedSet<Fiber.RuntimeFiber<unknown, unknown>>>>
  >
> = make(
  "fibers",
  Context.Tag<
    Either.Either<number, Chunk.Chunk<MutableRef.MutableRef<SortedSet.SortedSet<Fiber.RuntimeFiber<unknown, unknown>>>>>
  >(),
  Either.left(0),
  compose
)

/**
 * An annotation which counts ignored tests.
 *
 * @internal
 */
export const ignored: TestAnnotation<number> = make(
  "ignored",
  Context.Tag<number>(),
  0,
  (a, b) => a + b
)

/**
 * An annotation which counts repeated tests.
 *
 * @internal
 */
export const repeated: TestAnnotation<number> = make(
  "repeated",
  Context.Tag<number>(),
  0,
  (a, b) => a + b
)

/**
 * An annotation which counts retried tests.
 *
 * @internal
 */
export const retried: TestAnnotation<number> = make(
  "retried",
  Context.Tag<number>(),
  0,
  (a, b) => a + b
)

/**
 * An annotation which tags tests with strings.
 *
 * @internal
 */
export const tagged: TestAnnotation<HashSet.HashSet<string>> = make(
  "tagged",
  Context.Tag<HashSet.HashSet<string>>(),
  HashSet.empty(),
  (a, b) => pipe(a, HashSet.union(b))
)
