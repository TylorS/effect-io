/**
 * @since 1.0.0
 */
import type * as Cause from "@effect/io/Cause"
import type * as Effect from "@effect/io/Effect"
import type * as FiberId from "@effect/io/Fiber/Id"
import * as core from "@effect/io/internal_effect_untraced/core"
import type * as Either from "@fp-ts/core/Either"
import type * as Option from "@fp-ts/core/Option"
import type { Predicate } from "@fp-ts/core/Predicate"
import type * as Chunk from "@fp-ts/data/Chunk"

/**
 * An `Exit<E, A>` describes the result of a executing an `Effect` workflow.
 *
 * There are two possible values for an `Exit<E, A>`:
 *   - `Exit.Success` contain a success value of type `A`
 *   - `Exit.Failure` contains a failure `Cause` of type `E`
 *
 * @since 1.0.0
 * @category models
 */
export type Exit<E, A> = Failure<E> | Success<A>

/**
 * Represents a failed `Effect` workflow containing the `Cause` of the failure
 * of type `E`.
 *
 * @since 1.0.0
 * @category models
 */
export interface Failure<E> extends Effect.Effect<never, E, never> {
  readonly _tag: "Failure"
  readonly cause: Cause.Cause<E>
}

/**
 * Represents a successful `Effect` workflow and containing the returned value
 * of type `A`.
 *
 * @since 1.0.0
 * @category models
 */
export interface Success<A> extends Effect.Effect<never, never, A> {
  readonly _tag: "Success"
  readonly value: A
}

/**
 * Returns `true` if the specified value is an `Exit`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
export const isExit: (u: unknown) => u is Exit<unknown, unknown> = core.exitIsExit

/**
 * Returns `true` if the specified `Exit` is a `Failure`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
export const isFailure: <E, A>(self: Exit<E, A>) => self is Failure<E> = core.exitIsFailure

/**
 * Returns `true` if the specified `Exit` is a `Success`, `false` otherwise.
 *
 * @since 1.0.0
 * @category refinements
 */
export const isSuccess: <E, A>(self: Exit<E, A>) => self is Success<A> = core.exitIsSuccess

/**
 * Returns `true` if the specified exit is a `Failure` **and** the `Cause` of
 * the failure was due to interruption, `false` otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
export const isInterrupted: <E, A>(self: Exit<E, A>) => boolean = core.exitIsInterrupted

/**
 * Maps the `Success` value of the specified exit to the provided constant
 * value.
 *
 * @since 1.0.0
 * @category mapping
 */
export const as: {
  <E, A, A2>(self: Exit<E, A>, value: A2): Exit<E, A2>
  <A2>(value: A2): <E, A>(self: Exit<E, A>) => Exit<E, A2>
} = core.exitAs

/**
 * Maps the `Success` value of the specified exit to a void.
 *
 * @since 1.0.0
 * @category mapping
 */
export const asUnit: <E, A>(self: Exit<E, A>) => Exit<E, void> = core.exitAsUnit

/**
 * Returns a `Some<Cause<E>>` if the specified exit is a `Failure`, `None`
 * otherwise.
 *
 * @since 1.0.0
 * @category getters
 */
export const causeOption: <E, A>(self: Exit<E, A>) => Option.Option<Cause.Cause<E>> = core.exitCauseOption

/**
 * Collects all of the specified exit values into a `Some<Exit<E, List<A>>>`. If
 * the provided iterable contains no elements, `None` will be returned.
 *
 * **Note**: `Exit.collectAll` combines `Cause` values sequentially.
 *
 * @since 1.0.0
 * @category constructors
 */
export const collectAll: <E, A>(exits: Iterable<Exit<E, A>>) => Option.Option<Exit<E, Chunk.Chunk<A>>> =
  core.exitCollectAll

/**
 * Collects all of the specified exit values into a `Some<Exit<E, List<A>>>`. If
 * the provided iterable contains no elements, `None` will be returned.
 *
 * **Note**: `Exit.collectAll` combines `Cause` values in parallel.
 *
 * @since 1.0.0
 * @category constructors
 */
export const collectAllPar: <E, A>(exits: Iterable<Exit<E, A>>) => Option.Option<Exit<E, Chunk.Chunk<A>>> =
  core.exitCollectAllPar

/**
 * Constructs a new `Exit.Failure` from the specified unrecoverable defect.
 *
 * @since 1.0.0
 * @category constructors
 */
export const die: (defect: unknown) => Exit<never, never> = core.exitDie

/**
 * Executes the predicate on the value of the specified exit if it is a
 * `Success`, otherwise returns `false`.
 *
 * @since 1.0.0
 * @category elements
 */
export const exists: {
  <E, A>(self: Exit<E, A>, predicate: Predicate<A>): boolean
  <A>(predicate: Predicate<A>): <E>(self: Exit<E, A>) => boolean
} = core.exitExists

/**
 * Constructs a new `Exit.Failure` from the specified recoverable error of type
 * `E`.
 *
 * @since 1.0.0
 * @category constructors
 */
export const fail: <E>(error: E) => Exit<E, never> = core.exitFail

/**
 * Constructs a new `Exit.Failure` from the specified `Cause` of type `E`.
 *
 * @since 1.0.0
 * @category constructors
 */
export const failCause: <E>(cause: Cause.Cause<E>) => Exit<E, never> = core.exitFailCause

/**
 * @since 1.0.0
 * @category sequencing
 */
export const flatMap: {
  <E, A, E2, A2>(self: Exit<E, A>, f: (a: A) => Exit<E2, A2>): Exit<E | E2, A2>
  <A, E2, A2>(f: (a: A) => Exit<E2, A2>): <E>(self: Exit<E, A>) => Exit<E2 | E, A2>
} = core.exitFlatMap

/**
 * @since 1.0.0
 * @category sequencing
 */
export const flatMapEffect: {
  <E, A, R, E2, A2>(
    self: Exit<E, A>,
    f: (a: A) => Effect.Effect<R, E2, Exit<E, A2>>
  ): Effect.Effect<R, E2, Exit<E, A2>>
  <E, A, R, E2, A2>(
    f: (a: A) => Effect.Effect<R, E2, Exit<E, A2>>
  ): (self: Exit<E, A>) => Effect.Effect<R, E2, Exit<E, A2>>
} = core.exitFlatMapEffect

/**
 * @since 1.0.0
 * @category sequencing
 */
export const flatten: <E, E1, A>(self: Exit<E, Exit<E1, A>>) => Exit<E | E1, A> = core.exitFlatten

/**
 * @since 1.0.0
 * @category traversing
 */
export const forEachEffect: {
  <E, A, R, E2, B>(self: Exit<E, A>, f: (a: A) => Effect.Effect<R, E2, B>): Effect.Effect<R, never, Exit<E | E2, B>>
  <A, R, E2, B>(f: (a: A) => Effect.Effect<R, E2, B>): <E>(self: Exit<E, A>) => Effect.Effect<R, never, Exit<E2 | E, B>>
} = core.exitForEachEffect

/**
 * Converts an `Either<E, A>` into an `Exit<E, A>`.
 *
 * @since 1.0.0
 * @category conversions
 */
export const fromEither: <E, A>(either: Either.Either<E, A>) => Exit<E, A> = core.exitFromEither

/**
 * Converts an `Option<A>` into an `Exit<void, A>`.
 *
 * @since 1.0.0
 * @category conversions
 */
export const fromOption: <A>(option: Option.Option<A>) => Exit<void, A> = core.exitFromOption

/**
 * Returns the `A` if specified exit is a `Success`, otherwise returns the
 * alternate `A` value computed from the specified function which receives the
 * `Cause<E>` of the exit `Failure`.
 *
 * @since 1.0.0
 * @category getters
 */
export const getOrElse: {
  <E, A>(self: Exit<E, A>, orElse: (cause: Cause.Cause<E>) => A): A
  <E, A>(orElse: (cause: Cause.Cause<E>) => A): (self: Exit<E, A>) => A
} = core.exitGetOrElse

/**
 * Constructs a new `Exit.Failure` from the specified `FiberId` indicating that
 * the `Fiber` running an `Effect` workflow was terminated due to interruption.
 *
 * @since 1.0.0
 * @category constructors
 */
export const interrupt: (fiberId: FiberId.FiberId) => Exit<never, never> = core.exitInterrupt

/**
 * Maps over the `Success` value of the specified exit using the provided
 * function.
 *
 * @since 1.0.0
 * @category mapping
 */
export const map: {
  <E, A, B>(self: Exit<E, A>, f: (a: A) => B): Exit<E, B>
  <A, B>(f: (a: A) => B): <E>(self: Exit<E, A>) => Exit<E, B>
} = core.exitMap

/**
 * Maps over the `Success` and `Failure` cases of the specified exit using the
 * provided functions.
 *
 * @since 1.0.0
 * @category mapping
 */
export const mapBoth: {
  <E, A, E2, A2>(self: Exit<E, A>, onFailure: (e: E) => E2, onSuccess: (a: A) => A2): Exit<E2, A2>
  <E, A, E2, A2>(onFailure: (e: E) => E2, onSuccess: (a: A) => A2): (self: Exit<E, A>) => Exit<E2, A2>
} = core.exitMapBoth

/**
 * Maps over the error contained in the `Failure` of the specified exit using
 * the provided function.
 *
 * @since 1.0.0
 * @category mapping
 */
export const mapError: {
  <E, A, E2>(self: Exit<E, A>, f: (e: E) => E2): Exit<E2, A>
  <E, E2>(f: (e: E) => E2): <A>(self: Exit<E, A>) => Exit<E2, A>
} = core.exitMapError

/**
 * Maps over the `Cause` contained in the `Failure` of the specified exit using
 * the provided function.
 *
 * @since 1.0.0
 * @category mapping
 */
export const mapErrorCause: {
  <E, A, E2>(self: Exit<E, A>, f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): Exit<E2, A>
  <E, E2>(f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): <A>(self: Exit<E, A>) => Exit<E2, A>
} = core.exitMapErrorCause

/**
 * @since 1.0.0
 * @category folding
 */
export const match: {
  <E, A, Z>(self: Exit<E, A>, onFailure: (cause: Cause.Cause<E>) => Z, onSuccess: (a: A) => Z): Z
  <E, A, Z>(onFailure: (cause: Cause.Cause<E>) => Z, onSuccess: (a: A) => Z): (self: Exit<E, A>) => Z
} = core.exitMatch

/**
 * @since 1.0.0
 * @category folding
 */
export const matchEffect: {
  <E, A, R, E2, A2, R2, E3, A3>(
    self: Exit<E, A>,
    onFailure: (cause: Cause.Cause<E>) => Effect.Effect<R, E2, A2>,
    onSuccess: (a: A) => Effect.Effect<R2, E3, A3>
  ): Effect.Effect<R | R2, E2 | E3, A2 | A3>
  <E, A, R, E2, A2, R2, E3, A3>(
    onFailure: (cause: Cause.Cause<E>) => Effect.Effect<R, E2, A2>,
    onSuccess: (a: A) => Effect.Effect<R2, E3, A3>
  ): (self: Exit<E, A>) => Effect.Effect<R | R2, E3, A3>
} = core.exitMatchEffect

/**
 * Constructs a new `Exit.Success` containing the specified value of type `A`.
 *
 * @since 1.0.0
 * @category constructors
 */
export const succeed: <A>(value: A) => Exit<never, A> = core.exitSucceed

/**
 * Removes any annotation from the failure cause
 *
 * @since 1.0.0
 * @category filtering
 */
export const unannotate: <E, A>(exit: Exit<E, A>) => Exit<E, A> = core.exitUnannotate

/**
 * Represents an `Exit` which succeeds with `undefined`.
 *
 * @since 1.0.0
 * @category constructors
 */
export const unit: (_: void) => Exit<never, void> = core.exitUnit

/**
 * Sequentially zips the this result with the specified result or else returns
 * the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
export const zip: {
  <E, A, E2, A2>(self: Exit<E, A>, that: Exit<E2, A2>): Exit<E | E2, readonly [A, A2]>
  <E2, A2>(that: Exit<E2, A2>): <E, A>(self: Exit<E, A>) => Exit<E2 | E, readonly [A, A2]>
} = core.exitZip

/**
 * Sequentially zips the this result with the specified result discarding the
 * second element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
export const zipLeft: {
  <E, A, E2, A2>(self: Exit<E, A>, that: Exit<E2, A2>): Exit<E | E2, A>
  <E2, A2>(that: Exit<E2, A2>): <E, A>(self: Exit<E, A>) => Exit<E2 | E, A>
} = core.exitZipLeft

/**
 * Sequentially zips the this result with the specified result discarding the
 * first element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
export const zipRight: {
  <E, A, E2, A2>(self: Exit<E, A>, that: Exit<E2, A2>): Exit<E | E2, A2>
  <E2, A2>(that: Exit<E2, A2>): <E, A>(self: Exit<E, A>) => Exit<E2 | E, A2>
} = core.exitZipRight

/**
 * Parallelly zips the this result with the specified result or else returns
 * the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
export const zipPar: {
  <E, A, E2, A2>(self: Exit<E, A>, that: Exit<E2, A2>): Exit<E | E2, readonly [A, A2]>
  <E2, A2>(that: Exit<E2, A2>): <E, A>(self: Exit<E, A>) => Exit<E2 | E, readonly [A, A2]>
} = core.exitZipPar

/**
 * Parallelly zips the this result with the specified result discarding the
 * second element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
export const zipParLeft: {
  <E, A, E2, A2>(self: Exit<E, A>, that: Exit<E2, A2>): Exit<E | E2, A>
  <E2, A2>(that: Exit<E2, A2>): <E, A>(self: Exit<E, A>) => Exit<E2 | E, A>
} = core.exitZipParLeft

/**
 * Parallelly zips the this result with the specified result discarding the
 * first element of the tuple or else returns the failed `Cause<E | E2>`.
 *
 * @since 1.0.0
 * @category zipping
 */
export const zipParRight: {
  <E, A, E2, A2>(self: Exit<E, A>, that: Exit<E2, A2>): Exit<E | E2, A2>
  <E2, A2>(that: Exit<E2, A2>): <E, A>(self: Exit<E, A>) => Exit<E2 | E, A2>
} = core.exitZipParRight

/**
 * Zips this exit together with that exit using the specified combination
 * functions.
 *
 * @since 1.0.0
 * @category zipping
 */
export const zipWith: {
  <E, E2, A, B, C>(
    self: Exit<E, A>,
    that: Exit<E2, B>,
    f: (a: A, b: B) => C,
    g: (cause: Cause.Cause<E>, cause2: Cause.Cause<E2>) => Cause.Cause<E | E2>
  ): Exit<E | E2, C>
  <E, E2, A, B, C>(
    that: Exit<E2, B>,
    f: (a: A, b: B) => C,
    g: (cause: Cause.Cause<E>, cause2: Cause.Cause<E2>) => Cause.Cause<E | E2>
  ): (self: Exit<E, A>) => Exit<E | E2, C>
} = core.exitZipWith
