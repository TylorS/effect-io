---
title: Clock.ts
nav_order: 3
parent: Modules
---

## Clock overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [constructors](#constructors)
  - [clockWith](#clockwith)
  - [currentTimeMillis](#currenttimemillis)
  - [make](#make)
  - [sleep](#sleep)
- [context](#context)
  - [Tag](#tag)
- [models](#models)
  - [CancelToken (type alias)](#canceltoken-type-alias)
  - [Clock (interface)](#clock-interface)
  - [ClockScheduler (interface)](#clockscheduler-interface)
  - [Task (type alias)](#task-type-alias)
- [symbols](#symbols)
  - [ClockTypeId](#clocktypeid)
  - [ClockTypeId (type alias)](#clocktypeid-type-alias)

---

# constructors

## clockWith

**Signature**

```ts
export declare const clockWith: <R, E, A>(f: (clock: Clock) => Effect.Effect<R, E, A>) => Effect.Effect<R, E, A>
```

Added in v1.0.0

## currentTimeMillis

**Signature**

```ts
export declare const currentTimeMillis: (_: void) => Effect.Effect<never, never, number>
```

Added in v1.0.0

## make

**Signature**

```ts
export declare const make: (_: void) => Clock
```

Added in v1.0.0

## sleep

**Signature**

```ts
export declare const sleep: (duration: Duration.Duration) => Effect.Effect<never, never, void>
```

Added in v1.0.0

# context

## Tag

**Signature**

```ts
export declare const Tag: Context.Tag<Clock>
```

Added in v1.0.0

# models

## CancelToken (type alias)

**Signature**

```ts
export type CancelToken = () => boolean
```

Added in v1.0.0

## Clock (interface)

Represents a time-based cloock which provides functionality related to time
and scheduling.

**Signature**

```ts
export interface Clock {
  readonly [ClockTypeId]: ClockTypeId
  /**
   * Returns the current time in milliseconds.
   */
  currentTimeMillis(): Effect.Effect<never, never, number>
  /**
   * Asynchronously sleeps for the specified duration.
   */
  sleep(duration: Duration.Duration): Effect.Effect<never, never, void>
}
```

Added in v1.0.0

## ClockScheduler (interface)

**Signature**

```ts
export interface ClockScheduler {
  /**
   * Unsafely schedules the specified task for the specified duration.
   */
  readonly unsafeSchedule: (task: Task, duration: Duration.Duration) => CancelToken
}
```

Added in v1.0.0

## Task (type alias)

**Signature**

```ts
export type Task = () => void
```

Added in v1.0.0

# symbols

## ClockTypeId

**Signature**

```ts
export declare const ClockTypeId: typeof ClockTypeId
```

Added in v1.0.0

## ClockTypeId (type alias)

**Signature**

```ts
export type ClockTypeId = typeof ClockTypeId
```

Added in v1.0.0
