import * as Debug from "@effect/io/Debug"
import type * as Effect from "@effect/io/Effect"
import * as core from "@effect/io/internal_effect_untraced/core"
import type * as Ref from "@effect/io/Ref"
import { pipe } from "@fp-ts/core/Function"
import * as Option from "@fp-ts/core/Option"
import * as MutableRef from "@fp-ts/data/MutableRef"

/** @internal */
export const RefTypeId: Ref.RefTypeId = Symbol.for("@effect/io/Ref") as Ref.RefTypeId

/** @internal */
export const refVariance = {
  _A: (_: never) => _
}

/** @internal */
export const unsafeMake = <A>(value: A): Ref.Ref<A> => {
  const ref = MutableRef.make(value)
  return {
    [RefTypeId]: refVariance,
    modify: (f) =>
      Debug.bodyWithTrace((trace, restore) =>
        core.sync(() => {
          const current = MutableRef.get(ref)
          const [b, a] = restore(f)(current)
          if ((current as unknown) !== (a as unknown)) {
            MutableRef.set(a)(ref)
          }
          return b
        }).traced(trace)
      )
  }
}

/** @internal */
export const make = Debug.methodWithTrace((trace) =>
  <A>(value: A): Effect.Effect<never, never, Ref.Ref<A>> => core.sync(() => unsafeMake(value)).traced(trace)
)

/** @internal */
export const get = Debug.methodWithTrace((trace) => <A>(self: Ref.Ref<A>) => self.modify((a) => [a, a]).traced(trace))

/** @internal */
export const set = Debug.dualWithTrace<
  <A>(self: Ref.Ref<A>, value: A) => Effect.Effect<never, never, void>,
  <A>(value: A) => (self: Ref.Ref<A>) => Effect.Effect<never, never, void>
>(2, (trace) => <A>(self: Ref.Ref<A>, value: A) => self.modify((): [void, A] => [void 0, value]).traced(trace))

/** @internal */
export const getAndSet = Debug.dualWithTrace<
  <A>(self: Ref.Ref<A>, value: A) => Effect.Effect<never, never, A>,
  <A>(value: A) => (self: Ref.Ref<A>) => Effect.Effect<never, never, A>
>(2, (trace) => <A>(self: Ref.Ref<A>, value: A) => self.modify((a): [A, A] => [a, value]).traced(trace))

/** @internal */
export const getAndUpdate = Debug.dualWithTrace<
  <A>(self: Ref.Ref<A>, f: (a: A) => A) => Effect.Effect<never, never, A>,
  <A>(f: (a: A) => A) => (self: Ref.Ref<A>) => Effect.Effect<never, never, A>
>(2, (trace, restore) =>
  <A>(self: Ref.Ref<A>, f: (a: A) => A) =>
    self.modify(
      (a): [A, A] => [a, restore(f)(a)]
    ).traced(trace))

/** @internal */
export const getAndUpdateSome = Debug.dualWithTrace<
  <A>(self: Ref.Ref<A>, pf: (a: A) => Option.Option<A>) => Effect.Effect<never, never, A>,
  <A>(pf: (a: A) => Option.Option<A>) => (self: Ref.Ref<A>) => Effect.Effect<never, never, A>
>(2, (trace, restore) =>
  <A>(self: Ref.Ref<A>, pf: (a: A) => Option.Option<A>) =>
    self.modify((value): [A, A] => {
      const option = restore(pf)(value)
      switch (option._tag) {
        case "None": {
          return [value, value]
        }
        case "Some": {
          return [value, option.value]
        }
      }
    }).traced(trace))

/** @internal */
export const setAndGet = Debug.dualWithTrace<
  <A>(self: Ref.Ref<A>, value: A) => Effect.Effect<never, never, A>,
  <A>(value: A) => (self: Ref.Ref<A>) => Effect.Effect<never, never, A>
>(2, (trace) => <A>(self: Ref.Ref<A>, value: A) => self.modify((): [A, A] => [value, value]).traced(trace))

/** @internal */
export const modify = Debug.dualWithTrace<
  <A, B>(self: Ref.Ref<A>, f: (a: A) => readonly [B, A]) => Effect.Effect<never, never, B>,
  <A, B>(f: (a: A) => readonly [B, A]) => (self: Ref.Ref<A>) => Effect.Effect<never, never, B>
>(2, (trace, restore) => (self, f) => self.modify(restore(f)).traced(trace))

/** @internal */
export const modifySome = Debug.dualWithTrace<
  <A, B>(
    self: Ref.Ref<A>,
    fallback: B,
    pf: (a: A) => Option.Option<readonly [B, A]>
  ) => Effect.Effect<never, never, B>,
  <B, A>(
    fallback: B,
    pf: (a: A) => Option.Option<readonly [B, A]>
  ) => (self: Ref.Ref<A>) => Effect.Effect<never, never, B>
>(3, (trace, restore) =>
  (self, fallback, pf) =>
    self.modify((value) => {
      const option = restore(pf)(value)
      switch (option._tag) {
        case "None": {
          return [fallback, value]
        }
        case "Some": {
          return option.value
        }
      }
    }).traced(trace))

/** @internal */
export const update = Debug.dualWithTrace<
  <A>(self: Ref.Ref<A>, f: (a: A) => A) => Effect.Effect<never, never, void>,
  <A>(f: (a: A) => A) => (self: Ref.Ref<A>) => Effect.Effect<never, never, void>
>(2, (trace, restore) =>
  <A>(self: Ref.Ref<A>, f: (a: A) => A) =>
    self.modify(
      (a): [void, A] => [void 0, restore(f)(a)]
    ).traced(trace))

/** @internal */
export const updateAndGet = Debug.dualWithTrace<
  <A>(self: Ref.Ref<A>, f: (a: A) => A) => Effect.Effect<never, never, A>,
  <A>(f: (a: A) => A) => (self: Ref.Ref<A>) => Effect.Effect<never, never, A>
>(2, (trace, restore) =>
  <A>(self: Ref.Ref<A>, f: (a: A) => A) =>
    self.modify((a): [A, A] => {
      const result = restore(f)(a)
      return [result, result]
    }).traced(trace))

/** @internal */
export const updateSome = Debug.dualWithTrace<
  <A>(self: Ref.Ref<A>, f: (a: A) => Option.Option<A>) => Effect.Effect<never, never, void>,
  <A>(f: (a: A) => Option.Option<A>) => (self: Ref.Ref<A>) => Effect.Effect<never, never, void>
>(2, (trace, restore) =>
  <A>(self: Ref.Ref<A>, f: (a: A) => Option.Option<A>) =>
    self.modify(
      (a): [void, A] => [void 0, pipe(restore(f)(a), Option.match(() => a, (b) => b))]
    ).traced(trace))

/** @internal */
export const updateSomeAndGet = Debug.dualWithTrace<
  <A>(self: Ref.Ref<A>, pf: (a: A) => Option.Option<A>) => Effect.Effect<never, never, A>,
  <A>(pf: (a: A) => Option.Option<A>) => (self: Ref.Ref<A>) => Effect.Effect<never, never, A>
>(2, (trace, restore) =>
  <A>(self: Ref.Ref<A>, pf: (a: A) => Option.Option<A>) =>
    self.modify((value): [A, A] => {
      const option = restore(pf)(value)
      switch (option._tag) {
        case "None": {
          return [value, value]
        }
        case "Some": {
          return [option.value, option.value]
        }
      }
    }).traced(trace))
