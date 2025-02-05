/**
 * @since 1.0.0
 */
import * as internal from "@effect/io/internal_effect_untraced/metric/label"
import type * as Equal from "@fp-ts/data/Equal"

/**
 * @since 1.0.0
 * @category symbols
 */
export const MetricLabelTypeId: unique symbol = internal.MetricLabelTypeId

/**
 * @since 1.0.0
 * @category symbols
 */
export type MetricLabelTypeId = typeof MetricLabelTypeId

/**
 * A `MetricLabel` represents a key value pair that allows analyzing metrics at
 * an additional level of granularity.
 *
 * For example if a metric tracks the response time of a service labels could
 * be used to create separate versions that track response times for different
 * clients.
 *
 * @since 1.0.0
 * @category models
 */
export interface MetricLabel extends Equal.Equal {
  readonly [MetricLabelTypeId]: MetricLabelTypeId
  readonly key: string
  readonly value: string
}

/**
 * @since 1.0.0
 * @category constructors
 */
export const make: (key: string, value: string) => MetricLabel = internal.make

/**
 * @since 1.0.0
 * @category refinements
 */
export const isMetricLabel: (u: unknown) => u is MetricLabel = internal.isMetricLabel
