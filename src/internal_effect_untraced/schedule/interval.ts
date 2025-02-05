import * as Debug from "@effect/io/Debug"
import type * as Interval from "@effect/io/Schedule/Interval"
import * as Option from "@fp-ts/core/Option"
import * as Duration from "@fp-ts/data/Duration"

/** @internal */
const IntervalSymbolKey = "@effect/io/Schedule/Interval"

/** @internal */
export const IntervalTypeId: Interval.IntervalTypeId = Symbol.for(
  IntervalSymbolKey
) as Interval.IntervalTypeId

/** @internal */
export const empty: Interval.Interval = {
  [IntervalTypeId]: IntervalTypeId,
  startMillis: 0,
  endMillis: 0
}

/** @internal */
export const make = (startMillis: number, endMillis: number): Interval.Interval => {
  if (startMillis > endMillis) {
    return empty
  }
  return {
    [IntervalTypeId]: IntervalTypeId,
    startMillis,
    endMillis
  }
}

/** @internal */
export const lessThan = Debug.dual<
  (self: Interval.Interval, that: Interval.Interval) => boolean,
  (that: Interval.Interval) => (self: Interval.Interval) => boolean
>(2, (self, that) => min(self, that) === self)

/** @internal */
export const min = Debug.dual<
  (self: Interval.Interval, that: Interval.Interval) => Interval.Interval,
  (that: Interval.Interval) => (self: Interval.Interval) => Interval.Interval
>(2, (self, that) => {
  if (self.endMillis <= that.startMillis) return self
  if (that.endMillis <= self.startMillis) return that
  if (self.startMillis < that.startMillis) return self
  if (that.startMillis < self.startMillis) return that
  if (self.endMillis <= that.endMillis) return self
  return that
})

/** @internal */
export const max = Debug.dual<
  (self: Interval.Interval, that: Interval.Interval) => Interval.Interval,
  (that: Interval.Interval) => (self: Interval.Interval) => Interval.Interval
>(2, (self, that) => min(self, that) === self ? that : self)

/** @internal */
export const isEmpty = (self: Interval.Interval): boolean => {
  return self.startMillis >= self.endMillis
}

/** @internal */
export const isNonEmpty = (self: Interval.Interval): boolean => {
  return !isEmpty(self)
}

/** @internal */
export const intersect = Debug.dual<
  (self: Interval.Interval, that: Interval.Interval) => Interval.Interval,
  (that: Interval.Interval) => (self: Interval.Interval) => Interval.Interval
>(2, (self, that) => {
  const start = Math.max(self.startMillis, that.startMillis)
  const end = Math.min(self.endMillis, that.endMillis)
  return make(start, end)
})

/** @internal */
export const size = (self: Interval.Interval): Duration.Duration => {
  return Duration.millis(self.endMillis - self.startMillis)
}

/** @internal */
export const union = Debug.dual<
  (self: Interval.Interval, that: Interval.Interval) => Option.Option<Interval.Interval>,
  (that: Interval.Interval) => (self: Interval.Interval) => Option.Option<Interval.Interval>
>(2, (self, that) => {
  const start = Math.max(self.startMillis, that.startMillis)
  const end = Math.min(self.endMillis, that.endMillis)
  return start < end ? Option.none() : Option.some(make(start, end))
})

/** @internal */
export const after = (startMilliseconds: number): Interval.Interval => {
  return make(startMilliseconds, Number.POSITIVE_INFINITY)
}

/** @internal */
export const before = (endMilliseconds: number): Interval.Interval => {
  return make(Number.NEGATIVE_INFINITY, endMilliseconds)
}
