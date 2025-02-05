/**
 * @since 1.0.0
 */
import type * as ConfigError from "@effect/io/Config/Error"
import type * as ConfigSecret from "@effect/io/Config/Secret"
import * as internal from "@effect/io/internal_effect_untraced/config"
import type { EnforceNonEmptyRecord, NonEmptyArrayConfig, TupleConfig } from "@effect/io/internal_effect_untraced/types"
import type * as Either from "@fp-ts/core/Either"
import type { LazyArg } from "@fp-ts/core/Function"
import type * as Option from "@fp-ts/core/Option"
import type { Predicate, Refinement } from "@fp-ts/core/Predicate"
import type * as Chunk from "@fp-ts/data/Chunk"
import type * as HashMap from "@fp-ts/data/HashMap"
import type * as HashSet from "@fp-ts/data/HashSet"

/**
 * @since 1.0.0
 * @category symbols
 */
export const ConfigTypeId: unique symbol = internal.ConfigTypeId

/**
 * @since 1.0.0
 * @category symbols
 */
export type ConfigTypeId = typeof ConfigTypeId

/**
 * A `Config` describes the structure of some configuration data.
 *
 * @since 1.0.0
 * @category models
 */
export interface Config<A> extends Config.Variance<A> {}

/**
 * @since 1.0.0
 */
export declare namespace Config {
  /**
   * @since 1.0.0
   * @category models
   */
  export interface Variance<A> {
    readonly [ConfigTypeId]: {
      readonly _A: (_: never) => A
    }
  }

  /**
   * @since 1.0.0
   * @category models
   */
  export interface Primitive<A> extends Config<A> {
    readonly description: string
    parse(text: string): Either.Either<ConfigError.ConfigError, A>
  }
}

/**
 * Wraps a nested structure, converting all primitives to a `Config`.
 *
 * `Wrap<{ key: string }>` becomes `{ key: Config<string> }`
 *
 * To create the resulting config, use the `unwrap` constructor.
 *
 * @since 1.0.0
 * @category models
 */
export type Wrap<A> =
  | (A extends Record<string, any> ? {
    [K in keyof A]: Wrap<A[K]>
  }
    : never)
  | Config<A>

/**
 * Constructs a config for an array of values.
 *
 * @since 1.0.0
 * @category constructors
 */
export const arrayOf: <A>(config: Config<A>, name?: string | undefined) => Config<ReadonlyArray<A>> = internal.arrayOf

/**
 * Constructs a config for a boolean value.
 *
 * @since 1.0.0
 * @category constructors
 */
export const bool: (name?: string | undefined) => Config<boolean> = internal.bool

/**
 * Constructs a config for a sequence of values.
 *
 * @since 1.0.0
 * @category constructors
 */
export const chunkOf: <A>(config: Config<A>, name?: string | undefined) => Config<Chunk.Chunk<A>> = internal.chunkOf

/**
 * Constructs a config for a date value.
 *
 * @since 1.0.0
 * @category constructors
 */
export const date: (name?: string | undefined) => Config<Date> = internal.date

/**
 * Lazily constructs a config.
 *
 * @since 1.0.0
 * @category constructors
 */
export const defer: <A>(config: LazyArg<Config<A>>) => Config<A> = internal.defer

/**
 * Constructs a config that fails with the specified message.
 *
 * @since 1.0.0
 * @category constructors
 */
export const fail: (message: string) => Config<never> = internal.fail

/**
 * Constructs a config for a float value.
 *
 * @since 1.0.0
 * @category constructors
 */
export const float: (name?: string | undefined) => Config<number> = internal.float

/**
 * Constructs a config for a integer value.
 *
 * @since 1.0.0
 * @category constructors
 */
export const integer: (name?: string | undefined) => Config<number> = internal.integer

/**
 * Returns a  config whose structure is the same as this one, but which produces
 * a different value, constructed using the specified function.
 *
 * @since 1.0.0
 * @category mutations
 */
export const map: {
  <A, B>(self: Config<A>, f: (a: A) => B): Config<B>
  <A, B>(f: (a: A) => B): (self: Config<A>) => Config<B>
} = internal.map

/**
 * Returns a config whose structure is the same as this one, but which may
 * produce a different value, constructed using the specified function, which
 * may throw exceptions that will be translated into validation errors.
 *
 * @since 1.0.0
 * @category mutations
 */
export const mapAttempt: {
  <A, B>(self: Config<A>, f: (a: A) => B): Config<B>
  <A, B>(f: (a: A) => B): (self: Config<A>) => Config<B>
} = internal.mapAttempt

/**
 * Returns a new config whose structure is the samea as this one, but which
 * may produce a different value, constructed using the specified fallible
 * function.
 *
 * @since 1.0.0
 * @category mutations
 */
export const mapOrFail: {
  <A, B>(self: Config<A>, f: (a: A) => Either.Either<ConfigError.ConfigError, B>): Config<B>
  <A, B>(f: (a: A) => Either.Either<ConfigError.ConfigError, B>): (self: Config<A>) => Config<B>
} = internal.mapOrFail

/**
 * Returns a config that has this configuration nested as a property of the
 * specified name.
 *
 * @since 1.0.0
 * @category mutations
 */
export const nested: {
  <A>(self: Config<A>, name: string): Config<A>
  (name: string): <A>(self: Config<A>) => Config<A>
} = internal.nested

/**
 * Returns a config whose structure is preferentially described by this
 * config, but which falls back to the specified config if there is an issue
 * reading from this config.
 *
 * @since 1.0.0
 * @category mutations
 */
export const orElse: {
  <A, A2>(self: Config<A>, that: LazyArg<Config<A2>>): Config<A | A2>
  <A2>(that: LazyArg<Config<A2>>): <A>(self: Config<A>) => Config<A2 | A>
} = internal.orElse

/**
 * Returns configuration which reads from this configuration, but which falls
 * back to the specified configuration if reading from this configuration
 * fails with an error satisfying the specified predicate.
 *
 * @since 1.0.0
 * @category mutations
 */
export const orElseIf: {
  <A, A2>(self: Config<A>, that: LazyArg<Config<A2>>, condition: Predicate<ConfigError.ConfigError>): Config<A>
  <A2>(that: LazyArg<Config<A2>>, condition: Predicate<ConfigError.ConfigError>): <A>(self: Config<A>) => Config<A>
} = internal.orElseIf

/**
 * Returns an optional version of this config, which will be `None` if the
 * data is missing from configuration, and `Some` otherwise.
 *
 * @since 1.0.0
 * @category mutations
 */
export const optional: <A>(self: Config<A>) => Config<Option.Option<A>> = internal.optional

/**
 * Constructs a new primitive config.
 *
 * @since 1.0.0
 * @category constructors
 */
export const primitive: <A>(
  description: string,
  parse: (text: string) => Either.Either<ConfigError.ConfigError, A>
) => Config<A> = internal.primitive

/**
 * Returns a config that describes a sequence of values, each of which has the
 * structure of this config.
 *
 * @since 1.0.0
 * @category mutations
 */
export const repeat: <A>(self: Config<A>) => Config<Chunk.Chunk<A>> = internal.repeat

/**
 * Constructs a config for a secret value.
 *
 * @since 1.0.0
 * @category constructors
 */
export const secret: (name?: string | undefined) => Config<ConfigSecret.ConfigSecret> = internal.secret

/**
 * Constructs a config for a sequence of values.
 *
 * @since 1.0.0
 * @category constructors
 */
export const setOf: <A>(config: Config<A>, name?: string | undefined) => Config<HashSet.HashSet<A>> = internal.setOf

/**
 * Constructs a config for a string value.
 *
 * @since 1.0.0
 * @category constructors
 */
export const string: (name?: string | undefined) => Config<string> = internal.string

/**
 * Constructs a config from a record of configs.
 *
 * @since 1.0.0
 * @category constructors
 */
export const struct: <NER extends Record<string, Config<any>>>(
  r: EnforceNonEmptyRecord<NER> | Record<string, Config<any>>
) => Config<
  { [K in keyof NER]: [NER[K]] extends [{ [ConfigTypeId]: { _A: (_: never) => infer A } }] ? A : never }
> = internal.struct

/**
 * Constructs a config which contains the specified value.
 *
 * @since 1.0.0
 * @category constructors
 */
export const succeed: <A>(value: A) => Config<A> = internal.succeed

/**
 * Constructs a config which contains the specified lazy value.
 *
 * @since 1.0.0
 * @category constructors
 */
export const sync: <A>(value: LazyArg<A>) => Config<A> = internal.sync

/**
 * Constructs a config for a sequence of values.
 *
 * @since 1.0.0
 * @category constructors
 */
export const table: <A>(config: Config<A>, name?: string | undefined) => Config<HashMap.HashMap<string, A>> =
  internal.table

/**
 * Constructs a config from a tuple of configs.
 *
 * @since 1.0.0
 * @category constructors
 */
export const tuple: <T extends NonEmptyArrayConfig>(
  ...tuple: T
) => Config<TupleConfig<T>> = internal.tuple

/**
 * Constructs a config from some configuration wrapped with the `Wrap<A>` utility type.
 *
 * For example:
 *
 * ```
 * import { Config, Wrap, unwrap } from "@effect/io/Config"
 *
 * interface Options { key: string }
 *
 * const makeConfig = (config: Wrap<Options>): Config<Options> => unwrap(config)
 * ```
 *
 * @since 1.0.0
 * @category constructors
 */
export const unwrap: <A>(wrapped: Wrap<A>) => Config<A> = internal.unwrap

/**
 * Returns a config that describes the same structure as this one, but which
 * performs validation during loading.
 *
 * @since 1.0.0
 * @category mutations
 */
export const validate: {
  <A, B extends A>(self: Config<A>, message: string, f: Refinement<A, B>): Config<B>
  <A>(self: Config<A>, message: string, f: Predicate<A>): Config<A>
  <A, B extends A>(message: string, f: Refinement<A, B>): (self: Config<A>) => Config<B>
  <A>(message: string, f: Predicate<A>): (self: Config<A>) => Config<A>
} = internal.validate

/**
 * Returns a config that describes the same structure as this one, but has the
 * specified default value in case the information cannot be found.
 *
 * @since 1.0.0
 * @category mutations
 */
export const withDefault: {
  <A, A2>(self: Config<A>, def: A2): Config<A | A2>
  <A2>(def: A2): <A>(self: Config<A>) => Config<A2 | A>
} = internal.withDefault

/**
 * Adds a description to this configuration, which is intended for humans.
 *
 * @since 1.0.0
 * @category mutations
 */
export const withDescription: {
  <A>(self: Config<A>, description: string): Config<A>
  (description: string): <A>(self: Config<A>) => Config<A>
} = internal.withDescription

/**
 * Returns a config that is the composition of this config and the specified
 * config.
 *
 * @since 1.0.0
 * @category mutations
 */
export const zip: {
  <A, B>(self: Config<A>, that: Config<B>): Config<readonly [A, B]>
  <B>(that: Config<B>): <A>(self: Config<A>) => Config<readonly [A, B]>
} = internal.zip

/**
 * Returns a config that is the composes this config and the specified config
 * using the provided function.
 *
 * @since 1.0.0
 * @category mutations
 */
export const zipWith: {
  <A, B, C>(self: Config<A>, that: Config<B>, f: (a: A, b: B) => C): Config<C>
  <B, A, C>(that: Config<B>, f: (a: A, b: B) => C): (self: Config<A>) => Config<C>
} = internal.zipWith
