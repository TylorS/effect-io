import type * as Clock from "@effect/io/Clock"
import * as Debug from "@effect/io/Debug"
import type * as Effect from "@effect/io/Effect"
import * as core from "@effect/io/internal_effect_untraced/core"
import * as Either from "@fp-ts/core/Either"
import { constFalse } from "@fp-ts/core/Function"
import * as Context from "@fp-ts/data/Context"
import type * as Duration from "@fp-ts/data/Duration"

/** @internal */
const ClockSymbolKey = "@effect/io/Clock"

/** @internal */
export const ClockTypeId: Clock.ClockTypeId = Symbol.for(
  ClockSymbolKey
) as Clock.ClockTypeId

/** @internal */
export const clockTag: Context.Tag<Clock.Clock> = Context.Tag()

/** @internal */
export const MAX_TIMER_MILLIS = 2 ** 31 - 1

/** @internal */
export const globalClockScheduler: Clock.ClockScheduler = {
  unsafeSchedule(task: Clock.Task, duration: Duration.Duration): Clock.CancelToken {
    // If the duration is greater than the value allowable by the JS timer
    // functions, treat the value as an infinite duration
    if (duration.millis > MAX_TIMER_MILLIS) {
      return constFalse
    }
    let completed = false
    const handle = setTimeout(() => {
      completed = true
      task()
    }, duration.millis)
    return () => {
      clearTimeout(handle)
      return !completed
    }
  }
}

/** @internal */
class ClockImpl implements Clock.Clock {
  readonly [ClockTypeId]: Clock.ClockTypeId = ClockTypeId

  unsafeCurrentTimeMillis(): number {
    return new Date().getTime()
  }

  currentTimeMillis(): Effect.Effect<never, never, number> {
    return Debug.bodyWithTrace((trace) => core.sync(() => this.unsafeCurrentTimeMillis()).traced(trace))
  }

  scheduler(): Effect.Effect<never, never, Clock.ClockScheduler> {
    return Debug.bodyWithTrace((trace) => core.succeed(globalClockScheduler).traced(trace))
  }

  sleep(duration: Duration.Duration): Effect.Effect<never, never, void> {
    return Debug.bodyWithTrace((trace) =>
      core.asyncInterruptEither<never, never, void>((cb) => {
        const canceler = globalClockScheduler.unsafeSchedule(() => cb(core.unit()), duration)
        return Either.left(core.asUnit(core.sync(canceler)))
      }).traced(trace)
    )
  }
}

/** @internal */
export const make = (): Clock.Clock => new ClockImpl()
