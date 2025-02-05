/**
 * @since 1.0.0
 */
import type * as Effect from "@effect/io/Effect"
import * as internal from "@effect/io/internal_effect_untraced/ref"
import type * as Option from "@fp-ts/core/Option"

/**
 * @since 1.0.0
 * @category symbols
 */
export const RefTypeId: unique symbol = internal.RefTypeId

/**
 * @since 1.0.0
 * @category symbols
 */
export type RefTypeId = typeof RefTypeId

/**
 * @since 1.0.0
 * @category models
 */
export interface Ref<A> extends Ref.Variance<A> {
  modify<B>(f: (a: A) => readonly [B, A]): Effect.Effect<never, never, B>
}

/**
 * @since 1.0.0
 * @category models
 */
export namespace Ref {
  export interface Variance<A> {
    readonly [RefTypeId]: {
      readonly _A: (_: never) => A
    }
  }
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make: <A>(value: A) => Effect.Effect<never, never, Ref<A>> = internal.make

/**
 * @since 1.0.0
 * @category getters
 */
export const get: <A>(self: Ref<A>) => Effect.Effect<never, never, A> = internal.get

/**
 * @since 1.0.0
 * @category mutations
 */
export const getAndSet: {
  <A>(self: Ref<A>, value: A): Effect.Effect<never, never, A>
  <A>(value: A): (self: Ref<A>) => Effect.Effect<never, never, A>
} = internal.getAndSet

/**
 * @since 1.0.0
 * @category mutations
 */
export const getAndUpdate: {
  <A>(self: Ref<A>, f: (a: A) => A): Effect.Effect<never, never, A>
  <A>(f: (a: A) => A): (self: Ref<A>) => Effect.Effect<never, never, A>
} = internal.getAndUpdate

/**
 * @since 1.0.0
 * @category mutations
 */
export const getAndUpdateSome: {
  <A>(self: Ref<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<never, never, A>
  <A>(pf: (a: A) => Option.Option<A>): (self: Ref<A>) => Effect.Effect<never, never, A>
} = internal.getAndUpdateSome

/**
 * @since 1.0.0
 * @category mutations
 */
export const modify: {
  <A, B>(self: Ref<A>, f: (a: A) => readonly [B, A]): Effect.Effect<never, never, B>
  <A, B>(f: (a: A) => readonly [B, A]): (self: Ref<A>) => Effect.Effect<never, never, B>
} = internal.modify

/**
 * @since 1.0.0
 * @category mutations
 */
export const modifySome: {
  <A, B>(self: Ref<A>, fallback: B, pf: (a: A) => Option.Option<readonly [B, A]>): Effect.Effect<never, never, B>
  <B, A>(fallback: B, pf: (a: A) => Option.Option<readonly [B, A]>): (self: Ref<A>) => Effect.Effect<never, never, B>
} = internal.modifySome

/**
 * @since 1.0.0
 * @category mutations
 */
export const set: {
  <A>(self: Ref<A>, value: A): Effect.Effect<never, never, void>
  <A>(value: A): (self: Ref<A>) => Effect.Effect<never, never, void>
} = internal.set

/**
 * @since 1.0.0
 * @category mutations
 */
export const setAndGet: {
  <A>(self: Ref<A>, value: A): Effect.Effect<never, never, A>
  <A>(value: A): (self: Ref<A>) => Effect.Effect<never, never, A>
} = internal.setAndGet

/**
 * @since 1.0.0
 * @category mutations
 */
export const update: {
  <A>(self: Ref<A>, f: (a: A) => A): Effect.Effect<never, never, void>
  <A>(f: (a: A) => A): (self: Ref<A>) => Effect.Effect<never, never, void>
} = internal.update

/**
 * @since 1.0.0
 * @category mutations
 */
export const updateAndGet: {
  <A>(self: Ref<A>, f: (a: A) => A): Effect.Effect<never, never, A>
  <A>(f: (a: A) => A): (self: Ref<A>) => Effect.Effect<never, never, A>
} = internal.updateAndGet

/**
 * @since 1.0.0
 * @category mutations
 */
export const updateSome: {
  <A>(self: Ref<A>, f: (a: A) => Option.Option<A>): Effect.Effect<never, never, void>
  <A>(f: (a: A) => Option.Option<A>): (self: Ref<A>) => Effect.Effect<never, never, void>
} = internal.updateSome

/**
 * @since 1.0.0
 * @category mutations
 */
export const updateSomeAndGet: {
  <A>(self: Ref<A>, pf: (a: A) => Option.Option<A>): Effect.Effect<never, never, A>
  <A>(pf: (a: A) => Option.Option<A>): (self: Ref<A>) => Effect.Effect<never, never, A>
} = internal.updateSomeAndGet

/**
 * @since 1.0.0
 * @category unsafe
 */
export const unsafeMake: <A>(value: A) => Ref<A> = internal.unsafeMake
