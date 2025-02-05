---
title: Effect.ts
nav_order: 11
parent: Modules
---

## Effect overview

Added in v1.0.0

---

<h2 class="text-delta">Table of contents</h2>

- [alternatives](#alternatives)
  - [orDie](#ordie)
  - [orDieWith](#ordiewith)
  - [orElse](#orelse)
  - [orElseEither](#orelseeither)
  - [orElseFail](#orelsefail)
  - [orElseOptional](#orelseoptional)
  - [orElseSucceed](#orelsesucceed)
  - [tryOrElse](#tryorelse)
- [aspects](#aspects)
  - [withParallelismUnbounded](#withparallelismunbounded)
- [concurrency](#concurrency)
  - [withParallelism](#withparallelism)
- [config](#config)
  - [config](#config-1)
  - [configProviderWith](#configproviderwith)
  - [withConfigProvider](#withconfigprovider)
  - [withConfigProviderScoped](#withconfigproviderscoped)
- [constructors](#constructors)
  - [acquireRelease](#acquirerelease)
  - [acquireReleaseInterruptible](#acquirereleaseinterruptible)
  - [acquireUseRelease](#acquireuserelease)
  - [allowInterrupt](#allowinterrupt)
  - [async](#async)
  - [asyncEffect](#asynceffect)
  - [asyncInterrupt](#asyncinterrupt)
  - [asyncInterruptEither](#asyncinterrupteither)
  - [asyncOption](#asyncoption)
  - [attempt](#attempt)
  - [blocking](#blocking)
  - [checkInterruptible](#checkinterruptible)
  - [clockWith](#clockwith)
  - [collect](#collect)
  - [collectAll](#collectall)
  - [collectAllDiscard](#collectalldiscard)
  - [collectAllPar](#collectallpar)
  - [collectAllParDiscard](#collectallpardiscard)
  - [collectAllSuccesses](#collectallsuccesses)
  - [collectAllSuccessesPar](#collectallsuccessespar)
  - [collectAllWith](#collectallwith)
  - [collectAllWithEffect](#collectallwitheffect)
  - [collectAllWithPar](#collectallwithpar)
  - [collectFirst](#collectfirst)
  - [collectPar](#collectpar)
  - [collectWhile](#collectwhile)
  - [cond](#cond)
  - [descriptor](#descriptor)
  - [descriptorWith](#descriptorwith)
  - [die](#die)
  - [dieMessage](#diemessage)
  - [dieSync](#diesync)
  - [done](#done)
  - [dropWhile](#dropwhile)
  - [exists](#exists)
  - [existsPar](#existspar)
  - [fail](#fail)
  - [failCause](#failcause)
  - [failCauseSync](#failcausesync)
  - [failSync](#failsync)
  - [fiberIdWith](#fiberidwith)
  - [forEach](#foreach)
  - [forEachDiscard](#foreachdiscard)
  - [forEachExec](#foreachexec)
  - [forEachPar](#foreachpar)
  - [forEachParDiscard](#foreachpardiscard)
  - [forEachParWithIndex](#foreachparwithindex)
  - [gen](#gen)
  - [getFiberRefs](#getfiberrefs)
  - [ifEffect](#ifeffect)
  - [inheritFiberRefs](#inheritfiberrefs)
  - [iterate](#iterate)
  - [loop](#loop)
  - [loopDiscard](#loopdiscard)
  - [memoizeFunction](#memoizefunction)
  - [mergeAll](#mergeall)
  - [mergeAllPar](#mergeallpar)
  - [never](#never)
  - [none](#none)
  - [noneOrFail](#noneorfail)
  - [noneOrFailWith](#noneorfailwith)
  - [partition](#partition)
  - [partitionPar](#partitionpar)
  - [promise](#promise)
  - [promiseInterrupt](#promiseinterrupt)
  - [random](#random)
  - [randomWith](#randomwith)
  - [runtime](#runtime)
  - [runtimeFlags](#runtimeflags)
  - [sleep](#sleep)
  - [struct](#struct)
  - [structPar](#structpar)
  - [succeed](#succeed)
  - [succeedLeft](#succeedleft)
  - [succeedNone](#succeednone)
  - [succeedRight](#succeedright)
  - [succeedSome](#succeedsome)
  - [suspend](#suspend)
  - [suspendSucceed](#suspendsucceed)
  - [sync](#sync)
  - [taggedScoped](#taggedscoped)
  - [taggedScopedWithLabelSet](#taggedscopedwithlabelset)
  - [taggedScopedWithLabels](#taggedscopedwithlabels)
  - [takeWhile](#takewhile)
  - [tryCatch](#trycatch)
  - [tryCatchPromise](#trycatchpromise)
  - [tryCatchPromiseInterrupt](#trycatchpromiseinterrupt)
  - [tryPromise](#trypromise)
  - [tryPromiseInterrupt](#trypromiseinterrupt)
  - [tuple](#tuple)
  - [tuplePar](#tuplepar)
  - [unfold](#unfold)
  - [unit](#unit)
  - [updateFiberRefs](#updatefiberrefs)
  - [whenEffect](#wheneffect)
  - [whileLoop](#whileloop)
  - [withClockScoped](#withclockscoped)
  - [yieldNow](#yieldnow)
- [context](#context)
  - [clock](#clock)
  - [context](#context-1)
  - [contextWith](#contextwith)
  - [contextWithEffect](#contextwitheffect)
  - [contramapContext](#contramapcontext)
  - [provideContext](#providecontext)
  - [provideLayer](#providelayer)
  - [provideService](#provideservice)
  - [provideServiceEffect](#provideserviceeffect)
  - [provideSomeLayer](#providesomelayer)
  - [scope](#scope)
  - [scoped](#scoped)
  - [service](#service)
  - [serviceWith](#servicewith)
  - [serviceWithEffect](#servicewitheffect)
  - [updateService](#updateservice)
- [conversions](#conversions)
  - [either](#either)
  - [fromEither](#fromeither)
  - [fromEitherCause](#fromeithercause)
  - [fromFiber](#fromfiber)
  - [fromFiberEffect](#fromfibereffect)
  - [fromOption](#fromoption)
  - [getOrFail](#getorfail)
  - [getOrFailDiscard](#getorfaildiscard)
  - [getOrFailWith](#getorfailwith)
  - [toLayer](#tolayer)
  - [toLayerContext](#tolayercontext)
  - [toLayerDiscard](#tolayerdiscard)
  - [toLayerScoped](#tolayerscoped)
  - [toLayerScopedDiscard](#tolayerscopeddiscard)
- [do notation](#do-notation)
  - [Do](#do)
  - [bind](#bind)
  - [bindValue](#bindvalue)
- [elements](#elements)
  - [find](#find)
  - [firstSuccessOf](#firstsuccessof)
  - [forAll](#forall)
  - [forEachEffect](#foreacheffect)
  - [forEachOption](#foreachoption)
- [error handling](#error-handling)
  - [absolve](#absolve)
  - [absorb](#absorb)
  - [absorbWith](#absorbwith)
  - [catch](#catch)
  - [catchAll](#catchall)
  - [catchAllCause](#catchallcause)
  - [catchAllDefect](#catchalldefect)
  - [catchSome](#catchsome)
  - [catchSomeCause](#catchsomecause)
  - [catchSomeDefect](#catchsomedefect)
  - [catchTag](#catchtag)
  - [cause](#cause)
  - [continueOrFail](#continueorfail)
  - [continueOrFailEffect](#continueorfaileffect)
  - [matchCause](#matchcause)
  - [matchCauseEffect](#matchcauseeffect)
  - [matchEffect](#matcheffect)
  - [sandbox](#sandbox)
  - [unrefineWith](#unrefinewith)
- [execution](#execution)
  - [runCallback](#runcallback)
  - [runFork](#runfork)
  - [runPromise](#runpromise)
  - [runPromiseEither](#runpromiseeither)
  - [runPromiseExit](#runpromiseexit)
  - [runSync](#runsync)
  - [runSyncEither](#runsynceither)
  - [runSyncExit](#runsyncexit)
- [filtering](#filtering)
  - [filter](#filter)
  - [filterNot](#filternot)
  - [filterNotPar](#filternotpar)
  - [filterOrDie](#filterordie)
  - [filterOrDieMessage](#filterordiemessage)
  - [filterOrElse](#filterorelse)
  - [filterOrElseWith](#filterorelsewith)
  - [filterOrFail](#filterorfail)
  - [filterPar](#filterpar)
- [finalization](#finalization)
  - [addFinalizer](#addfinalizer)
  - [ensuring](#ensuring)
  - [ensuringChild](#ensuringchild)
  - [ensuringChildren](#ensuringchildren)
  - [onExit](#onexit)
  - [onInterrupt](#oninterrupt)
- [folding](#folding)
  - [match](#match)
  - [reduce](#reduce)
  - [reduceAll](#reduceall)
  - [reduceAllPar](#reduceallpar)
  - [reduceRight](#reduceright)
  - [reduceWhile](#reducewhile)
- [getter](#getter)
  - [isFailure](#isfailure)
  - [isSuccess](#issuccess)
- [getters](#getters)
  - [right](#right)
  - [rightWith](#rightwith)
  - [tags](#tags)
  - [unleft](#unleft)
- [interruption](#interruption)
  - [disconnect](#disconnect)
  - [interrupt](#interrupt)
  - [interruptWith](#interruptwith)
  - [interruptible](#interruptible)
  - [interruptibleMask](#interruptiblemask)
  - [uninterruptible](#uninterruptible)
  - [uninterruptibleMask](#uninterruptiblemask)
- [locking](#locking)
  - [Permit (interface)](#permit-interface)
  - [Semaphore (interface)](#semaphore-interface)
  - [makeSemaphore](#makesemaphore)
  - [unsafeMakeSemaphore](#unsafemakesemaphore)
- [logging](#logging)
  - [log](#log)
  - [logAnnotate](#logannotate)
  - [logAnnotations](#logannotations)
  - [logDebug](#logdebug)
  - [logDebugCause](#logdebugcause)
  - [logDebugCauseMessage](#logdebugcausemessage)
  - [logError](#logerror)
  - [logErrorCause](#logerrorcause)
  - [logErrorCauseMessage](#logerrorcausemessage)
  - [logFatal](#logfatal)
  - [logFatalCause](#logfatalcause)
  - [logFatalCauseMessage](#logfatalcausemessage)
  - [logInfo](#loginfo)
  - [logInfoCause](#loginfocause)
  - [logInfoCauseMessage](#loginfocausemessage)
  - [logSpan](#logspan)
  - [logTrace](#logtrace)
  - [logTraceCause](#logtracecause)
  - [logTraceCauseMessage](#logtracecausemessage)
  - [logWarning](#logwarning)
  - [logWarningCause](#logwarningcause)
  - [logWarningCauseMessage](#logwarningcausemessage)
- [mapping](#mapping)
  - [as](#as)
  - [asLeft](#asleft)
  - [asLeftError](#aslefterror)
  - [asRight](#asright)
  - [asRightError](#asrighterror)
  - [asSome](#assome)
  - [asSomeError](#assomeerror)
  - [asUnit](#asunit)
  - [map](#map)
  - [mapAccum](#mapaccum)
  - [mapBoth](#mapboth)
  - [mapError](#maperror)
  - [mapErrorCause](#maperrorcause)
  - [mapTryCatch](#maptrycatch)
  - [negate](#negate)
- [models](#models)
  - [Effect (interface)](#effect-interface)
  - [EffectGen (interface)](#effectgen-interface)
- [mutations](#mutations)
  - [awaitAllChildren](#awaitallchildren)
  - [cached](#cached)
  - [cachedInvalidate](#cachedinvalidate)
  - [delay](#delay)
  - [diffFiberRefs](#difffiberrefs)
  - [dropUntil](#dropuntil)
  - [eventually](#eventually)
  - [flip](#flip)
  - [flipWith](#flipwith)
  - [forever](#forever)
  - [head](#head)
  - [ignore](#ignore)
  - [ignoreLogged](#ignorelogged)
  - [left](#left)
  - [leftWith](#leftwith)
  - [memoize](#memoize)
  - [merge](#merge)
  - [onDone](#ondone)
  - [onDoneCause](#ondonecause)
  - [onError](#onerror)
  - [once](#once)
  - [option](#option)
  - [parallelErrors](#parallelerrors)
  - [parallelFinalizers](#parallelfinalizers)
  - [patchFiberRefs](#patchfiberrefs)
  - [race](#race)
  - [raceAll](#raceall)
  - [raceAwait](#raceawait)
  - [raceEither](#raceeither)
  - [raceFibersWith](#racefiberswith)
  - [raceFirst](#racefirst)
  - [raceWith](#racewith)
  - [refineOrDie](#refineordie)
  - [refineOrDieWith](#refineordiewith)
  - [reject](#reject)
  - [rejectEffect](#rejecteffect)
  - [repeat](#repeat)
  - [repeatN](#repeatn)
  - [repeatOrElse](#repeatorelse)
  - [repeatOrElseEither](#repeatorelseeither)
  - [repeatUntil](#repeatuntil)
  - [repeatUntilEffect](#repeatuntileffect)
  - [repeatUntilEquals](#repeatuntilequals)
  - [repeatWhile](#repeatwhile)
  - [repeatWhileEffect](#repeatwhileeffect)
  - [repeatWhileEquals](#repeatwhileequals)
  - [replicate](#replicate)
  - [replicateEffect](#replicateeffect)
  - [replicateEffectDiscard](#replicateeffectdiscard)
  - [resurrect](#resurrect)
  - [retry](#retry)
  - [retryN](#retryn)
  - [retryOrElse](#retryorelse)
  - [retryOrElseEither](#retryorelseeither)
  - [retryUntil](#retryuntil)
  - [retryUntilEffect](#retryuntileffect)
  - [retryUntilEquals](#retryuntilequals)
  - [retryWhile](#retrywhile)
  - [retryWhileEffect](#retrywhileeffect)
  - [retryWhileEquals](#retrywhileequals)
  - [schedule](#schedule)
  - [scheduleForked](#scheduleforked)
  - [scheduleFrom](#schedulefrom)
  - [sequentialFinalizers](#sequentialfinalizers)
  - [setConfigProvider](#setconfigprovider)
  - [setFiberRefs](#setfiberrefs)
  - [some](#some)
  - [someOrElse](#someorelse)
  - [someOrElseEffect](#someorelseeffect)
  - [someOrFail](#someorfail)
  - [someOrFailException](#someorfailexception)
  - [someWith](#somewith)
  - [summarized](#summarized)
  - [supervised](#supervised)
  - [tagged](#tagged)
  - [taggedWithLabelSet](#taggedwithlabelset)
  - [taggedWithLabels](#taggedwithlabels)
  - [timed](#timed)
  - [timedWith](#timedwith)
  - [timeout](#timeout)
  - [timeoutFail](#timeoutfail)
  - [timeoutFailCause](#timeoutfailcause)
  - [timeoutTo](#timeoutto)
  - [transplant](#transplant)
  - [uncause](#uncause)
  - [unless](#unless)
  - [unlessEffect](#unlesseffect)
  - [unrefine](#unrefine)
  - [unright](#unright)
  - [unsandbox](#unsandbox)
  - [unsome](#unsome)
  - [using](#using)
  - [validate](#validate)
  - [validateAll](#validateall)
  - [validateAllDiscard](#validatealldiscard)
  - [validateAllPar](#validateallpar)
  - [validateAllParDiscard](#validateallpardiscard)
  - [validateFirst](#validatefirst)
  - [validateFirstPar](#validatefirstpar)
  - [validatePar](#validatepar)
  - [validateWith](#validatewith)
  - [validateWithPar](#validatewithpar)
  - [when](#when)
  - [whenCase](#whencase)
  - [whenCaseEffect](#whencaseeffect)
  - [whenFiberRef](#whenfiberref)
  - [whenRef](#whenref)
  - [withClock](#withclock)
  - [withEarlyRelease](#withearlyrelease)
  - [withMetric](#withmetric)
- [products](#products)
  - [zip](#zip)
  - [zipLeft](#zipleft)
  - [zipRight](#zipright)
  - [zipWith](#zipwith)
- [refinements](#refinements)
  - [isEffect](#iseffect)
- [runtime](#runtime-1)
  - [updateRuntimeFlags](#updateruntimeflags)
  - [withRuntimeFlags](#withruntimeflags)
  - [withRuntimeFlagsScoped](#withruntimeflagsscoped)
- [scoping](#scoping)
  - [scopeWith](#scopewith)
- [sequencing](#sequencing)
  - [flatMap](#flatmap)
  - [flatten](#flatten)
  - [flattenErrorOption](#flattenerroroption)
  - [tap](#tap)
  - [tapBoth](#tapboth)
  - [tapDefect](#tapdefect)
  - [tapEither](#tapeither)
  - [tapError](#taperror)
  - [tapErrorCause](#taperrorcause)
  - [tapSome](#tapsome)
- [supervision](#supervision)
  - [daemonChildren](#daemonchildren)
  - [fork](#fork)
  - [forkAll](#forkall)
  - [forkAllDiscard](#forkalldiscard)
  - [forkDaemon](#forkdaemon)
  - [forkIn](#forkin)
  - [forkScoped](#forkscoped)
  - [forkWithErrorHandler](#forkwitherrorhandler)
- [symbols](#symbols)
  - [EffectTypeId](#effecttypeid)
  - [EffectTypeId (type alias)](#effecttypeid-type-alias)
- [traversing](#traversing)
  - [forEachWithIndex](#foreachwithindex)
- [utilities](#utilities)
  - [exit](#exit)
  - [fiberId](#fiberid)
  - [intoDeferred](#intodeferred)
  - [unified](#unified)
- [zipping](#zipping)
  - [zipPar](#zippar)
  - [zipParLeft](#zipparleft)
  - [zipParRight](#zipparright)
  - [zipWithPar](#zipwithpar)

---

# alternatives

## orDie

Translates effect failure into death of the fiber, making all failures
unchecked and not a part of the type of the effect.

**Signature**

```ts
export declare const orDie: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, A>
```

Added in v1.0.0

## orDieWith

Keeps none of the errors, and terminates the fiber with them, using the
specified function to convert the `E` into a `Throwable`.

**Signature**

```ts
export declare const orDieWith: {
  <R, E, A>(self: Effect<R, E, A>, f: (error: E) => unknown): Effect<R, never, A>
  <E>(f: (error: E) => unknown): <R, A>(self: Effect<R, E, A>) => Effect<R, never, A>
}
```

Added in v1.0.0

## orElse

Executes this effect and returns its value, if it succeeds, but otherwise
executes the specified effect.

**Signature**

```ts
export declare const orElse: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: LazyArg<Effect<R2, E2, A2>>): Effect<R | R2, E2, A | A2>
  <R2, E2, A2>(that: LazyArg<Effect<R2, E2, A2>>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2, A2 | A>
}
```

Added in v1.0.0

## orElseEither

Returns an effect that will produce the value of this effect, unless it
fails, in which case, it will produce the value of the specified effect.

**Signature**

```ts
export declare const orElseEither: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: LazyArg<Effect<R2, E2, A2>>): Effect<
    R | R2,
    E2,
    Either.Either<A, A2>
  >
  <R2, E2, A2>(that: LazyArg<Effect<R2, E2, A2>>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2, Either.Either<A, A2>>
}
```

Added in v1.0.0

## orElseFail

Executes this effect and returns its value, if it succeeds, but otherwise
fails with the specified error.

**Signature**

```ts
export declare const orElseFail: {
  <R, E, A, E2>(self: Effect<R, E, A>, evaluate: LazyArg<E2>): Effect<R, E2, A>
  <E2>(evaluate: LazyArg<E2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E2, A>
}
```

Added in v1.0.0

## orElseOptional

Returns an effect that will produce the value of this effect, unless it
fails with the `None` value, in which case it will produce the value of
the specified effect.

**Signature**

```ts
export declare const orElseOptional: {
  <R, E, A, R2, E2, A2>(self: Effect<R, Option.Option<E>, A>, that: LazyArg<Effect<R2, Option.Option<E2>, A2>>): Effect<
    R | R2,
    Option.Option<E | E2>,
    A | A2
  >
  <R, E, A, R2, E2, A2>(that: LazyArg<Effect<R2, Option.Option<E2>, A2>>): (
    self: Effect<R, Option.Option<E>, A>
  ) => Effect<R | R2, Option.Option<E | E2>, A | A2>
}
```

Added in v1.0.0

## orElseSucceed

Executes this effect and returns its value, if it succeeds, but
otherwise succeeds with the specified value.

**Signature**

```ts
export declare const orElseSucceed: {
  <R, E, A, A2>(self: Effect<R, E, A>, evaluate: LazyArg<A2>): Effect<R, E, A | A2>
  <A2>(evaluate: LazyArg<A2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A2 | A>
}
```

Added in v1.0.0

## tryOrElse

Executed `that` in case `self` fails with a `Cause` that doesn't contain
defects, executes `success` in case of successes

**Signature**

```ts
export declare const tryOrElse: {
  <R, E, A, R2, E2, A2, R3, E3, A3>(
    self: Effect<R, E, A>,
    that: LazyArg<Effect<R2, E2, A2>>,
    onSuccess: (a: A) => Effect<R3, E3, A3>
  ): Effect<R | R2 | R3, E2 | E3, A2 | A3>
  <R2, E2, A2, A, R3, E3, A3>(that: LazyArg<Effect<R2, E2, A2>>, onSuccess: (a: A) => Effect<R3, E3, A3>): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R3 | R, E2 | E3, A2 | A3>
}
```

Added in v1.0.0

# aspects

## withParallelismUnbounded

Runs the specified effect with an unbounded maximum number of fibers for
parallel operations.

**Signature**

```ts
export declare const withParallelismUnbounded: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

# concurrency

## withParallelism

**Signature**

```ts
export declare const withParallelism: {
  <R, E, A>(self: Effect<R, E, A>, parallelism: number): Effect<R, E, A>
  (parallelism: number): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

# config

## config

Uses the default config provider to load the specified config, or fail with
an error of type Config.Error.

**Signature**

```ts
export declare const config: <A>(config: Config<A>) => Effect<never, ConfigError, A>
```

Added in v1.0.0

## configProviderWith

Retrieves the default config provider, and passes it to the specified
function, which may return an effect that uses the provider to perform some
work or compute some value.

**Signature**

```ts
export declare const configProviderWith: <R, E, A>(
  f: (configProvider: ConfigProvider) => Effect<R, E, A>
) => Effect<R, E, A>
```

Added in v1.0.0

## withConfigProvider

Executes the specified workflow with the specified configuration provider.

**Signature**

```ts
export declare const withConfigProvider: {
  <R, E, A>(effect: Effect<R, E, A>, value: ConfigProvider): Effect<R, E, A>
  (value: ConfigProvider): <R, E, A>(effect: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## withConfigProviderScoped

Sets the configuration provider to the specified value and restores it to its original value
when the scope is closed.

**Signature**

```ts
export declare const withConfigProviderScoped: (value: ConfigProvider) => Effect<Scope.Scope, never, void>
```

Added in v1.0.0

# constructors

## acquireRelease

This function constructs a scoped resource from an `acquire` and `release`
`Effect` value.

If the `acquire` `Effect` value successfully completes execution, then the
`release` `Effect` value will be added to the finalizers associated with the
scope of this `Effect` value, and it is guaranteed to be run when the scope
is closed.

The `acquire` and `release` `Effect` values will be run uninterruptibly.
Additionally, the `release` `Effect` value may depend on the `Exit` value
specified when the scope is closed.

**Signature**

```ts
export declare const acquireRelease: <R, E, A, R2, X>(
  acquire: Effect<R, E, A>,
  release: (a: A, exit: Exit.Exit<unknown, unknown>) => Effect<R2, never, X>
) => Effect<Scope.Scope | R | R2, E, A>
```

Added in v1.0.0

## acquireReleaseInterruptible

This function is a variant of `acquireRelease` that allows the `acquire`
`Effect` value to be interruptible.

Since the `acquire` `Effect` value could be interrupted after partially
acquiring resources, the `release` `Effect` value is not allowed to access
the resource produced by `acquire` and must independently determine what
finalization, if any, needs to be performed (e.g. by examining in memory
state).

Additionally, the `release` `Effect` value may depend on the `Exit` value
specified when the scope is closed.

**Signature**

```ts
export declare const acquireReleaseInterruptible: <R, E, A, R2, X>(
  acquire: Effect<R, E, A>,
  release: (exit: Exit.Exit<unknown, unknown>) => Effect<R2, never, X>
) => Effect<Scope.Scope | R | R2, E, A>
```

Added in v1.0.0

## acquireUseRelease

This function is used to ensure that an `Effect` value that represents the
acquisition of a resource (for example, opening a file, launching a thread,
etc.) will not be interrupted, and that the resource will always be released
when the `Effect` value completes execution.

`acquireUseRelease` does the following:

1. Ensures that the `Effect` value that acquires the resource will not be
   interrupted. Note that acquisition may still fail due to internal
   reasons (such as an uncaught exception).
2. Ensures that the `release` `Effect` value will not be interrupted,
   and will be executed as long as the acquisition `Effect` value
   successfully acquires the resource.

During the time period between the acquisition and release of the resource,
the `use` `Effect` value will be executed.

If the `release` `Effect` value fails, then the entire `Effect` value will
fail, even if the `use` `Effect` value succeeds. If this fail-fast behavior
is not desired, errors produced by the `release` `Effect` value can be caught
and ignored.

**Signature**

```ts
export declare const acquireUseRelease: {
  <R, E, A, R2, E2, A2, R3, X>(
    acquire: Effect<R, E, A>,
    use: (a: A) => Effect<R2, E2, A2>,
    release: (a: A, exit: Exit.Exit<E2, A2>) => Effect<R3, never, X>
  ): Effect<R | R2 | R3, E | E2, A2>
  <A, R2, E2, A2, R3, X>(
    use: (a: A) => Effect<R2, E2, A2>,
    release: (a: A, exit: Exit.Exit<E2, A2>) => Effect<R3, never, X>
  ): <R, E>(acquire: Effect<R, E, A>) => Effect<R2 | R3 | R, E2 | E, A2>
}
```

Added in v1.0.0

## allowInterrupt

This function checks if any fibers are attempting to interrupt the current
fiber, and if so, performs self-interruption.

Note that this allows for interruption to occur in uninterruptible regions.

**Signature**

```ts
export declare const allowInterrupt: (_: void) => Effect<never, never, void>
```

Added in v1.0.0

## async

Imports an asynchronous side-effect into a pure `Effect` value. See
`asyncMaybe` for the more expressive variant of this function that can
return a value synchronously.

The callback function `Effect<R, E, A> => void` must be called at most once.

The `FiberId` of the fiber that may complete the async callback may be
provided to allow for better diagnostics.

**Signature**

```ts
export declare const async: <R, E, A>(
  register: (callback: (_: Effect<R, E, A>) => void) => void,
  blockingOn?: FiberId.None | FiberId.Runtime | FiberId.Composite | undefined
) => Effect<R, E, A>
```

Added in v1.0.0

## asyncEffect

Converts an asynchronous, callback-style API into an `Effect`, which will
be executed asynchronously.

With this variant, the registration function may return a an `Effect`.

**Signature**

```ts
export declare const asyncEffect: <R, E, A, R2, E2, X>(
  register: (callback: (_: Effect<R, E, A>) => void) => Effect<R2, E2, X>
) => Effect<R | R2, E | E2, A>
```

Added in v1.0.0

## asyncInterrupt

Imports an asynchronous side-effect into an effect allowing control of interruption.

The `FiberId` of the fiber that may complete the async callback may be
provided to allow for better diagnostics.

**Signature**

```ts
export declare const asyncInterrupt: <R, E, A>(
  register: (callback: (effect: Effect<R, E, A>) => void) => Effect<R, never, void>,
  blockingOn?: FiberId.None | FiberId.Runtime | FiberId.Composite | undefined
) => Effect<R, E, A>
```

Added in v1.0.0

## asyncInterruptEither

Imports an asynchronous side-effect into an effect. It has the option of
returning the value synchronously, which is useful in cases where it cannot
be determined if the effect is synchronous or asynchronous until the register
is actually executed. It also has the option of returning a canceler,
which will be used by the runtime to cancel the asynchronous effect if the fiber
executing the effect is interrupted.

If the register function returns a value synchronously, then the callback
function `Effect<R, E, A> => void` must not be called. Otherwise the callback
function must be called at most once.

The `FiberId` of the fiber that may complete the async callback may be
provided to allow for better diagnostics.

**Signature**

```ts
export declare const asyncInterruptEither: <R, E, A>(
  register: (callback: (effect: Effect<R, E, A>) => void) => Either.Either<Effect<R, never, void>, Effect<R, E, A>>,
  blockingOn?: FiberId.None | FiberId.Runtime | FiberId.Composite | undefined
) => Effect<R, E, A>
```

Added in v1.0.0

## asyncOption

Imports an asynchronous effect into a pure `Effect` value, possibly returning
the value synchronously.

If the register function returns a value synchronously, then the callback
function `Effect<R, E, A> => void` must not be called. Otherwise the callback
function must be called at most once.

The `FiberId` of the fiber that may complete the async callback may be
provided to allow for better diagnostics.

**Signature**

```ts
export declare const asyncOption: <R, E, A>(
  register: (callback: (_: Effect<R, E, A>) => void) => Option.Option<Effect<R, E, A>>,
  blockingOn?: FiberId.None | FiberId.Runtime | FiberId.Composite | undefined
) => Effect<R, E, A>
```

Added in v1.0.0

## attempt

Imports a synchronous side-effect into a pure `Effect` value, translating any
thrown exceptions into typed failed effects creating with `Effect.fail`.

**Signature**

```ts
export declare const attempt: <A>(evaluate: LazyArg<A>) => Effect<never, unknown, A>
```

Added in v1.0.0

## blocking

Schedules a potentially blocking effect to occur with background priority.

Note: this is equivalent to pipe(yieldNow("background"), zipRight(self))

**Signature**

```ts
export declare const blocking: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

## checkInterruptible

Checks the interrupt status, and produces the effect returned by the
specified callback.

**Signature**

```ts
export declare const checkInterruptible: <R, E, A>(f: (isInterruptible: boolean) => Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

## clockWith

Retreives the `Clock` service from the context and provides it to the
specified effectful function.

**Signature**

```ts
export declare const clockWith: <R, E, A>(f: (clock: Clock.Clock) => Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

## collect

Evaluate each effect in the structure from left to right, collecting the
the successful values and discarding the empty cases. For a parallel version, see `collectPar`.

**Signature**

```ts
export declare const collect: {
  <A, R, E, B>(elements: Iterable<A>, f: (a: A) => Effect<R, Option.Option<E>, B>): Effect<R, E, Chunk.Chunk<B>>
  <A, R, E, B>(f: (a: A) => Effect<R, Option.Option<E>, B>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## collectAll

Evaluate each effect in the structure from left to right, and collect the
results. For a parallel version, see `collectAllPar`.

**Signature**

```ts
export declare const collectAll: <R, E, A>(effects: Iterable<Effect<R, E, A>>) => Effect<R, E, Chunk.Chunk<A>>
```

Added in v1.0.0

## collectAllDiscard

Evaluate each effect in the structure from left to right, and discard the
results. For a parallel version, see `collectAllParDiscard`.

**Signature**

```ts
export declare const collectAllDiscard: <R, E, A>(effects: Iterable<Effect<R, E, A>>) => Effect<R, E, void>
```

Added in v1.0.0

## collectAllPar

Evaluate each effect in the structure in parallel, and collect the results.
For a sequential version, see `collectAll`.

**Signature**

```ts
export declare const collectAllPar: <R, E, A>(effects: Iterable<Effect<R, E, A>>) => Effect<R, E, Chunk.Chunk<A>>
```

Added in v1.0.0

## collectAllParDiscard

Evaluate each effect in the structure in parallel, and discard the results.
For a sequential version, see `collectAllDiscard`.

**Signature**

```ts
export declare const collectAllParDiscard: <R, E, A>(effects: Iterable<Effect<R, E, A>>) => Effect<R, E, void>
```

Added in v1.0.0

## collectAllSuccesses

Evaluate and run each effect in the structure and collect the results,
discarding results from failed effects.

**Signature**

```ts
export declare const collectAllSuccesses: <R, E, A>(as: Iterable<Effect<R, E, A>>) => Effect<R, never, Chunk.Chunk<A>>
```

Added in v1.0.0

## collectAllSuccessesPar

Evaluate and run each effect in the structure in parallel and collect the
results, discarding results from failed effects.

**Signature**

```ts
export declare const collectAllSuccessesPar: <R, E, A>(
  elements: Iterable<Effect<R, E, A>>
) => Effect<R, never, Chunk.Chunk<A>>
```

Added in v1.0.0

## collectAllWith

Evaluate each effect in the structure with `collectAll`, and collect the
results with given partial function.

**Signature**

```ts
export declare const collectAllWith: {
  <R, E, A, B>(elements: Iterable<Effect<R, E, A>>, pf: (a: A) => Option.Option<B>): Effect<R, E, Chunk.Chunk<B>>
  <A, B>(pf: (a: A) => Option.Option<B>): <R, E>(elements: Iterable<Effect<R, E, A>>) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## collectAllWithEffect

Returns a filtered, mapped subset of the elements of the iterable based on a
partial function.

**Signature**

```ts
export declare const collectAllWithEffect: {
  <A, R, E, B>(elements: Iterable<A>, f: (a: A) => Option.Option<Effect<R, E, B>>): Effect<R, E, Chunk.Chunk<B>>
  <A, R, E, B>(f: (a: A) => Option.Option<Effect<R, E, B>>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## collectAllWithPar

Evaluate each effect in the structure with `collectAllPar`, and collect
the results with given partial function.

**Signature**

```ts
export declare const collectAllWithPar: {
  <R, E, A, B>(elements: Iterable<Effect<R, E, A>>, pf: (a: A) => Option.Option<B>): Effect<R, E, Chunk.Chunk<B>>
  <A, B>(pf: (a: A) => Option.Option<B>): <R, E>(elements: Iterable<Effect<R, E, A>>) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## collectFirst

Collects the first element of the `Collection<A?` for which the effectual
function `f` returns `Some`.

**Signature**

```ts
export declare const collectFirst: {
  <R, E, A, B>(elements: Iterable<A>, f: (a: A) => Effect<R, E, Option.Option<B>>): Effect<R, E, Option.Option<B>>
  <R, E, A, B>(f: (a: A) => Effect<R, E, Option.Option<B>>): (elements: Iterable<A>) => Effect<R, E, Option.Option<B>>
}
```

Added in v1.0.0

## collectPar

Evaluate each effect in the structure in parallel, collecting the successful
values and discarding the empty cases.

**Signature**

```ts
export declare const collectPar: {
  <A, R, E, B>(elements: Iterable<A>, f: (a: A) => Effect<R, Option.Option<E>, B>): Effect<R, E, Chunk.Chunk<B>>
  <A, R, E, B>(f: (a: A) => Effect<R, Option.Option<E>, B>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## collectWhile

Transforms all elements of the chunk for as long as the specified partial
function is defined.

**Signature**

```ts
export declare const collectWhile: {
  <A, R, E, B>(elements: Iterable<A>, f: (a: A) => Option.Option<Effect<R, E, B>>): Effect<R, E, Chunk.Chunk<B>>
  <A, R, E, B>(f: (a: A) => Option.Option<Effect<R, E, B>>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## cond

Evaluate the predicate, return the given `A` as success if predicate returns
true, and the given `E` as error otherwise

For effectful conditionals, see `ifEffect`.

**Signature**

```ts
export declare const cond: <E, A>(
  predicate: LazyArg<boolean>,
  result: LazyArg<A>,
  error: LazyArg<E>
) => Effect<never, E, A>
```

Added in v1.0.0

## descriptor

Constructs an effect with information about the current `Fiber`.

**Signature**

```ts
export declare const descriptor: (_: void) => Effect<never, never, Fiber.Fiber.Descriptor>
```

Added in v1.0.0

## descriptorWith

Constructs an effect based on information about the current `Fiber`.

**Signature**

```ts
export declare const descriptorWith: <R, E, A>(
  f: (descriptor: Fiber.Fiber.Descriptor) => Effect<R, E, A>
) => Effect<R, E, A>
```

Added in v1.0.0

## die

**Signature**

```ts
export declare const die: (defect: unknown) => Effect<never, never, never>
```

Added in v1.0.0

## dieMessage

Returns an effect that dies with a `RuntimeException` having the specified
text message. This method can be used for terminating a fiber because a
defect has been detected in the code.

**Signature**

```ts
export declare const dieMessage: (message: string) => Effect<never, never, never>
```

Added in v1.0.0

## dieSync

**Signature**

```ts
export declare const dieSync: (evaluate: LazyArg<unknown>) => Effect<never, never, never>
```

Added in v1.0.0

## done

**Signature**

```ts
export declare const done: <E, A>(exit: Exit.Exit<E, A>) => Effect<never, E, A>
```

Added in v1.0.0

## dropWhile

Drops all elements so long as the predicate returns true.

**Signature**

```ts
export declare const dropWhile: {
  <R, E, A>(elements: Iterable<A>, f: (a: A) => Effect<R, E, boolean>): Effect<R, E, Chunk.Chunk<A>>
  <R, E, A>(f: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<A>>
}
```

Added in v1.0.0

## exists

Determines whether any element of the `Iterable<A>` satisfies the effectual
predicate `f`, working sequentially.

**Signature**

```ts
export declare const exists: {
  <R, E, A>(elements: Iterable<A>, f: (a: A) => Effect<R, E, boolean>): Effect<R, E, boolean>
  <R, E, A>(f: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, boolean>
}
```

Added in v1.0.0

## existsPar

Determines whether any element of the `Iterable<A>` satisfies the effectual
predicate `f`, working in parallel. Interrupts all effects on any failure or
finding an element that satisfies the predicate.

**Signature**

```ts
export declare const existsPar: {
  <R, E, A>(elements: Iterable<A>, f: (a: A) => Effect<R, E, boolean>): Effect<R, E, boolean>
  <R, E, A>(f: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, boolean>
}
```

Added in v1.0.0

## fail

**Signature**

```ts
export declare const fail: <E>(error: E) => Effect<never, E, never>
```

Added in v1.0.0

## failCause

**Signature**

```ts
export declare const failCause: <E>(cause: Cause.Cause<E>) => Effect<never, E, never>
```

Added in v1.0.0

## failCauseSync

**Signature**

```ts
export declare const failCauseSync: <E>(evaluate: LazyArg<Cause.Cause<E>>) => Effect<never, E, never>
```

Added in v1.0.0

## failSync

**Signature**

```ts
export declare const failSync: <E>(evaluate: LazyArg<E>) => Effect<never, E, never>
```

Added in v1.0.0

## fiberIdWith

**Signature**

```ts
export declare const fiberIdWith: <R, E, A>(f: (descriptor: FiberId.Runtime) => Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

## forEach

**Signature**

```ts
export declare const forEach: {
  <A, R, E, B>(self: Iterable<A>, f: (a: A) => Effect<R, E, B>): Effect<R, E, Chunk.Chunk<B>>
  <A, R, E, B>(f: (a: A) => Effect<R, E, B>): (self: Iterable<A>) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## forEachDiscard

**Signature**

```ts
export declare const forEachDiscard: {
  <A, R, E, B>(self: Iterable<A>, f: (a: A) => Effect<R, E, B>): Effect<R, E, void>
  <A, R, E, B>(f: (a: A) => Effect<R, E, B>): (self: Iterable<A>) => Effect<R, E, void>
}
```

Added in v1.0.0

## forEachExec

Applies the function `f` to each element of the `Collection<A>` and returns
the result in a new `Chunk<B>` using the specified execution strategy.

**Signature**

```ts
export declare const forEachExec: {
  <R, E, A, B>(
    elements: Iterable<A>,
    f: (a: A) => Effect<R, E, B>,
    strategy: ExecutionStrategy.ExecutionStrategy
  ): Effect<R, E, Chunk.Chunk<B>>
  <R, E, A, B>(f: (a: A) => Effect<R, E, B>, strategy: ExecutionStrategy.ExecutionStrategy): (
    elements: Iterable<A>
  ) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## forEachPar

**Signature**

```ts
export declare const forEachPar: {
  <A, R, E, B>(self: Iterable<A>, f: (a: A) => Effect<R, E, B>): Effect<R, E, Chunk.Chunk<B>>
  <A, R, E, B>(f: (a: A) => Effect<R, E, B>): (self: Iterable<A>) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## forEachParDiscard

**Signature**

```ts
export declare const forEachParDiscard: {
  <A, R, E, _>(self: Iterable<A>, f: (a: A) => Effect<R, E, _>): Effect<R, E, void>
  <A, R, E, _>(f: (a: A) => Effect<R, E, _>): (self: Iterable<A>) => Effect<R, E, void>
}
```

Added in v1.0.0

## forEachParWithIndex

Same as `forEachPar`, except that the function `f` is supplied
a second argument that corresponds to the index (starting from 0)
of the current element being iterated over.

**Signature**

```ts
export declare const forEachParWithIndex: {
  <R, E, A, B>(elements: Iterable<A>, f: (a: A, i: number) => Effect<R, E, B>): Effect<R, E, Chunk.Chunk<B>>
  <R, E, A, B>(f: (a: A, i: number) => Effect<R, E, B>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## gen

**Signature**

```ts
export declare const gen: <Eff extends EffectGen<any, any, any>, AEff>(
  f: (resume: <R, E, A>(self: Effect<R, E, A>) => EffectGen<R, E, A>) => Generator<Eff, AEff, any>
) => Effect<
  [Eff] extends [never] ? never : [Eff] extends [EffectGen<infer R, any, any>] ? R : never,
  [Eff] extends [never] ? never : [Eff] extends [EffectGen<any, infer E, any>] ? E : never,
  AEff
>
```

Added in v1.0.0

## getFiberRefs

Returns a collection of all `FiberRef` values for the fiber running this
effect.

**Signature**

```ts
export declare const getFiberRefs: (_: void) => Effect<never, never, FiberRefs.FiberRefs>
```

Added in v1.0.0

## ifEffect

Runs `onTrue` if the result of `self` is `true` and `onFalse` otherwise.

**Signature**

```ts
export declare const ifEffect: {
  <R, E, R1, R2, E1, E2, A, A1>(
    self: Effect<R, E, boolean>,
    onTrue: Effect<R1, E1, A>,
    onFalse: Effect<R2, E2, A1>
  ): Effect<R | R1 | R2, E | E1 | E2, A | A1>
  <R1, R2, E1, E2, A, A1>(onTrue: Effect<R1, E1, A>, onFalse: Effect<R2, E2, A1>): <R, E>(
    self: Effect<R, E, boolean>
  ) => Effect<R1 | R2 | R, E1 | E2 | E, A | A1>
}
```

Added in v1.0.0

## inheritFiberRefs

Inherits values from all `FiberRef` instances into current fiber.

**Signature**

```ts
export declare const inheritFiberRefs: (childFiberRefs: FiberRefs.FiberRefs) => Effect<never, never, void>
```

Added in v1.0.0

## iterate

Iterates with the specified effectual function. The moral equivalent of:

```ts
let s = initial

while (cont(s)) {
  s = body(s)
}

return s
```

**Signature**

```ts
export declare const iterate: <Z, R, E>(
  initial: Z,
  cont: (z: Z) => boolean,
  body: (z: Z) => Effect<R, E, Z>
) => Effect<R, E, Z>
```

Added in v1.0.0

## loop

Loops with the specified effectual function, collecting the results into a
list. The moral equivalent of:

```ts
let s = initial
let as = [] as readonly A[]

while (cont(s)) {
  as = [body(s), ...as]
  s = inc(s)
}

A.reverse(as)
```

**Signature**

```ts
export declare const loop: <Z, R, E, A>(
  initial: Z,
  cont: (z: Z) => boolean,
  inc: (z: Z) => Z,
  body: (z: Z) => Effect<R, E, A>
) => Effect<R, E, Chunk.Chunk<A>>
```

Added in v1.0.0

## loopDiscard

Loops with the specified effectual function purely for its effects. The
moral equivalent of:

```ts
let s = initial

while (cont(s)) {
  body(s)
  s = inc(s)
}
```

**Signature**

```ts
export declare const loopDiscard: <Z, R, E, X>(
  initial: Z,
  cont: (z: Z) => boolean,
  inc: (z: Z) => Z,
  body: (z: Z) => Effect<R, E, X>
) => Effect<R, E, void>
```

Added in v1.0.0

## memoizeFunction

Returns a memoized version of the specified effectual function.

**Signature**

```ts
export declare const memoizeFunction: <R, E, A, B>(
  f: (a: A) => Effect<R, E, B>
) => Effect<never, never, (a: A) => Effect<R, E, B>>
```

Added in v1.0.0

## mergeAll

Merges an `Iterable<Effect<R, E, A>>` to a single effect, working
sequentially.

**Signature**

```ts
export declare const mergeAll: {
  <R, E, Z, A>(elements: Iterable<Effect<R, E, A>>, zero: Z, f: (z: Z, a: A) => Z): Effect<R, E, Z>
  <Z, A>(zero: Z, f: (z: Z, a: A) => Z): <R, E>(elements: Iterable<Effect<R, E, A>>) => Effect<R, E, Z>
}
```

Added in v1.0.0

## mergeAllPar

Merges an `Iterable<Effect<R, E, A>>` to a single effect, working in
parallel.

Due to the parallel nature of this combinator, `f` must be both:

- commutative: `f(a, b) == f(b, a)`
- associative: `f(a, f(b, c)) == f(f(a, b), c)`

It's unsafe to execute side effects inside `f`, as `f` may be executed
more than once for some of `in` elements during effect execution.

**Signature**

```ts
export declare const mergeAllPar: {
  <R, E, A, Z>(elements: Iterable<Effect<R, E, A>>, zero: Z, f: (z: Z, a: A) => Z): Effect<R, E, Z>
  <Z, A>(zero: Z, f: (z: Z, a: A) => Z): <R, E>(elements: Iterable<Effect<R, E, A>>) => Effect<R, E, Z>
}
```

Added in v1.0.0

## never

Returns a effect that will never produce anything. The moral equivalent of
`while(true) {}`, only without the wasted CPU cycles.

**Signature**

```ts
export declare const never: (_: void) => Effect<never, never, never>
```

Added in v1.0.0

## none

Requires the option produced by this value to be `None`.

**Signature**

```ts
export declare const none: <R, E, A>(self: Effect<R, E, Option.Option<A>>) => Effect<R, Option.Option<E>, void>
```

Added in v1.0.0

## noneOrFail

Lifts an `Option` into a `Effect`. If the option is empty it succeeds with
`void`. If the option is defined it fails with the content.

**Signature**

```ts
export declare const noneOrFail: <E>(option: Option.Option<E>) => Effect<never, E, void>
```

Added in v1.0.0

## noneOrFailWith

Lifts an `Option` into a `Effect`. If the option is empty it succeeds with
`undefined`. If the option is defined it fails with an error computed by
the specified function.

**Signature**

```ts
export declare const noneOrFailWith: <E, A>(option: Option.Option<A>, f: (a: A) => E) => Effect<never, E, void>
```

Added in v1.0.0

## partition

Feeds elements of type `A` to a function `f` that returns an effect.
Collects all successes and failures in a tupled fashion.

**Signature**

```ts
export declare const partition: {
  <R, E, A, B>(elements: Iterable<A>, f: (a: A) => Effect<R, E, B>): Effect<
    R,
    never,
    readonly [Chunk.Chunk<E>, Chunk.Chunk<B>]
  >
  <R, E, A, B>(f: (a: A) => Effect<R, E, B>): (
    elements: Iterable<A>
  ) => Effect<R, never, readonly [Chunk.Chunk<E>, Chunk.Chunk<B>]>
}
```

Added in v1.0.0

## partitionPar

Feeds elements of type `A` to a function `f` that returns an effect.
Collects all successes and failures in parallel and returns the result as a
tuple.

**Signature**

```ts
export declare const partitionPar: {
  <R, E, A, B>(elements: Iterable<A>, f: (a: A) => Effect<R, E, B>): Effect<
    R,
    never,
    readonly [Chunk.Chunk<E>, Chunk.Chunk<B>]
  >
  <R, E, A, B>(f: (a: A) => Effect<R, E, B>): (
    elements: Iterable<A>
  ) => Effect<R, never, readonly [Chunk.Chunk<E>, Chunk.Chunk<B>]>
}
```

Added in v1.0.0

## promise

Like `tryPromise` but produces a defect in case of errors.

**Signature**

```ts
export declare const promise: <A>(evaluate: LazyArg<Promise<A>>) => Effect<never, never, A>
```

Added in v1.0.0

## promiseInterrupt

Like `promise` but allows for interruption via AbortSignal

**Signature**

```ts
export declare const promiseInterrupt: <A>(evaluate: (signal: AbortSignal) => Promise<A>) => Effect<never, never, A>
```

Added in v1.0.0

## random

Retreives the `Random` service from the context.

**Signature**

```ts
export declare const random: (_: void) => Effect<never, never, Random.Random>
```

Added in v1.0.0

## randomWith

Retreives the `Random` service from the context and uses it to run the
specified workflow.

**Signature**

```ts
export declare const randomWith: <R, E, A>(f: (random: Random.Random) => Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

## runtime

Returns an effect that accesses the runtime, which can be used to
(unsafely) execute tasks. This is useful for integration with legacy code
that must call back into Effect code.

**Signature**

```ts
export declare const runtime: <R>() => Effect<R, never, Runtime.Runtime<R>>
```

Added in v1.0.0

## runtimeFlags

Retrieves an effect that succeeds with the current runtime flags, which
govern behavior and features of the runtime system.

**Signature**

```ts
export declare const runtimeFlags: (_: void) => Effect<never, never, RuntimeFlags.RuntimeFlags>
```

Added in v1.0.0

## sleep

Returns an effect that suspends for the specified duration. This method is
asynchronous, and does not actually block the fiber executing the effect.

**Signature**

```ts
export declare const sleep: (duration: Duration.Duration) => Effect<never, never, void>
```

Added in v1.0.0

## struct

**Signature**

```ts
export declare const struct: <NER extends Record<string, Effect<any, any, any>>>(
  r: Record<string, Effect<any, any, any>> | EnforceNonEmptyRecord<NER>
) => Effect<
  [NER[keyof NER]] extends [{ [EffectTypeId]: { _R: (_: never) => infer R } }] ? R : never,
  [NER[keyof NER]] extends [{ [EffectTypeId]: { _E: (_: never) => infer E } }] ? E : never,
  { [K in keyof NER]: [NER[K]] extends [{ [EffectTypeId]: { _A: (_: never) => infer A } }] ? A : never }
>
```

Added in v1.0.0

## structPar

**Signature**

```ts
export declare const structPar: <NER extends Record<string, Effect<any, any, any>>>(
  r: Record<string, Effect<any, any, any>> | EnforceNonEmptyRecord<NER>
) => Effect<
  [NER[keyof NER]] extends [{ [EffectTypeId]: { _R: (_: never) => infer R } }] ? R : never,
  [NER[keyof NER]] extends [{ [EffectTypeId]: { _E: (_: never) => infer E } }] ? E : never,
  { [K in keyof NER]: [NER[K]] extends [{ [EffectTypeId]: { _A: (_: never) => infer A } }] ? A : never }
>
```

Added in v1.0.0

## succeed

**Signature**

```ts
export declare const succeed: <A>(value: A) => Effect<never, never, A>
```

Added in v1.0.0

## succeedLeft

Returns an effect which succeeds with the value wrapped in a `Left`.

**Signature**

```ts
export declare const succeedLeft: <A>(value: A) => Effect<never, never, Either.Either<A, never>>
```

Added in v1.0.0

## succeedNone

Returns an effect which succeeds with `None`.

**Signature**

```ts
export declare const succeedNone: (_: void) => Effect<never, never, Option.Option<never>>
```

Added in v1.0.0

## succeedRight

Returns an effect which succeeds with the value wrapped in a `Right`.

**Signature**

```ts
export declare const succeedRight: <A>(value: A) => Effect<never, never, Either.Either<never, A>>
```

Added in v1.0.0

## succeedSome

Returns an effect which succeeds with the value wrapped in a `Some`.

**Signature**

```ts
export declare const succeedSome: <A>(value: A) => Effect<never, never, Option.Option<A>>
```

Added in v1.0.0

## suspend

Returns a lazily constructed effect, whose construction may itself require
effects. When no context is required (i.e., when `R == unknown`) it is
conceptually equivalent to `flatten(succeed(io))`.

**Signature**

```ts
export declare const suspend: <R, E, A>(evaluate: LazyArg<Effect<R, E, A>>) => Effect<R, unknown, A>
```

Added in v1.0.0

## suspendSucceed

**Signature**

```ts
export declare const suspendSucceed: <R, E, A>(effect: LazyArg<Effect<R, E, A>>) => Effect<R, E, A>
```

Added in v1.0.0

## sync

**Signature**

```ts
export declare const sync: <A>(evaluate: LazyArg<A>) => Effect<never, never, A>
```

Added in v1.0.0

## taggedScoped

Tags each metric in a scope with a the specific tag.

**Signature**

```ts
export declare const taggedScoped: (key: string, value: string) => Effect<Scope.Scope, never, void>
```

Added in v1.0.0

## taggedScopedWithLabelSet

Tags each metric in a scope with a the specific tag.

**Signature**

```ts
export declare const taggedScopedWithLabelSet: (
  labels: HashSet.HashSet<MetricLabel.MetricLabel>
) => Effect<Scope.Scope, never, void>
```

Added in v1.0.0

## taggedScopedWithLabels

Tags each metric in a scope with a the specific tag.

**Signature**

```ts
export declare const taggedScopedWithLabels: (
  labels: ReadonlyArray<MetricLabel.MetricLabel>
) => Effect<Scope.Scope, never, void>
```

Added in v1.0.0

## takeWhile

Takes all elements so long as the effectual predicate returns true.

**Signature**

```ts
export declare const takeWhile: {
  <R, E, A>(elements: Iterable<A>, predicate: (a: A) => Effect<R, E, boolean>): Effect<R, E, Chunk.Chunk<A>>
  <R, E, A>(predicate: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<A>>
}
```

Added in v1.0.0

## tryCatch

Imports a synchronous side-effect into a pure value, translating any
thrown exceptions into typed failed effects.

**Signature**

```ts
export declare const tryCatch: <E, A>(attempt: LazyArg<A>, onThrow: (u: unknown) => E) => Effect<never, E, A>
```

Added in v1.0.0

## tryCatchPromise

Create an `Effect` that when executed will construct `promise` and wait for
its result, errors will be handled using `onReject`.

**Signature**

```ts
export declare const tryCatchPromise: <E, A>(
  evaluate: LazyArg<Promise<A>>,
  onReject: (reason: unknown) => E
) => Effect<never, E, A>
```

Added in v1.0.0

## tryCatchPromiseInterrupt

Like `tryCatchPromise` but allows for interruption via AbortSignal

**Signature**

```ts
export declare const tryCatchPromiseInterrupt: <E, A>(
  evaluate: (signal: AbortSignal) => Promise<A>,
  onReject: (reason: unknown) => E
) => Effect<never, E, A>
```

Added in v1.0.0

## tryPromise

Create an `Effect` that when executed will construct `promise` and wait for
its result, errors will produce failure as `unknown`.

**Signature**

```ts
export declare const tryPromise: <A>(evaluate: LazyArg<Promise<A>>) => Effect<never, unknown, A>
```

Added in v1.0.0

## tryPromiseInterrupt

Like `tryPromise` but allows for interruption via AbortSignal

**Signature**

```ts
export declare const tryPromiseInterrupt: <A>(
  evaluate: (signal: AbortSignal) => Promise<A>
) => Effect<never, unknown, A>
```

Added in v1.0.0

## tuple

Like `forEach` + `identity` with a tuple type.

**Signature**

```ts
export declare const tuple: <T extends [Effect<any, any, any>, ...Effect<any, any, any>[]]>(
  ...t: T
) => Effect<
  [T[number]] extends [{ [EffectTypeId]: { _R: (_: never) => infer R } }] ? R : never,
  [T[number]] extends [{ [EffectTypeId]: { _E: (_: never) => infer E } }] ? E : never,
  TupleEffect<T>
>
```

Added in v1.0.0

## tuplePar

Like tuple but parallel, same as `forEachPar` + `identity` with a tuple type.

**Signature**

```ts
export declare const tuplePar: <T extends [Effect<any, any, any>, ...Effect<any, any, any>[]]>(
  ...t: T
) => Effect<
  [T[number]] extends [{ [EffectTypeId]: { _R: (_: never) => infer R } }] ? R : never,
  [T[number]] extends [{ [EffectTypeId]: { _E: (_: never) => infer E } }] ? E : never,
  TupleEffect<T>
>
```

Added in v1.0.0

## unfold

Constructs a `Chunk` by repeatedly applying the effectual function `f` as
long as it returns `Some`.

**Signature**

```ts
export declare const unfold: <A, R, E, S>(
  s: S,
  f: (s: S) => Effect<R, E, Option.Option<readonly [A, S]>>
) => Effect<R, E, Chunk.Chunk<A>>
```

Added in v1.0.0

## unit

**Signature**

```ts
export declare const unit: (_: void) => Effect<never, never, void>
```

Added in v1.0.0

## updateFiberRefs

Updates the `FiberRef` values for the fiber running this effect using the
specified function.

**Signature**

```ts
export declare const updateFiberRefs: (
  f: (fiberId: FiberId.Runtime, fiberRefs: FiberRefs.FiberRefs) => FiberRefs.FiberRefs
) => Effect<never, never, void>
```

Added in v1.0.0

## whenEffect

**Signature**

```ts
export declare const whenEffect: {
  <R, E, A, R2, E2>(self: Effect<R2, E2, A>, predicate: Effect<R, E, boolean>): Effect<R | R2, E | E2, Option.Option<A>>
  <R, E>(predicate: Effect<R, E, boolean>): <R2, E2, A>(
    effect: Effect<R2, E2, A>
  ) => Effect<R | R2, E | E2, Option.Option<A>>
}
```

Added in v1.0.0

## whileLoop

**Signature**

```ts
export declare const whileLoop: <R, E, A>(
  check: LazyArg<boolean>,
  body: LazyArg<Effect<R, E, A>>,
  process: (a: A) => void
) => Effect<R, E, void>
```

Added in v1.0.0

## withClockScoped

Sets the implementation of the clock service to the specified value and
restores it to its original value when the scope is closed.

**Signature**

```ts
export declare const withClockScoped: <A extends Clock.Clock>(value: A) => Effect<Scope.Scope, never, void>
```

Added in v1.0.0

## yieldNow

**Signature**

```ts
export declare const yieldNow: (priority?: 'background' | 'normal' | undefined) => Effect<never, never, void>
```

Added in v1.0.0

# context

## clock

Retreives the `Clock` service from the context

**Signature**

```ts
export declare const clock: (_: void) => Effect<never, never, Clock.Clock>
```

Added in v1.0.0

## context

**Signature**

```ts
export declare const context: <R>() => Effect<R, never, Context.Context<R>>
```

Added in v1.0.0

## contextWith

Accesses the context of the effect.

**Signature**

```ts
export declare const contextWith: <R, A>(f: (context: Context.Context<R>) => A) => Effect<R, never, A>
```

Added in v1.0.0

## contextWithEffect

Effectually accesses the context of the effect.

**Signature**

```ts
export declare const contextWithEffect: <R, R0, E, A>(
  f: (context: Context.Context<R0>) => Effect<R, E, A>
) => Effect<R | R0, E, A>
```

Added in v1.0.0

## contramapContext

Provides some of the context required to run this effect,
leaving the remainder `R0`.

**Signature**

```ts
export declare const contramapContext: {
  <R0, R, E, A>(self: Effect<R, E, A>, f: (context: Context.Context<R0>) => Context.Context<R>): Effect<R0, E, A>
  <R0, R>(f: (context: Context.Context<R0>) => Context.Context<R>): <E, A>(self: Effect<R, E, A>) => Effect<R0, E, A>
}
```

Added in v1.0.0

## provideContext

Provides the effect with its required context, which eliminates its
dependency on `R`.

**Signature**

```ts
export declare const provideContext: {
  <R, E, A>(self: Effect<R, E, A>, context: Context.Context<R>): Effect<never, E, A>
  <R>(context: Context.Context<R>): <E, A>(self: Effect<R, E, A>) => Effect<never, E, A>
}
```

Added in v1.0.0

## provideLayer

Provides a layer to the effect, which translates it to another level.

**Signature**

```ts
export declare const provideLayer: {
  <R, E, A, R0, E2>(self: Effect<R, E, A>, layer: Layer.Layer<R0, E2, R>): Effect<R0, E | E2, A>
  <R0, E2, R>(layer: Layer.Layer<R0, E2, R>): <E, A>(self: Effect<R, E, A>) => Effect<R0, E2 | E, A>
}
```

Added in v1.0.0

## provideService

Provides the effect with the single service it requires. If the effect
requires more than one service use `provideContext` instead.

**Signature**

```ts
export declare const provideService: {
  <R, E, A, T extends Context.Tag<any>>(self: Effect<R, E, A>, tag: T, service: Context.Tag.Service<T>): Effect<
    Exclude<R, Context.Tag.Service<T>>,
    E,
    A
  >
  <T extends Context.Tag<any>>(tag: T, service: Context.Tag.Service<T>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<Exclude<R, Context.Tag.Service<T>>, E, A>
}
```

Added in v1.0.0

## provideServiceEffect

Provides the effect with the single service it requires. If the effect
requires more than one service use `provideContext` instead.

**Signature**

```ts
export declare const provideServiceEffect: {
  <R, E, A, T extends Context.Tag<any>, R1, E1>(
    self: Effect<R, E, A>,
    tag: T,
    effect: Effect<R1, E1, Context.Tag.Service<T>>
  ): Effect<R1 | Exclude<R, Context.Tag.Service<T>>, E | E1, A>
  <T extends Context.Tag<any>, R1, E1>(tag: T, effect: Effect<R1, E1, Context.Tag.Service<T>>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R1 | Exclude<R, Context.Tag.Service<T>>, E1 | E, A>
}
```

Added in v1.0.0

## provideSomeLayer

Splits the context into two parts, providing one part using the
specified layer and leaving the remainder `R0`.

**Signature**

```ts
export declare const provideSomeLayer: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, layer: Layer.Layer<R2, E2, A2>): Effect<R2 | Exclude<R, A2>, E | E2, A>
  <R2, E2, A2>(layer: Layer.Layer<R2, E2, A2>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | Exclude<R, A2>, E2 | E, A>
}
```

Added in v1.0.0

## scope

**Signature**

```ts
export declare const scope: (_: void) => Effect<Scope.Scope, never, Scope.Scope>
```

Added in v1.0.0

## scoped

Scopes all resources uses in this workflow to the lifetime of the workflow,
ensuring that their finalizers are run as soon as this workflow completes
execution, whether by success, failure, or interruption.

**Signature**

```ts
export declare const scoped: <R, E, A>(effect: Effect<R, E, A>) => Effect<Exclude<R, Scope.Scope>, E, A>
```

Added in v1.0.0

## service

Extracts the specified service from the context of the effect.

**Signature**

```ts
export declare const service: <T>(tag: Context.Tag<T>) => Effect<T, never, T>
```

Added in v1.0.0

## serviceWith

Accesses the specified service in the context of the effect.

**Signature**

```ts
export declare const serviceWith: <T extends Context.Tag<any>, A>(
  tag: T,
  f: (a: Context.Tag.Service<T>) => A
) => Effect<Context.Tag.Service<T>, never, A>
```

Added in v1.0.0

## serviceWithEffect

Effectfully accesses the specified service in the context of the effect.

**Signature**

```ts
export declare const serviceWithEffect: <T extends Context.Tag<any>, R, E, A>(
  tag: T,
  f: (a: Context.Tag.Service<T>) => Effect<R, E, A>
) => Effect<R | Context.Tag.Service<T>, E, A>
```

Added in v1.0.0

## updateService

Updates the service with the required service entry.

**Signature**

```ts
export declare const updateService: {
  <R, E, A, T extends Context.Tag<any>>(
    self: Effect<R, E, A>,
    tag: T,
    f: (service: Context.Tag.Service<T>) => Context.Tag.Service<T>
  ): Effect<R | Context.Tag.Service<T>, E, A>
  <T extends Context.Tag<any>>(tag: T, f: (service: Context.Tag.Service<T>) => Context.Tag.Service<T>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<Context.Tag.Service<T> | R, E, A>
}
```

Added in v1.0.0

# conversions

## either

Returns an effect whose failure and success have been lifted into an
`Either`. The resulting effect cannot fail, because the failure case has
been exposed as part of the `Either` success case.

This method is useful for recovering from effects that may fail.

The error parameter of the returned `Effect` is `never`, since it is
guaranteed the effect does not model failure.

**Signature**

```ts
export declare const either: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, Either.Either<E, A>>
```

Added in v1.0.0

## fromEither

Lifts an `Either<E, A>` into an `Effect<never, E, A>`.

**Signature**

```ts
export declare const fromEither: <E, A>(either: Either.Either<E, A>) => Effect<never, E, A>
```

Added in v1.0.0

## fromEitherCause

Lifts an `Either<Cause<E>, A>` into an `Effect<never, E, A>`.

**Signature**

```ts
export declare const fromEitherCause: <E, A>(either: Either.Either<Cause.Cause<E>, A>) => Effect<never, E, A>
```

Added in v1.0.0

## fromFiber

Creates an `Effect` value that represents the exit value of the specified
fiber.

**Signature**

```ts
export declare const fromFiber: <E, A>(fiber: Fiber.Fiber<E, A>) => Effect<never, E, A>
```

Added in v1.0.0

## fromFiberEffect

Creates an `Effect` value that represents the exit value of the specified
fiber.

**Signature**

```ts
export declare const fromFiberEffect: <R, E, A>(fiber: Effect<R, E, Fiber.Fiber<E, A>>) => Effect<R, E, A>
```

Added in v1.0.0

## fromOption

Lifts an `Option` into an `Effect` but preserves the error as an option in
the error channel, making it easier to compose in some scenarios.

**Signature**

```ts
export declare const fromOption: <A>(option: Option.Option<A>) => Effect<never, Option.Option<never>, A>
```

Added in v1.0.0

## getOrFail

Lifts an `Option` into an `Effect`, if the option is not defined it fails
with `NoSuchElementException`.

**Signature**

```ts
export declare const getOrFail: <A>(option: Option.Option<A>) => Effect<never, Cause.NoSuchElementException, A>
```

Added in v1.0.0

## getOrFailDiscard

Lifts an `Option` into a `IO`, if the option is not defined it fails with
`void`.

**Signature**

```ts
export declare const getOrFailDiscard: <A>(option: Option.Option<A>) => Effect<never, void, A>
```

Added in v1.0.0

## getOrFailWith

Lifts an `Maybe` into an `Effect`. If the option is not defined, fail with
the specified `e` value.

**Signature**

```ts
export declare const getOrFailWith: {
  <A, E>(option: Option.Option<A>, error: LazyArg<E>): Effect<never, E, A>
  <E>(error: LazyArg<E>): <A>(option: Option.Option<A>) => Effect<never, E, A>
}
```

Added in v1.0.0

## toLayer

Constructs a layer from this effect.

**Signature**

```ts
export declare const toLayer: {
  <R, E, A>(self: Effect<R, E, A>, tag: Context.Tag<A>): Layer.Layer<R, E, A>
  <A>(tag: Context.Tag<A>): <R, E>(self: Effect<R, E, A>) => Layer.Layer<R, E, A>
}
```

Added in v1.0.0

## toLayerContext

Constructs a layer from this effect.

**Signature**

```ts
export declare const toLayerContext: <R, E, A>(effect: Effect<R, E, Context.Context<A>>) => Layer.Layer<R, E, A>
```

Added in v1.0.0

## toLayerDiscard

Constructs a layer from this effect.

**Signature**

```ts
export declare const toLayerDiscard: <R, E, _>(effect: Effect<R, E, _>) => Layer.Layer<R, E, never>
```

Added in v1.0.0

## toLayerScoped

Constructs a layer from this effect.

**Signature**

```ts
export declare const toLayerScoped: {
  <R, E, A>(self: Effect<R, E, A>, tag: Context.Tag<A>): Layer.Layer<Exclude<R, Scope.Scope>, E, A>
  <A>(tag: Context.Tag<A>): <R, E>(self: Effect<R, E, A>) => Layer.Layer<Exclude<R, Scope.Scope>, E, A>
}
```

Added in v1.0.0

## toLayerScopedDiscard

Constructs a layer from this effect.

**Signature**

```ts
export declare const toLayerScopedDiscard: <R, E, _>(
  effect: Effect<R, E, _>
) => Layer.Layer<Exclude<R, Scope.Scope>, E, never>
```

Added in v1.0.0

# do notation

## Do

**Signature**

```ts
export declare const Do: (_: void) => Effect<never, never, {}>
```

Added in v1.0.0

## bind

Binds an effectful value in a `do` scope

**Signature**

```ts
export declare const bind: {
  <R, E, N extends string, K, R2, E2, A>(
    self: Effect<R, E, K>,
    tag: Exclude<N, keyof K>,
    f: (_: K) => Effect<R2, E2, A>
  ): Effect<R | R2, E | E2, MergeRecord<K, { [k in N]: A }>>
  <N extends string, K, R2, E2, A>(tag: Exclude<N, keyof K>, f: (_: K) => Effect<R2, E2, A>): <R, E>(
    self: Effect<R, E, K>
  ) => Effect<R2 | R, E2 | E, MergeRecord<K, { [k in N]: A }>>
}
```

Added in v1.0.0

## bindValue

Like bind for values

**Signature**

```ts
export declare const bindValue: {
  <R, E, K, N extends string, A>(self: Effect<R, E, K>, tag: Exclude<N, keyof K>, f: (_: K) => A): Effect<
    R,
    E,
    MergeRecord<K, { [k in N]: A }>
  >
  <N extends string, K, A>(tag: Exclude<N, keyof K>, f: (_: K) => A): <R, E>(
    self: Effect<R, E, K>
  ) => Effect<R, E, MergeRecord<K, { [k in N]: A }>>
}
```

Added in v1.0.0

# elements

## find

Returns the first element that satisfies the effectful predicate.

**Signature**

```ts
export declare const find: {
  <A, R, E>(elements: Iterable<A>, f: (a: A) => Effect<R, E, boolean>): Effect<R, E, Option.Option<A>>
  <A, R, E>(f: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, Option.Option<A>>
}
```

Added in v1.0.0

## firstSuccessOf

This function takes an iterable of `Effect` values and returns a new
`Effect` value that represents the first `Effect` value in the iterable
that succeeds. If all of the `Effect` values in the iterable fail, then
the resulting `Effect` value will fail as well.

This function is sequential, meaning that the `Effect` values in the
iterable will be executed in sequence, and the first one that succeeds
will determine the outcome of the resulting `Effect` value.

**Signature**

```ts
export declare const firstSuccessOf: <R, E, A>(effects: Iterable<Effect<R, E, A>>) => Effect<R, E, A>
```

Added in v1.0.0

## forAll

Determines whether all elements of the `Collection<A>` satisfies the effectual
predicate `f`.

**Signature**

```ts
export declare const forAll: {
  <R, E, A>(elements: Iterable<A>, f: (a: A) => Effect<R, E, boolean>): Effect<R, E, boolean>
  <R, E, A>(f: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, boolean>
}
```

Added in v1.0.0

## forEachEffect

Returns a new effect that will pass the success value of this effect to the
provided callback. If this effect fails, then the failure will be ignored.

**Signature**

```ts
export declare const forEachEffect: {
  <R, E, A, R1, E1, B>(self: Effect<R, E, A>, f: (a: A) => Effect<R1, E1, B>): Effect<R | R1, E1, Option.Option<B>>
  <A, R1, E1, B>(f: (a: A) => Effect<R1, E1, B>): <R, E>(self: Effect<R, E, A>) => Effect<R1 | R, E1, Option.Option<B>>
}
```

Added in v1.0.0

## forEachOption

Applies the function `f` if the argument is non-empty and returns the
results in a new `Option<B>`.

**Signature**

```ts
export declare const forEachOption: {
  <R, E, A, B>(option: Option.Option<A>, f: (a: A) => Effect<R, E, B>): Effect<R, E, Option.Option<B>>
  <R, E, A, B>(f: (a: A) => Effect<R, E, B>): (option: Option.Option<A>) => Effect<R, E, Option.Option<B>>
}
```

Added in v1.0.0

# error handling

## absolve

This function submerges the error case of an `Either` value into an
`Effect` value. It is the inverse operation of `either`.

If the `Either` value is a `Right` value, then the `Effect` value will
succeed with the value contained in the `Right`. If the `Either` value
is a `Left` value, then the `Effect` value will fail with the error
contained in the `Left`.

**Signature**

```ts
export declare const absolve: <R, E, A>(self: Effect<R, E, Either.Either<E, A>>) => Effect<R, E, A>
```

Added in v1.0.0

## absorb

This function transforms an `Effect` value that may fail with a defect
into a new `Effect` value that may fail with an unknown error.

The resulting `Effect` value will have the same context and success
type as the original `Effect` value, but it will have a more general
error type that allows it to fail with any type of error.

**Signature**

```ts
export declare const absorb: <R, E, A>(self: Effect<R, E, A>) => Effect<R, unknown, A>
```

Added in v1.0.0

## absorbWith

This function takes a mapping function `f` and returns a new function
that transforms an `Effect` value that may fail with a defect into a new
`Effect` value that may fail with an unknown error.

If the original `Effect` value fails with a known error, then the
mapping function `f` will be applied to the error to convert it to an
unknown structure.

The resulting `Effect` value will have the same context and success
type as the original `Effect` value, but it will have a more general
error type that allows it to fail with any type of error.

**Signature**

```ts
export declare const absorbWith: {
  <R, E, A>(self: Effect<R, E, A>, f: (error: E) => unknown): Effect<R, unknown, A>
  <E>(f: (error: E) => unknown): <R, A>(self: Effect<R, E, A>) => Effect<R, unknown, A>
}
```

Added in v1.0.0

## catch

Recovers from specified error.

**Signature**

```ts
export declare const catch: { <R, E, A, N extends keyof E, K extends E[N] & string, R1, E1, A1>(self: Effect<R, E, A>, tag: N, k: K, f: (error: Extract<E, { [n in N]: K; }>) => Effect<R1, E1, A1>): Effect<R | R1, E1 | Exclude<E, { [n in N]: K; }>, A | A1>; <N extends keyof E, K extends E[N] & string, E, R1, E1, A1>(tag: N, k: K, f: (error: Extract<E, { [n in N]: K; }>) => Effect<R1, E1, A1>): <R, A>(self: Effect<R, E, A>) => Effect<R1 | R, E1 | Exclude<E, { [n in N]: K; }>, A1 | A>; }
```

Added in v1.0.0

## catchAll

Recovers from all recoverable errors.

**Note**: that `Effect.catchAll` will not recover from unrecoverable defects. To
recover from both recoverable and unrecoverable errors use
`Effect.catchAllCause`.

**Signature**

```ts
export declare const catchAll: {
  <R, A, E, R2, E2, A2>(self: Effect<R, E, A>, f: (e: E) => Effect<R2, E2, A2>): Effect<R | R2, E2, A | A2>
  <E, R2, E2, A2>(f: (e: E) => Effect<R2, E2, A2>): <R, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2, A2 | A>
}
```

Added in v1.0.0

## catchAllCause

Recovers from both recoverable and unrecoverable errors.

See `absorb`, `sandbox`, `mapErrorCause` for other functions that can
recover from defects.

**Signature**

```ts
export declare const catchAllCause: {
  <R, A, E, R2, E2, A2>(self: Effect<R, E, A>, f: (cause: Cause.Cause<E>) => Effect<R2, E2, A2>): Effect<
    R | R2,
    E2,
    A | A2
  >
  <E, R2, E2, A2>(f: (cause: Cause.Cause<E>) => Effect<R2, E2, A2>): <R, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2, A2 | A>
}
```

Added in v1.0.0

## catchAllDefect

Recovers from all defects with provided function.

**WARNING**: There is no sensible way to recover from defects. This
method should be used only at the boundary between Effect and an external
system, to transmit information on a defect for diagnostic or explanatory
purposes.

**Signature**

```ts
export declare const catchAllDefect: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, f: (defect: unknown) => Effect<R2, E2, A2>): Effect<
    R | R2,
    E | E2,
    A | A2
  >
  <R2, E2, A2>(f: (defect: unknown) => Effect<R2, E2, A2>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, A2 | A>
}
```

Added in v1.0.0

## catchSome

Recovers from some or all of the error cases.

**Signature**

```ts
export declare const catchSome: {
  <R, A, E, R2, E2, A2>(self: Effect<R, E, A>, pf: (e: E) => Option.Option<Effect<R2, E2, A2>>): Effect<
    R | R2,
    E | E2,
    A | A2
  >
  <E, R2, E2, A2>(pf: (e: E) => Option.Option<Effect<R2, E2, A2>>): <R, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E | E2, A2 | A>
}
```

Added in v1.0.0

## catchSomeCause

Recovers from some or all of the error cases with provided cause.

**Signature**

```ts
export declare const catchSomeCause: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, f: (cause: Cause.Cause<E>) => Option.Option<Effect<R2, E2, A2>>): Effect<
    R | R2,
    E | E2,
    A | A2
  >
  <E, R2, E2, A2>(f: (cause: Cause.Cause<E>) => Option.Option<Effect<R2, E2, A2>>): <R, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E | E2, A2 | A>
}
```

Added in v1.0.0

## catchSomeDefect

Recovers from some or all of the defects with provided partial function.

**WARNING**: There is no sensible way to recover from defects. This
method should be used only at the boundary between Effect and an external
system, to transmit information on a defect for diagnostic or explanatory
purposes.

**Signature**

```ts
export declare const catchSomeDefect: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, pf: (_: unknown) => Option.Option<Effect<R2, E2, A2>>): Effect<
    R | R2,
    E | E2,
    A | A2
  >
  <R2, E2, A2>(pf: (_: unknown) => Option.Option<Effect<R2, E2, A2>>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, A2 | A>
}
```

Added in v1.0.0

## catchTag

Recovers from specified tagged error.

**Signature**

```ts
export declare const catchTag: {
  <R, E extends { _tag: string }, A, K extends E['_tag'] & string, R1, E1, A1>(
    self: Effect<R, E, A>,
    k: K,
    f: (e: Extract<E, { _tag: K }>) => Effect<R1, E1, A1>
  ): Effect<R | R1, E1 | Exclude<E, { _tag: K }>, A | A1>
  <K extends E['_tag'] & string, E extends { _tag: string }, R1, E1, A1>(
    k: K,
    f: (e: Extract<E, { _tag: K }>) => Effect<R1, E1, A1>
  ): <R, A>(self: Effect<R, E, A>) => Effect<R1 | R, E1 | Exclude<E, { _tag: K }>, A1 | A>
}
```

Added in v1.0.0

## cause

Returns an effect that succeeds with the cause of failure of this effect,
or `Cause.empty` if the effect did succeed.

**Signature**

```ts
export declare const cause: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, Cause.Cause<E>>
```

Added in v1.0.0

## continueOrFail

Fail with the specifed `error` if the supplied partial function does not
match, otherwise continue with the returned value.

**Signature**

```ts
export declare const continueOrFail: {
  <R, E, A, E1, A2>(self: Effect<R, E, A>, error: E1, pf: (a: A) => Option.Option<A2>): Effect<R, E | E1, A2>
  <E1, A, A2>(error: E1, pf: (a: A) => Option.Option<A2>): <R, E>(self: Effect<R, E, A>) => Effect<R, E1 | E, A2>
}
```

Added in v1.0.0

## continueOrFailEffect

Fail with the specifed `error` if the supplied partial function does not
match, otherwise continue with the returned value.

**Signature**

```ts
export declare const continueOrFailEffect: {
  <R, E, A, E1, R2, E2, A2>(self: Effect<R, E, A>, error: E1, pf: (a: A) => Option.Option<Effect<R2, E2, A2>>): Effect<
    R | R2,
    E | E1 | E2,
    A2
  >
  <E1, A, R2, E2, A2>(error: E1, pf: (a: A) => Option.Option<Effect<R2, E2, A2>>): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E1 | E2 | E, A2>
}
```

Added in v1.0.0

## matchCause

**Signature**

```ts
export declare const matchCause: {
  <R, E, A2, A, A3>(self: Effect<R, E, A>, onFailure: (cause: Cause.Cause<E>) => A2, onSuccess: (a: A) => A3): Effect<
    R,
    never,
    A2 | A3
  >
  <E, A2, A, A3>(onFailure: (cause: Cause.Cause<E>) => A2, onSuccess: (a: A) => A3): <R>(
    self: Effect<R, E, A>
  ) => Effect<R, never, A2 | A3>
}
```

Added in v1.0.0

## matchCauseEffect

**Signature**

```ts
export declare const matchCauseEffect: {
  <R, E, A, R2, E2, A2, R3, E3, A3>(
    self: Effect<R, E, A>,
    onFailure: (cause: Cause.Cause<E>) => Effect<R2, E2, A2>,
    onSuccess: (a: A) => Effect<R3, E3, A3>
  ): Effect<R | R2 | R3, E2 | E3, A2 | A3>
  <E, A, R2, E2, A2, R3, E3, A3>(
    onFailure: (cause: Cause.Cause<E>) => Effect<R2, E2, A2>,
    onSuccess: (a: A) => Effect<R3, E3, A3>
  ): <R>(self: Effect<R, E, A>) => Effect<R2 | R3 | R, E2 | E3, A2 | A3>
}
```

Added in v1.0.0

## matchEffect

**Signature**

```ts
export declare const matchEffect: {
  <R, E, A, R2, E2, A2, R3, E3, A3>(
    self: Effect<R, E, A>,
    onFailure: (e: E) => Effect<R2, E2, A2>,
    onSuccess: (a: A) => Effect<R3, E3, A3>
  ): Effect<R | R2 | R3, E2 | E3, A2 | A3>
  <E, A, R2, E2, A2, R3, E3, A3>(onFailure: (e: E) => Effect<R2, E2, A2>, onSuccess: (a: A) => Effect<R3, E3, A3>): <R>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R3 | R, E2 | E3, A2 | A3>
}
```

Added in v1.0.0

## sandbox

Exposes the full `Cause` of failure for the specified effect.

**Signature**

```ts
export declare const sandbox: <R, E, A>(self: Effect<R, E, A>) => Effect<R, Cause.Cause<E>, A>
```

Added in v1.0.0

## unrefineWith

Takes some fiber failures and converts them into errors, using the specified
function to convert the `E` into an `E1 | E2`.

**Signature**

```ts
export declare const unrefineWith: {
  <R, E, A, E1, E2>(self: Effect<R, E, A>, pf: (u: unknown) => Option.Option<E1>, f: (e: E) => E2): Effect<
    R,
    E1 | E2,
    A
  >
  <E, E1, E2>(pf: (u: unknown) => Option.Option<E1>, f: (e: E) => E2): <R, A>(
    self: Effect<R, E, A>
  ) => Effect<R, E1 | E2, A>
}
```

Added in v1.0.0

# execution

## runCallback

**Signature**

```ts
export declare const runCallback: <E, A>(
  effect: Effect<never, E, A>,
  onExit?: ((exit: Exit.Exit<E, A>) => void) | undefined
) => Runtime.Cancel<E, A>
```

Added in v1.0.0

## runFork

**Signature**

```ts
export declare const runFork: <E, A>(effect: Effect<never, E, A>) => Fiber.RuntimeFiber<E, A>
```

Added in v1.0.0

## runPromise

Runs an `Effect` workflow, returning a `Promise` which resolves with the
result of the workflow or rejects with an error.

**Signature**

```ts
export declare const runPromise: <E, A>(effect: Effect<never, E, A>) => Promise<A>
```

Added in v1.0.0

## runPromiseEither

**Signature**

```ts
export declare const runPromiseEither: <E, A>(effect: Effect<never, E, A>) => Promise<Either.Either<E, A>>
```

Added in v1.0.0

## runPromiseExit

Runs an `Effect` workflow, returning a `Promise` which resolves with the
`Exit` value of the workflow.

**Signature**

```ts
export declare const runPromiseExit: <E, A>(effect: Effect<never, E, A>) => Promise<Exit.Exit<E, A>>
```

Added in v1.0.0

## runSync

**Signature**

```ts
export declare const runSync: <E, A>(effect: Effect<never, E, A>) => A
```

Added in v1.0.0

## runSyncEither

**Signature**

```ts
export declare const runSyncEither: <E, A>(effect: Effect<never, E, A>) => Either.Either<E, A>
```

Added in v1.0.0

## runSyncExit

**Signature**

```ts
export declare const runSyncExit: <E, A>(effect: Effect<never, E, A>) => Exit.Exit<E, A>
```

Added in v1.0.0

# filtering

## filter

Filters the collection using the specified effectful predicate.

**Signature**

```ts
export declare const filter: {
  <A, R, E>(elements: Iterable<A>, f: (a: A) => Effect<R, E, boolean>): Effect<R, E, Chunk.Chunk<A>>
  <A, R, E>(f: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<A>>
}
```

Added in v1.0.0

## filterNot

Filters the collection using the specified effectual predicate, removing
all elements that satisfy the predicate.

**Signature**

```ts
export declare const filterNot: {
  <A, R, E>(elements: Iterable<A>, f: (a: A) => Effect<R, E, boolean>): Effect<R, E, Chunk.Chunk<A>>
  <A, R, E>(f: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<A>>
}
```

Added in v1.0.0

## filterNotPar

Filters the collection in parallel using the specified effectual predicate.
See `filterNot` for a sequential version.

**Signature**

```ts
export declare const filterNotPar: {
  <A, R, E>(elements: Iterable<A>, f: (a: A) => Effect<R, E, boolean>): Effect<R, E, Chunk.Chunk<A>>
  <A, R, E>(f: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<A>>
}
```

Added in v1.0.0

## filterOrDie

Filter the specified effect with the provided function, dying with specified
defect if the predicate fails.

**Signature**

```ts
export declare const filterOrDie: {
  <R, E, A, B extends A>(self: Effect<R, E, A>, f: Refinement<A, B>, defect: LazyArg<unknown>): Effect<R, E, B>
  <R, E, A>(self: Effect<R, E, A>, f: Predicate<A>, defect: LazyArg<unknown>): Effect<R, E, A>
  <A, B extends A>(f: Refinement<A, B>, defect: LazyArg<unknown>): <R, E>(self: Effect<R, E, A>) => Effect<R, E, B>
  <A>(f: Predicate<A>, defect: LazyArg<unknown>): <R, E>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## filterOrDieMessage

Filter the specified effect with the provided function, dying with specified
message if the predicate fails.

**Signature**

```ts
export declare const filterOrDieMessage: {
  <R, E, A, B extends A>(self: Effect<R, E, A>, f: Refinement<A, B>, message: string): Effect<R, E, B>
  <R, E, A>(self: Effect<R, E, A>, f: Predicate<A>, message: string): Effect<R, E, A>
  <A, B extends A>(f: Refinement<A, B>, message: string): <R, E>(self: Effect<R, E, A>) => Effect<R, E, B>
  <A>(f: Predicate<A>, message: string): <R, E>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## filterOrElse

Filters the specified effect with the provided function returning the value
of the effect if it is successful, otherwise returns the value of `orElse`.

**Signature**

```ts
export declare const filterOrElse: {
  <R, E, A, B extends A, R2, E2, C>(
    self: Effect<R, E, A>,
    f: Refinement<A, B>,
    orElse: LazyArg<Effect<R2, E2, C>>
  ): Effect<R | R2, E | E2, B | C>
  <R, E, A, R2, E2, B>(self: Effect<R, E, A>, f: Predicate<A>, orElse: LazyArg<Effect<R2, E2, B>>): Effect<
    R | R2,
    E | E2,
    A | B
  >
  <A, B extends A, R2, E2, C>(f: Refinement<A, B>, orElse: LazyArg<Effect<R2, E2, C>>): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, B | C>
  <A, R2, E2, B>(f: Predicate<A>, orElse: LazyArg<Effect<R2, E2, B>>): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, A | B>
}
```

Added in v1.0.0

## filterOrElseWith

Filters the specified effect with the provided function returning the value
of the effect if it is successful, otherwise returns the value of `orElse`.

**Signature**

```ts
export declare const filterOrElseWith: {
  <R, E, A, B extends A, R2, E2, C>(
    self: Effect<R, E, A>,
    f: Refinement<A, B>,
    orElse: (a: A) => Effect<R2, E2, C>
  ): Effect<R | R2, E | E2, B | C>
  <R, E, A, R2, E2, B>(self: Effect<R, E, A>, f: Predicate<A>, orElse: (a: A) => Effect<R2, E2, B>): Effect<
    R | R2,
    E | E2,
    A | B
  >
  <A, B extends A, R2, E2, C>(f: Refinement<A, B>, orElse: (a: A) => Effect<R2, E2, C>): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, B | C>
  <A, R2, E2, B>(f: Predicate<A>, orElse: (a: A) => Effect<R2, E2, B>): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, A | B>
}
```

Added in v1.0.0

## filterOrFail

Filter the specified effect with the provided function, failing with specified
error if the predicate fails.

**Signature**

```ts
export declare const filterOrFail: {
  <R, E, A, B extends A, E2>(self: Effect<R, E, A>, f: Refinement<A, B>, error: LazyArg<E2>): Effect<R, E | E2, B>
  <R, E, A, E2>(self: Effect<R, E, A>, f: Predicate<A>, error: LazyArg<E2>): Effect<R, E | E2, A>
  <A, B extends A, E2>(f: Refinement<A, B>, error: LazyArg<E2>): <R, E>(self: Effect<R, E, A>) => Effect<R, E2 | E, B>
  <A, E2>(f: Predicate<A>, error: LazyArg<E2>): <R, E>(self: Effect<R, E, A>) => Effect<R, E2 | E, A>
}
```

Added in v1.0.0

## filterPar

Filters the collection in parallel using the specified effectual predicate.
See `filter` for a sequential version of it.

**Signature**

```ts
export declare const filterPar: {
  <A, R, E>(elements: Iterable<A>, f: (a: A) => Effect<R, E, boolean>): Effect<R, E, Chunk.Chunk<A>>
  <A, R, E>(f: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<A>>
}
```

Added in v1.0.0

# finalization

## addFinalizer

This function adds a finalizer to the scope of the calling `Effect` value.
The finalizer is guaranteed to be run when the scope is closed, and it may
depend on the `Exit` value that the scope is closed with.

**Signature**

```ts
export declare const addFinalizer: <R, X>(
  finalizer: (exit: Exit.Exit<unknown, unknown>) => Effect<R, never, X>
) => Effect<Scope.Scope | R, never, void>
```

Added in v1.0.0

## ensuring

Returns an effect that, if this effect _starts_ execution, then the
specified `finalizer` is guaranteed to be executed, whether this effect
succeeds, fails, or is interrupted.

For use cases that need access to the effect's result, see `onExit`.

Finalizers offer very powerful guarantees, but they are low-level, and
should generally not be used for releasing resources. For higher-level
logic built on `ensuring`, see the `acquireRelease` family of methods.

**Signature**

```ts
export declare const ensuring: {
  <R, E, A, R1, X>(self: Effect<R, E, A>, finalizer: Effect<R1, never, X>): Effect<R | R1, E, A>
  <R1, X>(finalizer: Effect<R1, never, X>): <R, E, A>(self: Effect<R, E, A>) => Effect<R1 | R, E, A>
}
```

Added in v1.0.0

## ensuringChild

Acts on the children of this fiber (collected into a single fiber),
guaranteeing the specified callback will be invoked, whether or not this
effect succeeds.

**Signature**

```ts
export declare const ensuringChild: {
  <R, E, A, R2, X>(
    self: Effect<R, E, A>,
    f: (fiber: Fiber.Fiber<any, Chunk.Chunk<unknown>>) => Effect<R2, never, X>
  ): Effect<R | R2, E, A>
  <R2, X>(f: (fiber: Fiber.Fiber<any, Chunk.Chunk<unknown>>) => Effect<R2, never, X>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E, A>
}
```

Added in v1.0.0

## ensuringChildren

Acts on the children of this fiber, guaranteeing the specified callback
will be invoked, whether or not this effect succeeds.

**Signature**

```ts
export declare const ensuringChildren: {
  <R, E, A, R1, X>(
    self: Effect<R, E, A>,
    children: (fibers: Chunk.Chunk<Fiber.RuntimeFiber<any, any>>) => Effect<R1, never, X>
  ): Effect<R | R1, E, A>
  <R1, X>(children: (fibers: Chunk.Chunk<Fiber.RuntimeFiber<any, any>>) => Effect<R1, never, X>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R1 | R, E, A>
}
```

Added in v1.0.0

## onExit

Ensures that a cleanup functions runs, whether this effect succeeds, fails,
or is interrupted.

**Signature**

```ts
export declare const onExit: {
  <R, E, A, R2, X>(self: Effect<R, E, A>, cleanup: (exit: Exit.Exit<E, A>) => Effect<R2, never, X>): Effect<
    R | R2,
    E,
    A
  >
  <E, A, R2, X>(cleanup: (exit: Exit.Exit<E, A>) => Effect<R2, never, X>): <R>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E, A>
}
```

Added in v1.0.0

## onInterrupt

**Signature**

```ts
export declare const onInterrupt: {
  <R, E, A, R2, X>(
    self: Effect<R, E, A>,
    cleanup: (interruptors: HashSet.HashSet<FiberId.FiberId>) => Effect<R2, never, X>
  ): Effect<R | R2, E, A>
  <R2, X>(cleanup: (interruptors: HashSet.HashSet<FiberId.FiberId>) => Effect<R2, never, X>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E, A>
}
```

Added in v1.0.0

# folding

## match

Folds over the failure value or the success value to yield an effect that
does not fail, but succeeds with the value returned by the left or right
function passed to `match`.

**Signature**

```ts
export declare const match: {
  <R, E, A, A2, A3>(self: Effect<R, E, A>, onFailure: (error: E) => A2, onSuccess: (value: A) => A3): Effect<
    R,
    never,
    A2 | A3
  >
  <E, A, A2, A3>(onFailure: (error: E) => A2, onSuccess: (value: A) => A3): <R>(
    self: Effect<R, E, A>
  ) => Effect<R, never, A2 | A3>
}
```

Added in v1.0.0

## reduce

Folds an `Iterable<A>` using an effectual function f, working sequentially
from left to right.

**Signature**

```ts
export declare const reduce: {
  <Z, A, R, E>(elements: Iterable<A>, zero: Z, f: (z: Z, a: A) => Effect<R, E, Z>): Effect<R, E, Z>
  <Z, A, R, E>(zero: Z, f: (z: Z, a: A) => Effect<R, E, Z>): (elements: Iterable<A>) => Effect<R, E, Z>
}
```

Added in v1.0.0

## reduceAll

Reduces an `Iterable<Effect<R, E, A>>` to a single effect, working
sequentially.

**Signature**

```ts
export declare const reduceAll: {
  <R, E, A>(elements: Iterable<Effect<R, E, A>>, zero: Effect<R, E, A>, f: (acc: A, a: A) => A): Effect<R, E, A>
  <R, E, A>(zero: Effect<R, E, A>, f: (acc: A, a: A) => A): (elements: Iterable<Effect<R, E, A>>) => Effect<R, E, A>
}
```

Added in v1.0.0

## reduceAllPar

Reduces an `Iterable<Effect<R, E, A>>` to a single effect, working in
parallel.

**Signature**

```ts
export declare const reduceAllPar: {
  <R, E, A>(elements: Iterable<Effect<R, E, A>>, zero: Effect<R, E, A>, f: (acc: A, a: A) => A): Effect<R, E, A>
  <R, E, A>(zero: Effect<R, E, A>, f: (acc: A, a: A) => A): (elements: Iterable<Effect<R, E, A>>) => Effect<R, E, A>
}
```

Added in v1.0.0

## reduceRight

Folds an `Iterable<A>` using an effectual function f, working sequentially from left to right.

**Signature**

```ts
export declare const reduceRight: {
  <A, Z, R, E>(elements: Iterable<A>, zero: Z, f: (a: A, z: Z) => Effect<R, E, Z>): Effect<R, E, Z>
  <A, Z, R, E>(zero: Z, f: (a: A, z: Z) => Effect<R, E, Z>): (elements: Iterable<A>) => Effect<R, E, Z>
}
```

Added in v1.0.0

## reduceWhile

Folds over the elements in this chunk from the left, stopping the fold early
when the predicate is not satisfied.

**Signature**

```ts
export declare const reduceWhile: {
  <A, R, E, Z>(elements: Iterable<A>, zero: Z, predicate: Predicate<Z>, f: (s: Z, a: A) => Effect<R, E, Z>): Effect<
    R,
    E,
    Z
  >
  <A, R, E, Z>(zero: Z, predicate: Predicate<Z>, f: (s: Z, a: A) => Effect<R, E, Z>): (
    elements: Iterable<A>
  ) => Effect<R, E, Z>
}
```

Added in v1.0.0

# getter

## isFailure

Returns `true` if this effect is a failure, `false` otherwise.

**Signature**

```ts
export declare const isFailure: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, boolean>
```

Added in v1.0.0

## isSuccess

Returns `true` if this effect is a success, `false` otherwise.

**Signature**

```ts
export declare const isSuccess: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, boolean>
```

Added in v1.0.0

# getters

## right

"Zooms in" on the value in the `Right` side of an `Either`, moving the
possibility that the value is a `Left` to the error channel.

**Signature**

```ts
export declare const right: <R, E, A, B>(self: Effect<R, E, Either.Either<A, B>>) => Effect<R, Either.Either<A, E>, B>
```

Added in v1.0.0

## rightWith

Performs the specified operation while "zoomed in" on the `Right` case of an
`Either`.

**Signature**

```ts
export declare const rightWith: {
  <R, E, A, A1, B, B1, R1, E1>(
    self: Effect<R, E, Either.Either<A, B>>,
    f: (effect: Effect<R, Either.Either<A, E>, B>) => Effect<R1, Either.Either<A1, E1>, B1>
  ): Effect<R | R1, E | E1, Either.Either<A1, B1>>
  <R, E, A, A1, B, B1, R1, E1>(
    f: (effect: Effect<R, Either.Either<A, E>, B>) => Effect<R1, Either.Either<A1, E1>, B1>
  ): (self: Effect<R, E, Either.Either<A, B>>) => Effect<R | R1, E | E1, Either.Either<A1, B1>>
}
```

Added in v1.0.0

## tags

Retrieves the metric tags associated with the current scope.

**Signature**

```ts
export declare const tags: (_: void) => Effect<never, never, HashSet.HashSet<MetricLabel.MetricLabel>>
```

Added in v1.0.0

## unleft

Converts a `Effect<R, Either<E, B>, A>` into a `Effect<R, E, Either<A, B>>`.
The inverse of `left`.

**Signature**

```ts
export declare const unleft: <R, E, B, A>(self: Effect<R, Either.Either<E, B>, A>) => Effect<R, E, Either.Either<A, B>>
```

Added in v1.0.0

# interruption

## disconnect

Returns an effect whose interruption will be disconnected from the
fiber's own interruption, being performed in the background without
slowing down the fiber's interruption.

This method is useful to create "fast interrupting" effects. For
example, if you call this on a bracketed effect, then even if the
effect is "stuck" in acquire or release, its interruption will return
immediately, while the acquire / release are performed in the
background.

See timeout and race for other applications.

**Signature**

```ts
export declare const disconnect: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

## interrupt

**Signature**

```ts
export declare const interrupt: (_: void) => Effect<never, never, never>
```

Added in v1.0.0

## interruptWith

**Signature**

```ts
export declare const interruptWith: (fiberId: FiberId.FiberId) => Effect<never, never, never>
```

Added in v1.0.0

## interruptible

**Signature**

```ts
export declare const interruptible: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

## interruptibleMask

**Signature**

```ts
export declare const interruptibleMask: <R, E, A>(
  f: (restore: <RX, EX, AX>(effect: Effect<RX, EX, AX>) => Effect<RX, EX, AX>) => Effect<R, E, A>
) => Effect<R, E, A>
```

Added in v1.0.0

## uninterruptible

**Signature**

```ts
export declare const uninterruptible: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

## uninterruptibleMask

**Signature**

```ts
export declare const uninterruptibleMask: <R, E, A>(
  f: (restore: <RX, EX, AX>(effect: Effect<RX, EX, AX>) => Effect<RX, EX, AX>) => Effect<R, E, A>
) => Effect<R, E, A>
```

Added in v1.0.0

# locking

## Permit (interface)

**Signature**

```ts
export interface Permit {
  readonly index: number
}
```

Added in v1.0.0

## Semaphore (interface)

**Signature**

```ts
export interface Semaphore {
  readonly withPermits: (permits: number) => <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
  readonly take: (permits: number) => Effect<never, never, number>
  readonly release: (permits: number) => Effect<never, never, void>
}
```

Added in v1.0.0

## makeSemaphore

Creates a new Semaphore

**Signature**

```ts
export declare const makeSemaphore: (permits: number) => Effect<never, never, Semaphore>
```

Added in v1.0.0

## unsafeMakeSemaphore

Unsafely creates a new Semaphore

**Signature**

```ts
export declare const unsafeMakeSemaphore: (permits: number) => Semaphore
```

Added in v1.0.0

# logging

## log

Logs the specified message at the current log level.

**Signature**

```ts
export declare const log: (message: string) => Effect<never, never, void>
```

Added in v1.0.0

## logAnnotate

Annotates each log in this effect with the specified log annotation.

**Signature**

```ts
export declare const logAnnotate: {
  <R, E, A>(effect: Effect<R, E, A>, key: string, value: string): Effect<R, E, A>
  (key: string, value: string): <R, E, A>(effect: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## logAnnotations

Retrieves the log annotations associated with the current scope.

**Signature**

```ts
export declare const logAnnotations: (_: void) => Effect<never, never, HashMap.HashMap<string, string>>
```

Added in v1.0.0

## logDebug

Logs the specified message at the debug log level.

**Signature**

```ts
export declare const logDebug: (message: string) => Effect<never, never, void>
```

Added in v1.0.0

## logDebugCause

Logs the specified cause at the debug log level.

**Signature**

```ts
export declare const logDebugCause: <E>(cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logDebugCauseMessage

Logs the specified message and cause at the debug log level.

**Signature**

```ts
export declare const logDebugCauseMessage: <E>(message: string, cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logError

Logs the specified message at the error log level.

**Signature**

```ts
export declare const logError: (message: string) => Effect<never, never, void>
```

Added in v1.0.0

## logErrorCause

Logs the specified cause at the error log level.

**Signature**

```ts
export declare const logErrorCause: <E>(cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logErrorCauseMessage

Logs the specified message and cause at the error log level.

**Signature**

```ts
export declare const logErrorCauseMessage: <E>(message: string, cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logFatal

Logs the specified message at the fatal log level.

**Signature**

```ts
export declare const logFatal: (message: string) => Effect<never, never, void>
```

Added in v1.0.0

## logFatalCause

Logs the specified cause at the fatal log level.

**Signature**

```ts
export declare const logFatalCause: <E>(cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logFatalCauseMessage

Logs the specified message and cause at the fatal log level.

**Signature**

```ts
export declare const logFatalCauseMessage: <E>(message: string, cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logInfo

Logs the specified message at the informational log level.

**Signature**

```ts
export declare const logInfo: (message: string) => Effect<never, never, void>
```

Added in v1.0.0

## logInfoCause

Logs the specified cause at the informational log level.

**Signature**

```ts
export declare const logInfoCause: <E>(cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logInfoCauseMessage

Logs the specified message and cause at the informational log level.

**Signature**

```ts
export declare const logInfoCauseMessage: <E>(message: string, cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logSpan

Adjusts the label for the current logging span.

**Signature**

```ts
export declare const logSpan: {
  <R, E, A>(effect: Effect<R, E, A>, label: string): Effect<R, E, A>
  (label: string): <R, E, A>(effect: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## logTrace

Logs the specified message at the trace log level.

**Signature**

```ts
export declare const logTrace: (message: string) => Effect<never, never, void>
```

Added in v1.0.0

## logTraceCause

Logs the specified cause at the trace log level.

**Signature**

```ts
export declare const logTraceCause: <E>(cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logTraceCauseMessage

Logs the specified message and cause at the trace log level.

**Signature**

```ts
export declare const logTraceCauseMessage: <E>(message: string, cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logWarning

Logs the specified message at the warning log level.

**Signature**

```ts
export declare const logWarning: (message: string) => Effect<never, never, void>
```

Added in v1.0.0

## logWarningCause

Logs the specified cause at the warning log level.

**Signature**

```ts
export declare const logWarningCause: <E>(cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

## logWarningCauseMessage

Logs the specified message and cause at the warning log level.

**Signature**

```ts
export declare const logWarningCauseMessage: <E>(message: string, cause: Cause.Cause<E>) => Effect<never, never, void>
```

Added in v1.0.0

# mapping

## as

This function maps the success value of an `Effect` value to a specified
constant value.

**Signature**

```ts
export declare const as: {
  <R, E, A, B>(self: Effect<R, E, A>, value: B): Effect<R, E, B>
  <B>(value: B): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, B>
}
```

Added in v1.0.0

## asLeft

This function maps the success value of an `Effect` value to a `Left` value
in an `Either` value.

**Signature**

```ts
export declare const asLeft: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, Either.Either<A, never>>
```

Added in v1.0.0

## asLeftError

This function maps the error value of an `Effect` value to a `Left` value
in an `Either` value.

**Signature**

```ts
export declare const asLeftError: <R, E, A>(self: Effect<R, E, A>) => Effect<R, Either.Either<E, never>, A>
```

Added in v1.0.0

## asRight

This function maps the success value of an `Effect` value to a `Right` value
in an `Either` value.

**Signature**

```ts
export declare const asRight: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, Either.Either<never, A>>
```

Added in v1.0.0

## asRightError

This function maps the error value of an `Effect` value to a `Right` value
in an `Either` value.

**Signature**

```ts
export declare const asRightError: <R, E, A>(self: Effect<R, E, A>) => Effect<R, Either.Either<never, E>, A>
```

Added in v1.0.0

## asSome

This function maps the success value of an `Effect` value to a `Some` value
in an `Option` value. If the original `Effect` value fails, the returned
`Effect` value will also fail.

**Signature**

```ts
export declare const asSome: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, Option.Option<A>>
```

Added in v1.0.0

## asSomeError

This function maps the error value of an `Effect` value to a `Some` value
in an `Option` value. If the original `Effect` value succeeds, the returned
`Effect` value will also succeed.

**Signature**

```ts
export declare const asSomeError: <R, E, A>(self: Effect<R, E, A>) => Effect<R, Option.Option<E>, A>
```

Added in v1.0.0

## asUnit

This function maps the success value of an `Effect` value to `void`. If the
original `Effect` value succeeds, the returned `Effect` value will also
succeed. If the original `Effect` value fails, the returned `Effect` value
will fail with the same error.

**Signature**

```ts
export declare const asUnit: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, void>
```

Added in v1.0.0

## map

**Signature**

```ts
export declare const map: {
  <R, E, A, B>(self: Effect<R, E, A>, f: (a: A) => B): Effect<R, E, B>
  <A, B>(f: (a: A) => B): <R, E>(self: Effect<R, E, A>) => Effect<R, E, B>
}
```

Added in v1.0.0

## mapAccum

Statefully and effectfully maps over the elements of this chunk to produce
new elements.

**Signature**

```ts
export declare const mapAccum: <A, B, R, E, Z>(
  elements: Iterable<A>,
  zero: Z,
  f: (z: Z, a: A) => Effect<R, E, readonly [Z, B]>
) => Effect<R, E, readonly [Z, Chunk.Chunk<B>]>
```

Added in v1.0.0

## mapBoth

Returns an effect whose failure and success channels have been mapped by
the specified pair of functions, `f` and `g`.

**Signature**

```ts
export declare const mapBoth: {
  <R, E, A, E2, A2>(self: Effect<R, E, A>, f: (e: E) => E2, g: (a: A) => A2): Effect<R, E2, A2>
  <E, A, E2, A2>(f: (e: E) => E2, g: (a: A) => A2): <R>(self: Effect<R, E, A>) => Effect<R, E2, A2>
}
```

Added in v1.0.0

## mapError

Returns an effect with its error channel mapped using the specified function.

**Signature**

```ts
export declare const mapError: {
  <R, A, E, E2>(self: Effect<R, E, A>, f: (e: E) => E2): Effect<R, E2, A>
  <E, E2>(f: (e: E) => E2): <R, A>(self: Effect<R, E, A>) => Effect<R, E2, A>
}
```

Added in v1.0.0

## mapErrorCause

Returns an effect with its full cause of failure mapped using the specified
function. This can be used to transform errors while preserving the
original structure of `Cause`.

See `absorb`, `sandbox`, `catchAllCause` for other functions for dealing
with defects.

**Signature**

```ts
export declare const mapErrorCause: {
  <R, E, A, E2>(self: Effect<R, E, A>, f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): Effect<R, E2, A>
  <E, E2>(f: (cause: Cause.Cause<E>) => Cause.Cause<E2>): <R, A>(self: Effect<R, E, A>) => Effect<R, E2, A>
}
```

Added in v1.0.0

## mapTryCatch

Returns an effect whose success is mapped by the specified side effecting
`f` function, translating any thrown exceptions into typed failed effects.

**Signature**

```ts
export declare const mapTryCatch: {
  <R, E, A, B, E1>(self: Effect<R, E, A>, f: (a: A) => B, onThrow: (u: unknown) => E1): Effect<R, E | E1, B>
  <A, B, E1>(f: (a: A) => B, onThrow: (u: unknown) => E1): <R, E>(self: Effect<R, E, A>) => Effect<R, E1 | E, B>
}
```

Added in v1.0.0

## negate

Returns a new effect where boolean value of this effect is negated.

**Signature**

```ts
export declare const negate: <R, E>(self: Effect<R, E, boolean>) => Effect<R, E, boolean>
```

Added in v1.0.0

# models

## Effect (interface)

The `Effect` interface defines a value that lazily describes a workflow or job.
The workflow requires some context `R`, and may fail with an error of type `E`,
or succeed with a value of type `A`.

`Effect` values model resourceful interaction with the outside world, including
synchronous, asynchronous, concurrent, and parallel interaction. They use a
fiber-based concurrency model, with built-in support for scheduling, fine-grained
interruption, structured concurrency, and high scalability.

To run an `Effect` value, you need a `Runtime`, which is a type that is capable
of executing `Effect` values.

**Signature**

```ts
export interface Effect<R, E, A> extends Effect.Variance<R, E, A>, Equal.Equal {
  traced(trace: Trace): Effect<R, E, A>
}
```

Added in v1.0.0

## EffectGen (interface)

**Signature**

```ts
export interface EffectGen<R, E, A> {
  readonly _R: () => R
  readonly _E: () => E
  readonly _A: () => A
  readonly value: Effect<R, E, A>

  [Symbol.iterator](): Generator<EffectGen<R, E, A>, A>
}
```

Added in v1.0.0

# mutations

## awaitAllChildren

Returns a new effect that will not succeed with its value before first
waiting for the end of all child fibers forked by the effect.

**Signature**

```ts
export declare const awaitAllChildren: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

## cached

Returns an effect that, if evaluated, will return the cached result of this
effect. Cached results will expire after `timeToLive` duration.

**Signature**

```ts
export declare const cached: {
  <R, E, A>(self: Effect<R, E, A>, timeToLive: Duration.Duration): Effect<R, never, Effect<never, E, A>>
  (timeToLive: Duration.Duration): <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, Effect<never, E, A>>
}
```

Added in v1.0.0

## cachedInvalidate

Returns an effect that, if evaluated, will return the cached result of this
effect. Cached results will expire after `timeToLive` duration. In
addition, returns an effect that can be used to invalidate the current
cached value before the `timeToLive` duration expires.

**Signature**

```ts
export declare const cachedInvalidate: {
  <R, E, A>(self: Effect<R, E, A>, timeToLive: Duration.Duration): Effect<
    R,
    never,
    readonly [Effect<never, E, A>, Effect<never, never, void>]
  >
  (timeToLive: Duration.Duration): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R, never, readonly [Effect<never, E, A>, Effect<never, never, void>]>
}
```

Added in v1.0.0

## delay

Returns an effect that is delayed from this effect by the specified
`Duration`.

**Signature**

```ts
export declare const delay: {
  <R, E, A>(self: Effect<R, E, A>, duration: Duration.Duration): Effect<R, E, A>
  (duration: Duration.Duration): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## diffFiberRefs

Returns a new workflow that executes this one and captures the changes in
`FiberRef` values.

**Signature**

```ts
export declare const diffFiberRefs: <R, E, A>(
  self: Effect<R, E, A>
) => Effect<R, E, readonly [FiberRefsPatch.FiberRefsPatch, A]>
```

Added in v1.0.0

## dropUntil

Drops all elements until the effectful predicate returns true.

**Signature**

```ts
export declare const dropUntil: {
  <A, R, E>(elements: Iterable<A>, predicate: (a: A) => Effect<R, E, boolean>): Effect<R, E, Chunk.Chunk<A>>
  <A, R, E>(predicate: (a: A) => Effect<R, E, boolean>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<A>>
}
```

Added in v1.0.0

## eventually

Returns an effect that ignores errors and runs repeatedly until it
eventually succeeds.

**Signature**

```ts
export declare const eventually: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, A>
```

Added in v1.0.0

## flip

Returns an effect that swaps the error/success cases. This allows you to
use all methods on the error channel, possibly before flipping back.

**Signature**

```ts
export declare const flip: <R, E, A>(self: Effect<R, E, A>) => Effect<R, A, E>
```

Added in v1.0.0

## flipWith

Swaps the error/value parameters, applies the function `f` and flips the
parameters back

**Signature**

```ts
export declare const flipWith: {
  <R, A, E, R2, A2, E2>(self: Effect<R, E, A>, f: (effect: Effect<R, A, E>) => Effect<R2, A2, E2>): Effect<R2, E2, A2>
  <R, A, E, R2, A2, E2>(f: (effect: Effect<R, A, E>) => Effect<R2, A2, E2>): (
    self: Effect<R, E, A>
  ) => Effect<R2, E2, A2>
}
```

Added in v1.0.0

## forever

Repeats this effect forever (until the first error).

**Signature**

```ts
export declare const forever: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, never>
```

Added in v1.0.0

## head

Returns a successful effect with the head of the collection if the collection
is non-empty, or fails with the error `None` if the collection is empty.

**Signature**

```ts
export declare const head: <R, E, A>(self: Effect<R, E, Iterable<A>>) => Effect<R, Option.Option<E>, A>
```

Added in v1.0.0

## ignore

Returns a new effect that ignores the success or failure of this effect.

**Signature**

```ts
export declare const ignore: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, void>
```

Added in v1.0.0

## ignoreLogged

Returns a new effect that ignores the success or failure of this effect,
but which also logs failures at the Debug level, just in case the failure
turns out to be important.

**Signature**

```ts
export declare const ignoreLogged: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, void>
```

Added in v1.0.0

## left

"Zooms in" on the value in the `Left` side of an `Either`, moving the
possibility that the value is a `Right` to the error channel.

**Signature**

```ts
export declare const left: <R, E, A, B>(self: Effect<R, E, Either.Either<A, B>>) => Effect<R, Either.Either<E, B>, A>
```

Added in v1.0.0

## leftWith

Performs the specified operation while "zoomed in" on the `Left` case of an
`Either`.

**Signature**

```ts
export declare const leftWith: {
  <R, E, B, A, R1, E1, B1, A1>(
    self: Effect<R, E, Either.Either<A, B>>,
    f: (effect: Effect<R, Either.Either<E, B>, A>) => Effect<R1, Either.Either<E1, B1>, A1>
  ): Effect<R | R1, E | E1, Either.Either<A1, B1>>
  <R, E, B, A, R1, E1, B1, A1>(
    f: (effect: Effect<R, Either.Either<E, B>, A>) => Effect<R1, Either.Either<E1, B1>, A1>
  ): (self: Effect<R, E, Either.Either<A, B>>) => Effect<R | R1, E | E1, Either.Either<A1, B1>>
}
```

Added in v1.0.0

## memoize

Returns an effect that, if evaluated, will return the lazily computed
result of this effect.

**Signature**

```ts
export declare const memoize: <R, E, A>(self: Effect<R, E, A>) => Effect<never, never, Effect<R, E, A>>
```

Added in v1.0.0

## merge

Returns a new effect where the error channel has been merged into the
success channel to their common combined type.

**Signature**

```ts
export declare const merge: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, E | A>
```

Added in v1.0.0

## onDone

**Signature**

```ts
export declare const onDone: {
  <R, E, A, R1, X1, R2, X2>(
    self: Effect<R, E, A>,
    onError: (e: E) => Effect<R1, never, X1>,
    onSuccess: (a: A) => Effect<R2, never, X2>
  ): Effect<R | R1 | R2, never, void>
  <E, A, R1, X1, R2, X2>(onError: (e: E) => Effect<R1, never, X1>, onSuccess: (a: A) => Effect<R2, never, X2>): <R>(
    self: Effect<R, E, A>
  ) => Effect<R1 | R2 | R, never, void>
}
```

Added in v1.0.0

## onDoneCause

**Signature**

```ts
export declare const onDoneCause: {
  <R, E, A, R1, X1, R2, X2>(
    self: Effect<R, E, A>,
    onCause: (cause: Cause.Cause<E>) => Effect<R1, never, X1>,
    onSuccess: (a: A) => Effect<R2, never, X2>
  ): Effect<R | R1 | R2, never, void>
  <E, A, R1, X1, R2, X2>(
    onCause: (cause: Cause.Cause<E>) => Effect<R1, never, X1>,
    onSuccess: (a: A) => Effect<R2, never, X2>
  ): <R>(self: Effect<R, E, A>) => Effect<R1 | R2 | R, never, void>
}
```

Added in v1.0.0

## onError

Runs the specified effect if this effect fails, providing the error to the
effect if it exists. The provided effect will not be interrupted.

**Signature**

```ts
export declare const onError: {
  <R, A, E, R2, X>(self: Effect<R, E, A>, cleanup: (cause: Cause.Cause<E>) => Effect<R2, never, X>): Effect<
    R | R2,
    E,
    A
  >
  <E, R2, X>(cleanup: (cause: Cause.Cause<E>) => Effect<R2, never, X>): <R, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E, A>
}
```

Added in v1.0.0

## once

Returns an effect that will be executed at most once, even if it is
evaluated multiple times.

**Signature**

```ts
export declare const once: <R, E, A>(self: Effect<R, E, A>) => Effect<never, never, Effect<R, E, void>>
```

Added in v1.0.0

## option

Executes this effect, skipping the error but returning optionally the
success.

**Signature**

```ts
export declare const option: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, Option.Option<A>>
```

Added in v1.0.0

## parallelErrors

Exposes all parallel errors in a single call.

**Signature**

```ts
export declare const parallelErrors: <R, E, A>(self: Effect<R, E, A>) => Effect<R, Chunk.Chunk<E>, A>
```

Added in v1.0.0

## parallelFinalizers

**Signature**

```ts
export declare const parallelFinalizers: <R, E, A>(self: Effect<R, E, A>) => Effect<Scope.Scope | R, E, A>
```

Added in v1.0.0

## patchFiberRefs

Applies the specified changes to the `FiberRef` values for the fiber
running this workflow.

**Signature**

```ts
export declare const patchFiberRefs: (patch: FiberRefsPatch.FiberRefsPatch) => Effect<never, never, void>
```

Added in v1.0.0

## race

Returns an effect that races this effect with the specified effect,
returning the first successful `A` from the faster side. If one effect
succeeds, the other will be interrupted. If neither succeeds, then the
effect will fail with some error.

Note that both effects are disconnected before being raced. This means that
interruption of the loser will always be performed in the background. If this
behavior is not desired, you can use `Effect.raceWith`, which will not
disconnect or interrupt losers.

**Signature**

```ts
export declare const race: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>): Effect<R | R2, E | E2, A | A2>
  <R2, E2, A2>(that: Effect<R2, E2, A2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, A2 | A>
}
```

Added in v1.0.0

## raceAll

Returns an effect that races this effect with all the specified effects,
yielding the value of the first effect to succeed with a value. Losers of
the race will be interrupted immediately

**Signature**

```ts
export declare const raceAll: <R, E, A>(effects: Iterable<Effect<R, E, A>>) => Effect<R, E, A>
```

Added in v1.0.0

## raceAwait

Returns an effect that races this effect with the specified effect,
returning the first successful `A` from the faster side. If one effect
succeeds, the other will be interrupted. If neither succeeds, then the
effect will fail with some error.

**Signature**

```ts
export declare const raceAwait: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>): Effect<R | R2, E | E2, A | A2>
  <R2, E2, A2>(that: Effect<R2, E2, A2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, A2 | A>
}
```

Added in v1.0.0

## raceEither

Returns an effect that races this effect with the specified effect,
yielding the first result to succeed. If neither effect succeeds, then the
composed effect will fail with some error.

WARNING: The raced effect will safely interrupt the "loser", but will not
resume until the loser has been cleanly terminated.

**Signature**

```ts
export declare const raceEither: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>): Effect<R | R2, E | E2, Either.Either<A, A2>>
  <R2, E2, A2>(that: Effect<R2, E2, A2>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, Either.Either<A, A2>>
}
```

Added in v1.0.0

## raceFibersWith

Forks this effect and the specified effect into their own fibers, and races
them, calling one of two specified callbacks depending on which fiber wins
the race. This method does not interrupt, join, or otherwise do anything
with the fibers. It can be considered a low-level building block for
higher-level operators like `race`.

**Signature**

```ts
export declare const raceFibersWith: {
  <R, E, A, R1, E1, A1, R2, E2, A2, R3, E3, A3>(
    self: Effect<R, E, A>,
    that: Effect<R1, E1, A1>,
    selfWins: (winner: Fiber.RuntimeFiber<E, A>, loser: Fiber.RuntimeFiber<E1, A1>) => Effect<R2, E2, A2>,
    thatWins: (winner: Fiber.RuntimeFiber<E1, A1>, loser: Fiber.RuntimeFiber<E, A>) => Effect<R3, E3, A3>
  ): Effect<R | R1 | R2 | R3, E2 | E3, A2 | A3>
  <E, A, R1, E1, A1, R2, E2, A2, R3, E3, A3>(
    that: Effect<R1, E1, A1>,
    selfWins: (winner: Fiber.RuntimeFiber<E, A>, loser: Fiber.RuntimeFiber<E1, A1>) => Effect<R2, E2, A2>,
    thatWins: (winner: Fiber.RuntimeFiber<E1, A1>, loser: Fiber.RuntimeFiber<E, A>) => Effect<R3, E3, A3>
  ): <R>(self: Effect<R, E, A>) => Effect<R1 | R2 | R3 | R, E2 | E3, A2 | A3>
}
```

Added in v1.0.0

## raceFirst

Returns an effect that races this effect with the specified effect,
yielding the first result to complete, whether by success or failure. If
neither effect completes, then the composed effect will not complete.

WARNING: The raced effect will safely interrupt the "loser", but will not
resume until the loser has been cleanly terminated. If early return is
desired, then instead of performing `l raceFirst r`, perform
`l.disconnect raceFirst r.disconnect`, which disconnects left and right
interrupt signal, allowing a fast return, with interruption performed
in the background.

**Signature**

```ts
export declare const raceFirst: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>): Effect<R | R2, E | E2, A | A2>
  <R2, E2, A2>(that: Effect<R2, E2, A2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, A2 | A>
}
```

Added in v1.0.0

## raceWith

Returns an effect that races this effect with the specified effect, calling
the specified finisher as soon as one result or the other has been computed.

**Signature**

```ts
export declare const raceWith: {
  <R, E, A, R1, E1, A1, R2, E2, A2, R3, E3, A3>(
    self: Effect<R, E, A>,
    that: Effect<R1, E1, A1>,
    leftDone: (exit: Exit.Exit<E, A>, fiber: Fiber.Fiber<E1, A1>) => Effect<R2, E2, A2>,
    rightDone: (exit: Exit.Exit<E1, A1>, fiber: Fiber.Fiber<E, A>) => Effect<R3, E3, A3>
  ): Effect<R | R1 | R2 | R3, E2 | E3, A2 | A3>
  <E, A, R1, E1, A1, R2, E2, A2, R3, E3, A3>(
    that: Effect<R1, E1, A1>,
    leftDone: (exit: Exit.Exit<E, A>, fiber: Fiber.Fiber<E1, A1>) => Effect<R2, E2, A2>,
    rightDone: (exit: Exit.Exit<E1, A1>, fiber: Fiber.Fiber<E, A>) => Effect<R3, E3, A3>
  ): <R>(self: Effect<R, E, A>) => Effect<R1 | R2 | R3 | R, E2 | E3, A2 | A3>
}
```

Added in v1.0.0

## refineOrDie

Keeps some of the errors, and terminates the fiber with the rest

**Signature**

```ts
export declare const refineOrDie: {
  <R, E, A, E1>(self: Effect<R, E, A>, pf: (e: E) => Option.Option<E1>): Effect<R, E1, A>
  <E, E1>(pf: (e: E) => Option.Option<E1>): <R, A>(self: Effect<R, E, A>) => Effect<R, E1, A>
}
```

Added in v1.0.0

## refineOrDieWith

Keeps some of the errors, and terminates the fiber with the rest, using
the specified function to convert the `E` into a defect.

**Signature**

```ts
export declare const refineOrDieWith: {
  <R, E, A, E1>(self: Effect<R, E, A>, pf: (e: E) => Option.Option<E1>, f: (e: E) => unknown): Effect<R, E1, A>
  <E, E1>(pf: (e: E) => Option.Option<E1>, f: (e: E) => unknown): <R, A>(self: Effect<R, E, A>) => Effect<R, E1, A>
}
```

Added in v1.0.0

## reject

Fail with the returned value if the `PartialFunction` matches, otherwise
continue with our held value.

**Signature**

```ts
export declare const reject: {
  <R, E, A, E1>(self: Effect<R, E, A>, pf: (a: A) => Option.Option<E1>): Effect<R, E | E1, A>
  <A, E1>(pf: (a: A) => Option.Option<E1>): <R, E>(self: Effect<R, E, A>) => Effect<R, E1 | E, A>
}
```

Added in v1.0.0

## rejectEffect

Continue with the returned computation if the `PartialFunction` matches,
translating the successful match into a failure, otherwise continue with
our held value.

**Signature**

```ts
export declare const rejectEffect: {
  <R, E, A, R1, E1>(self: Effect<R, E, A>, pf: (a: A) => Option.Option<Effect<R1, E1, E1>>): Effect<R | R1, E | E1, A>
  <A, R1, E1>(pf: (a: A) => Option.Option<Effect<R1, E1, E1>>): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R1 | R, E1 | E, A>
}
```

Added in v1.0.0

## repeat

Returns a new effect that repeats this effect according to the specified
schedule or until the first failure. Scheduled recurrences are in addition
to the first execution, so that `io.repeat(Schedule.once)` yields an effect
that executes `io`, and then if that succeeds, executes `io` an additional
time.

**Signature**

```ts
export declare const repeat: {
  <R, E, A, R1, B>(self: Effect<R, E, A>, schedule: Schedule.Schedule<R1, A, B>): Effect<R | R1, E, B>
  <R1, A, B>(schedule: Schedule.Schedule<R1, A, B>): <R, E>(self: Effect<R, E, A>) => Effect<R1 | R, E, B>
}
```

Added in v1.0.0

## repeatN

Returns a new effect that repeats this effect the specified number of times
or until the first failure. Repeats are in addition to the first execution,
so that `io.repeatN(1)` yields an effect that executes `io`, and then if
that succeeds, executes `io` an additional time.

**Signature**

```ts
export declare const repeatN: {
  <R, E, A>(self: Effect<R, E, A>, n: number): Effect<R, E, A>
  (n: number): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## repeatOrElse

Returns a new effect that repeats this effect according to the specified
schedule or until the first failure, at which point, the failure value and
schedule output are passed to the specified handler.

Scheduled recurrences are in addition to the first execution, so that
`pipe(effect, Effect.repeat(Schedule.once()))` yields an effect that executes
`effect`, and then if that succeeds, executes `effect` an additional time.

**Signature**

```ts
export declare const repeatOrElse: {
  <R, E, A, R2, B, R3, E2>(
    self: Effect<R, E, A>,
    schedule: Schedule.Schedule<R2, A, B>,
    orElse: (error: E, option: Option.Option<B>) => Effect<R3, E2, B>
  ): Effect<R | R2 | R3, E2, B>
  <R2, A, B, E, R3, E2>(
    schedule: Schedule.Schedule<R2, A, B>,
    orElse: (error: E, option: Option.Option<B>) => Effect<R3, E2, B>
  ): <R>(self: Effect<R, E, A>) => Effect<R2 | R3 | R, E2, B>
}
```

Added in v1.0.0

## repeatOrElseEither

Returns a new effect that repeats this effect according to the specified
schedule or until the first failure, at which point, the failure value and
schedule output are passed to the specified handler.

Scheduled recurrences are in addition to the first execution, so that
`pipe(effect, Effect.repeat(Schedule.once()))` yields an effect that executes
`effect`, and then if that succeeds, executes `effect` an additional time.

**Signature**

```ts
export declare const repeatOrElseEither: {
  <R, E, A, R2, B, R3, E2, C>(
    self: Effect<R, E, A>,
    schedule: Schedule.Schedule<R2, A, B>,
    orElse: (error: E, option: Option.Option<B>) => Effect<R3, E2, C>
  ): Effect<R | R2 | R3, E2, Either.Either<C, B>>
  <R2, A, B, E, R3, E2, C>(
    schedule: Schedule.Schedule<R2, A, B>,
    orElse: (error: E, option: Option.Option<B>) => Effect<R3, E2, C>
  ): <R>(self: Effect<R, E, A>) => Effect<R2 | R3 | R, E2, Either.Either<C, B>>
}
```

Added in v1.0.0

## repeatUntil

Repeats this effect until its value satisfies the specified predicate or
until the first failure.

**Signature**

```ts
export declare const repeatUntil: {
  <R, E, A>(self: Effect<R, E, A>, f: Predicate<A>): Effect<R, E, A>
  <A>(f: Predicate<A>): <R, E>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## repeatUntilEffect

Repeats this effect until its value satisfies the specified effectful
predicate or until the first failure.

**Signature**

```ts
export declare const repeatUntilEffect: {
  <R, E, A, R2>(self: Effect<R, E, A>, f: (a: A) => Effect<R2, never, boolean>): Effect<R | R2, E, A>
  <A, R2>(f: (a: A) => Effect<R2, never, boolean>): <R, E>(self: Effect<R, E, A>) => Effect<R2 | R, E, A>
}
```

Added in v1.0.0

## repeatUntilEquals

Repeats this effect until its value is equal to the specified value or
until the first failure.

**Signature**

```ts
export declare const repeatUntilEquals: {
  <R, E, A>(self: Effect<R, E, A>, value: A): Effect<R, E, A>
  <A>(value: A): <R, E>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## repeatWhile

Repeats this effect while its value satisfies the specified effectful
predicate or until the first failure.

**Signature**

```ts
export declare const repeatWhile: {
  <R, E, A>(self: Effect<R, E, A>, f: Predicate<A>): Effect<R, E, A>
  <A>(f: Predicate<A>): <R, E>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## repeatWhileEffect

Repeats this effect while its value satisfies the specified effectful
predicate or until the first failure.

**Signature**

```ts
export declare const repeatWhileEffect: {
  <R, E, R1, A>(self: Effect<R, E, A>, f: (a: A) => Effect<R1, never, boolean>): Effect<R | R1, E, A>
  <R1, A>(f: (a: A) => Effect<R1, never, boolean>): <R, E>(self: Effect<R, E, A>) => Effect<R1 | R, E, A>
}
```

Added in v1.0.0

## repeatWhileEquals

Repeats this effect for as long as its value is equal to the specified
value or until the first failure.

**Signature**

```ts
export declare const repeatWhileEquals: {
  <R, E, A>(self: Effect<R, E, A>, value: A): Effect<R, E, A>
  <A>(value: A): <R, E>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## replicate

Replicates the given effect `n` times.

**Signature**

```ts
export declare const replicate: (n: number) => <R, E, A>(self: Effect<R, E, A>) => Chunk.Chunk<Effect<R, E, A>>
```

Added in v1.0.0

## replicateEffect

Performs this effect the specified number of times and collects the
results.

**Signature**

```ts
export declare const replicateEffect: {
  <R, E, A>(self: Effect<R, E, A>, n: number): Effect<R, E, Chunk.Chunk<A>>
  (n: number): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, Chunk.Chunk<A>>
}
```

Added in v1.0.0

## replicateEffectDiscard

Performs this effect the specified number of times, discarding the
results.

**Signature**

```ts
export declare const replicateEffectDiscard: {
  <R, E, A>(self: Effect<R, E, A>, n: number): Effect<R, E, void>
  (n: number): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, void>
}
```

Added in v1.0.0

## resurrect

Unearth the unchecked failure of the effect (opposite of `orDie`).

**Signature**

```ts
export declare const resurrect: <R, E, A>(self: Effect<R, E, A>) => Effect<R, unknown, A>
```

Added in v1.0.0

## retry

Retries with the specified retry policy. Retries are done following the
failure of the original `io` (up to a fixed maximum with `once` or `recurs`
for example), so that that `io.retry(Schedule.once)` means "execute `io`
and in case of failure, try again once".

**Signature**

```ts
export declare const retry: {
  <R, E, A, R1, B>(self: Effect<R, E, A>, policy: Schedule.Schedule<R1, E, B>): Effect<R | R1, E, A>
  <R1, E, B>(policy: Schedule.Schedule<R1, E, B>): <R, A>(self: Effect<R, E, A>) => Effect<R1 | R, E, A>
}
```

Added in v1.0.0

## retryN

Retries this effect the specified number of times.

**Signature**

```ts
export declare const retryN: {
  <R, E, A>(self: Effect<R, E, A>, n: number): Effect<R, E, A>
  (n: number): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## retryOrElse

Retries with the specified schedule, until it fails, and then both the
value produced by the schedule together with the last error are passed to
the recovery function.

**Signature**

```ts
export declare const retryOrElse: {
  <R, E extends E3, A, R1, A1, R2, E2, A2, E3>(
    self: Effect<R, E, A>,
    policy: Schedule.Schedule<R1, E3, A1>,
    orElse: (e: E, out: A1) => Effect<R2, E2, A2>
  ): Effect<R | R1 | R2, E | E2, A | A2>
  <R1, E extends E3, A1, R2, E2, A2, E3>(
    policy: Schedule.Schedule<R1, E3, A1>,
    orElse: (e: E, out: A1) => Effect<R2, E2, A2>
  ): <R, A>(self: Effect<R, E, A>) => Effect<R1 | R2 | R, E | E2, A2 | A>
}
```

Added in v1.0.0

## retryOrElseEither

Retries with the specified schedule, until it fails, and then both the
value produced by the schedule together with the last error are passed to
the recovery function.

**Signature**

```ts
export declare const retryOrElseEither: {
  <R, A, E extends E3, R1, A1, R2, E2, A2, E3>(
    self: Effect<R, E, A>,
    policy: Schedule.Schedule<R1, E3, A1>,
    orElse: (e: E, out: A1) => Effect<R2, E2, A2>
  ): Effect<R | R1 | R2, E | E2, Either.Either<A2, A>>
  <R1, E extends E3, A1, R2, E2, A2, E3>(
    policy: Schedule.Schedule<R1, E3, A1>,
    orElse: (e: E, out: A1) => Effect<R2, E2, A2>
  ): <R, A>(self: Effect<R, E, A>) => Effect<R1 | R2 | R, E | E2, Either.Either<A2, A>>
}
```

Added in v1.0.0

## retryUntil

Retries this effect until its error satisfies the specified predicate.

**Signature**

```ts
export declare const retryUntil: {
  <R, E, A>(self: Effect<R, E, A>, f: Predicate<E>): Effect<R, E, A>
  <E>(f: Predicate<E>): <R, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## retryUntilEffect

Retries this effect until its error satisfies the specified effectful
predicate.

**Signature**

```ts
export declare const retryUntilEffect: {
  <R, E, A, R1>(self: Effect<R, E, A>, f: (e: E) => Effect<R1, never, boolean>): Effect<R | R1, E, A>
  <R1, E>(f: (e: E) => Effect<R1, never, boolean>): <R, A>(self: Effect<R, E, A>) => Effect<R1 | R, E, A>
}
```

Added in v1.0.0

## retryUntilEquals

Retries this effect until its error is equal to the specified error.

**Signature**

```ts
export declare const retryUntilEquals: {
  <R, E, A>(self: Effect<R, E, A>, e: E): Effect<R, E, A>
  <E>(e: E): <R, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## retryWhile

Retries this effect while its error satisfies the specified predicate.

**Signature**

```ts
export declare const retryWhile: {
  <R, E, A>(self: Effect<R, E, A>, f: Predicate<E>): Effect<R, E, A>
  <E>(f: Predicate<E>): <R, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## retryWhileEffect

Retries this effect while its error satisfies the specified effectful
predicate.

**Signature**

```ts
export declare const retryWhileEffect: {
  <R, E, A, R1>(self: Effect<R, E, A>, f: (e: E) => Effect<R1, never, boolean>): Effect<R | R1, E, A>
  <R1, E>(f: (e: E) => Effect<R1, never, boolean>): <R, A>(self: Effect<R, E, A>) => Effect<R1 | R, E, A>
}
```

Added in v1.0.0

## retryWhileEquals

Retries this effect for as long as its error is equal to the specified
error.

**Signature**

```ts
export declare const retryWhileEquals: {
  <R, E, A>(self: Effect<R, E, A>, e: E): Effect<R, E, A>
  <E>(e: E): <R, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## schedule

Runs this effect according to the specified schedule.

See `scheduleFrom` for a variant that allows the schedule's decision to
depend on the result of this effect.

**Signature**

```ts
export declare const schedule: {
  <R, E, A, R2, Out, I>(self: Effect<R, E, A>, schedule: Schedule.Schedule<R2, I, Out>): Effect<R | R2, E, Out>
  <R2, Out, I>(schedule: Schedule.Schedule<R2, I, Out>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E, Out>
}
```

Added in v1.0.0

## scheduleForked

Runs this effect according to the specified schedule in a new fiber
attached to the current scope.

**Signature**

```ts
export declare const scheduleForked: {
  <R, E, A, R2, Out>(self: Effect<R, E, A>, schedule: Schedule.Schedule<R2, unknown, Out>): Effect<
    Scope.Scope | R | R2,
    never,
    Fiber.RuntimeFiber<E, Out>
  >
  <R2, Out>(schedule: Schedule.Schedule<R2, unknown, Out>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<Scope.Scope | R2 | R, never, Fiber.RuntimeFiber<E, Out>>
}
```

Added in v1.0.0

## scheduleFrom

Runs this effect according to the specified schedule starting from the
specified input value.

**Signature**

```ts
export declare const scheduleFrom: {
  <R, E, In, R2, Out>(self: Effect<R, E, In>, initial: In, schedule: Schedule.Schedule<R2, In, Out>): Effect<
    R | R2,
    E,
    Out
  >
  <R2, In, Out>(initial: In, schedule: Schedule.Schedule<R2, In, Out>): <R, E>(
    self: Effect<R, E, In>
  ) => Effect<R2 | R, E, Out>
}
```

Added in v1.0.0

## sequentialFinalizers

Returns a new scoped workflow that runs finalizers added to the scope of
this workflow sequentially in the reverse of the order in which they were
added. Note that finalizers are run sequentially by default so this only
has meaning if used within a scope where finalizers are being run in
parallel.

**Signature**

```ts
export declare const sequentialFinalizers: <R, E, A>(self: Effect<R, E, A>) => Effect<Scope.Scope | R, E, A>
```

Added in v1.0.0

## setConfigProvider

Sets the current `ConfigProvider`.

**Signature**

```ts
export declare const setConfigProvider: (configProvider: ConfigProvider) => Layer.Layer<never, never, never>
```

Added in v1.0.0

## setFiberRefs

Sets the `FiberRef` values for the fiber running this effect to the values
in the specified collection of `FiberRef` values.

**Signature**

```ts
export declare const setFiberRefs: (fiberRefs: FiberRefs.FiberRefs) => Effect<never, never, void>
```

Added in v1.0.0

## some

Converts an option on values into an option on errors.

**Signature**

```ts
export declare const some: <R, E, A>(self: Effect<R, E, Option.Option<A>>) => Effect<R, Option.Option<E>, A>
```

Added in v1.0.0

## someOrElse

Extracts the optional value, or returns the given 'orElse'.

**Signature**

```ts
export declare const someOrElse: {
  <R, E, A, B>(self: Effect<R, E, Option.Option<A>>, orElse: LazyArg<B>): Effect<R, E, A | B>
  <B>(orElse: LazyArg<B>): <R, E, A>(self: Effect<R, E, Option.Option<A>>) => Effect<R, E, B | A>
}
```

Added in v1.0.0

## someOrElseEffect

Extracts the optional value, or executes the given 'orElse' effect.

**Signature**

```ts
export declare const someOrElseEffect: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, Option.Option<A>>, orElse: LazyArg<Effect<R2, E2, A2>>): Effect<
    R | R2,
    E | E2,
    A | A2
  >
  <R2, E2, A2>(orElse: LazyArg<Effect<R2, E2, A2>>): <R, E, A>(
    self: Effect<R, E, Option.Option<A>>
  ) => Effect<R2 | R, E2 | E, A2 | A>
}
```

Added in v1.0.0

## someOrFail

Extracts the optional value, or fails with the given error 'e'.

**Signature**

```ts
export declare const someOrFail: {
  <R, E, A, E2>(self: Effect<R, E, Option.Option<A>>, orFail: LazyArg<E2>): Effect<R, E | E2, A>
  <E2>(orFail: LazyArg<E2>): <R, E, A>(self: Effect<R, E, Option.Option<A>>) => Effect<R, E2 | E, A>
}
```

Added in v1.0.0

## someOrFailException

Extracts the optional value, or fails with a `NoSuchElementException`.

**Signature**

```ts
export declare const someOrFailException: <R, E, A>(
  self: Effect<R, E, Option.Option<A>>
) => Effect<R, Cause.NoSuchElementException | E, A>
```

Added in v1.0.0

## someWith

Perfoms the specified operation while "zoomed in" on the `Some` case of an
`Option`.

**Signature**

```ts
export declare const someWith: {
  <R, E, A, R1, E1, A1>(
    self: Effect<R, E, Option.Option<A>>,
    f: (effect: Effect<R, Option.Option<E>, A>) => Effect<R1, Option.Option<E1>, A1>
  ): Effect<R | R1, E | E1, Option.Option<A1>>
  <R, E, A, R1, E1, A1>(f: (effect: Effect<R, Option.Option<E>, A>) => Effect<R1, Option.Option<E1>, A1>): (
    self: Effect<R, E, Option.Option<A>>
  ) => Effect<R | R1, E | E1, Option.Option<A1>>
}
```

Added in v1.0.0

## summarized

Summarizes a effect by computing some value before and after execution, and
then combining the values to produce a summary, together with the result of
execution.

**Signature**

```ts
export declare const summarized: {
  <R, E, A, R2, E2, B, C>(self: Effect<R, E, A>, summary: Effect<R2, E2, B>, f: (start: B, end: B) => C): Effect<
    R | R2,
    E | E2,
    readonly [C, A]
  >
  <R2, E2, B, C>(summary: Effect<R2, E2, B>, f: (start: B, end: B) => C): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, readonly [C, A]>
}
```

Added in v1.0.0

## supervised

Returns an effect with the behavior of this one, but where all child fibers
forked in the effect are reported to the specified supervisor.

**Signature**

```ts
export declare const supervised: {
  <R, E, A, X>(self: Effect<R, E, A>, supervisor: Supervisor.Supervisor<X>): Effect<R, E, A>
  <X>(supervisor: Supervisor.Supervisor<X>): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## tagged

Tags each metric in this effect with the specific tag.

**Signature**

```ts
export declare const tagged: {
  <R, E, A>(self: Effect<R, E, A>, key: string, value: string): Effect<R, E, A>
  (key: string, value: string): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## taggedWithLabelSet

Tags each metric in this effect with the specific tag.

**Signature**

```ts
export declare const taggedWithLabelSet: {
  <R, E, A>(self: Effect<R, E, A>, labels: HashSet.HashSet<MetricLabel.MetricLabel>): Effect<R, E, A>
  (labels: HashSet.HashSet<MetricLabel.MetricLabel>): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## taggedWithLabels

Tags each metric in this effect with the specific tag.

**Signature**

```ts
export declare const taggedWithLabels: {
  <R, E, A>(self: Effect<R, E, A>, labels: Iterable<MetricLabel.MetricLabel>): Effect<R, E, A>
  (labels: Iterable<MetricLabel.MetricLabel>): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## timed

Returns a new effect that executes this one and times the execution.

**Signature**

```ts
export declare const timed: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, readonly [Duration.Duration, A]>
```

Added in v1.0.0

## timedWith

A more powerful variation of `timed` that allows specifying the clock.

**Signature**

```ts
export declare const timedWith: {
  <R, E, A, R1, E1>(self: Effect<R, E, A>, milliseconds: Effect<R1, E1, number>): Effect<
    R | R1,
    E | E1,
    readonly [Duration.Duration, A]
  >
  <R1, E1>(milliseconds: Effect<R1, E1, number>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R1 | R, E1 | E, readonly [Duration.Duration, A]>
}
```

Added in v1.0.0

## timeout

Returns an effect that will timeout this effect, returning `None` if the
timeout elapses before the effect has produced a value; and returning
`Some` of the produced value otherwise.

If the timeout elapses without producing a value, the running effect will
be safely interrupted.

WARNING: The effect returned by this method will not itself return until
the underlying effect is actually interrupted. This leads to more
predictable resource utilization. If early return is desired, then instead
of using `effect.timeout(d)`, use `effect.disconnect.timeout(d)`, which
first disconnects the effect's interruption signal before performing the
timeout, resulting in earliest possible return, before an underlying effect
has been successfully interrupted.

**Signature**

```ts
export declare const timeout: {
  <R, E, A>(self: Effect<R, E, A>, duration: Duration.Duration): Effect<R, E, Option.Option<A>>
  (duration: Duration.Duration): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, Option.Option<A>>
}
```

Added in v1.0.0

## timeoutFail

The same as `timeout`, but instead of producing a `None` in the event of
timeout, it will produce the specified error.

**Signature**

```ts
export declare const timeoutFail: {
  <R, E, A, E1>(self: Effect<R, E, A>, evaluate: LazyArg<E1>, duration: Duration.Duration): Effect<R, E | E1, A>
  <E1>(evaluate: LazyArg<E1>, duration: Duration.Duration): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E1 | E, A>
}
```

Added in v1.0.0

## timeoutFailCause

The same as `timeout`, but instead of producing a `None` in the event of
timeout, it will produce the specified failure.

**Signature**

```ts
export declare const timeoutFailCause: {
  <R, E, A, E1>(self: Effect<R, E, A>, evaluate: LazyArg<Cause.Cause<E1>>, duration: Duration.Duration): Effect<
    R,
    E | E1,
    A
  >
  <E1>(evaluate: LazyArg<Cause.Cause<E1>>, duration: Duration.Duration): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R, E1 | E, A>
}
```

Added in v1.0.0

## timeoutTo

Returns an effect that will timeout this effect, returning either the
default value if the timeout elapses before the effect has produced a
value or returning the result of applying the function `f` to the
success value of the effect.

If the timeout elapses without producing a value, the running effect will
be safely interrupted.

**Signature**

```ts
export declare const timeoutTo: {
  <R, E, A, B, B1>(self: Effect<R, E, A>, def: B1, f: (a: A) => B, duration: Duration.Duration): Effect<R, E, B | B1>
  <A, B, B1>(def: B1, f: (a: A) => B, duration: Duration.Duration): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R, E, B | B1>
}
```

Added in v1.0.0

## transplant

Transplants specified effects so that when those effects fork other
effects, the forked effects will be governed by the scope of the fiber that
executes this effect.

This can be used to "graft" deep grandchildren onto a higher-level scope,
effectively extending their lifespans into the parent scope.

**Signature**

```ts
export declare const transplant: <R, E, A>(
  f: (grafter: <R2, E2, A2>(effect: Effect<R2, E2, A2>) => Effect<R2, E2, A2>) => Effect<R, E, A>
) => Effect<R, E, A>
```

Added in v1.0.0

## uncause

When this effect succeeds with a cause, then this method returns a new
effect that either fails with the cause that this effect succeeded with, or
succeeds with unit, depending on whether the cause is empty.

This operation is the opposite of `cause`.

**Signature**

```ts
export declare const uncause: <R, E>(self: Effect<R, never, Cause.Cause<E>>) => Effect<R, E, void>
```

Added in v1.0.0

## unless

The moral equivalent of `if (!p) exp`.

**Signature**

```ts
export declare const unless: {
  <R, E, A>(self: Effect<R, E, A>, predicate: LazyArg<boolean>): Effect<R, E, Option.Option<A>>
  (predicate: LazyArg<boolean>): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, Option.Option<A>>
}
```

Added in v1.0.0

## unlessEffect

The moral equivalent of `if (!p) exp` when `p` has side-effects.

**Signature**

```ts
export declare const unlessEffect: {
  <R, E, A, R2, E2>(self: Effect<R, E, A>, predicate: Effect<R2, E2, boolean>): Effect<R | R2, E | E2, Option.Option<A>>
  <R2, E2>(predicate: Effect<R2, E2, boolean>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, Option.Option<A>>
}
```

Added in v1.0.0

## unrefine

Takes some fiber failures and converts them into errors.

**Signature**

```ts
export declare const unrefine: {
  <R, E, A, E1>(self: Effect<R, E, A>, pf: (u: unknown) => Option.Option<E1>): Effect<R, E | E1, A>
  <E1>(pf: (u: unknown) => Option.Option<E1>): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E1 | E, A>
}
```

Added in v1.0.0

## unright

Converts a `Effect<R, Either<B, E>, A>` into a `Effect<R, E, Either<B, A>>`.
The inverse of `right`.

**Signature**

```ts
export declare const unright: <R, B, E, A>(self: Effect<R, Either.Either<B, E>, A>) => Effect<R, E, Either.Either<B, A>>
```

Added in v1.0.0

## unsandbox

The inverse operation `sandbox(effect)`

Terminates with exceptions on the `Left` side of the `Either` error, if it
exists. Otherwise extracts the contained `Effect< R, E, A>`

**Signature**

```ts
export declare const unsandbox: <R, E, A>(self: Effect<R, Cause.Cause<E>, A>) => Effect<R, E, A>
```

Added in v1.0.0

## unsome

Converts an option on errors into an option on values.

**Signature**

```ts
export declare const unsome: <R, E, A>(self: Effect<R, Option.Option<E>, A>) => Effect<R, E, Option.Option<A>>
```

Added in v1.0.0

## using

Scopes all resources acquired by `resource` to the lifetime of `use`
without effecting the scope of any resources acquired by `use`.

**Signature**

```ts
export declare const using: {
  <R, E, A, R2, E2, A2>(self: Effect<Scope.Scope | R, E, A>, use: (a: A) => Effect<R2, E2, A2>): Effect<
    R | R2,
    E | E2,
    A2
  >
  <A, R2, E2, A2>(use: (a: A) => Effect<R2, E2, A2>): <R, E>(
    self: Effect<Scope.Scope | R, E, A>
  ) => Effect<R2 | R, E2 | E, A2>
}
```

Added in v1.0.0

## validate

Sequentially zips the this result with the specified result. Combines both
`Cause`s when both effects fail.

**Signature**

```ts
export declare const validate: {
  <R, E, A, R2, E2, B>(self: Effect<R, E, A>, that: Effect<R2, E2, B>): Effect<R | R2, E | E2, readonly [A, B]>
  <R2, E2, B>(that: Effect<R2, E2, B>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, readonly [A, B]>
}
```

Added in v1.0.0

## validateAll

Feeds elements of type `A` to `f` and accumulates all errors in error
channel or successes in success channel.

This combinator is lossy meaning that if there are errors all successes
will be lost. To retain all information please use `partition`.

**Signature**

```ts
export declare const validateAll: {
  <R, E, A, B>(elements: Iterable<A>, f: (a: A) => Effect<R, E, B>): Effect<R, Chunk.Chunk<E>, Chunk.Chunk<B>>
  <R, E, A, B>(f: (a: A) => Effect<R, E, B>): (elements: Iterable<A>) => Effect<R, Chunk.Chunk<E>, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## validateAllDiscard

Feeds elements of type `A` to `f` and accumulates all errors, discarding
the successes.

**Signature**

```ts
export declare const validateAllDiscard: {
  <R, E, A, X>(elements: Iterable<A>, f: (a: A) => Effect<R, E, X>): Effect<R, Chunk.Chunk<E>, void>
  <R, E, A, X>(f: (a: A) => Effect<R, E, X>): (elements: Iterable<A>) => Effect<R, Chunk.Chunk<E>, void>
}
```

Added in v1.0.0

## validateAllPar

Feeds elements of type `A` to `f `and accumulates, in parallel, all errors
in error channel or successes in success channel.

This combinator is lossy meaning that if there are errors all successes
will be lost. To retain all information please use [[partitionPar]].

**Signature**

```ts
export declare const validateAllPar: {
  <R, E, A, B>(elements: Iterable<A>, f: (a: A) => Effect<R, E, B>): Effect<R, Chunk.Chunk<E>, Chunk.Chunk<B>>
  <R, E, A, B>(f: (a: A) => Effect<R, E, B>): (elements: Iterable<A>) => Effect<R, Chunk.Chunk<E>, Chunk.Chunk<B>>
}
```

Added in v1.0.0

## validateAllParDiscard

Feeds elements of type `A` to `f` in parallel and accumulates all errors,
discarding the successes.

**Signature**

```ts
export declare const validateAllParDiscard: {
  <R, E, A, B>(elements: Iterable<A>, f: (a: A) => Effect<R, E, B>): Effect<R, Chunk.Chunk<E>, void>
  <R, E, A, B>(f: (a: A) => Effect<R, E, B>): (elements: Iterable<A>) => Effect<R, Chunk.Chunk<E>, void>
}
```

Added in v1.0.0

## validateFirst

Feeds elements of type `A` to `f` until it succeeds. Returns first success
or the accumulation of all errors.

**Signature**

```ts
export declare const validateFirst: {
  <R, E, A, B>(elements: Iterable<A>, f: (a: A) => Effect<R, E, B>): Effect<R, Chunk.Chunk<E>, B>
  <R, E, A, B>(f: (a: A) => Effect<R, E, B>): (elements: Iterable<A>) => Effect<R, Chunk.Chunk<E>, B>
}
```

Added in v1.0.0

## validateFirstPar

Feeds elements of type `A` to `f` until it succeeds. Returns first success
or the accumulation of all errors.

**Signature**

```ts
export declare const validateFirstPar: {
  <R, E, A, B>(elements: Iterable<A>, f: (a: A) => Effect<R, E, B>): Effect<R, Chunk.Chunk<E>, B>
  <R, E, A, B>(f: (a: A) => Effect<R, E, B>): (elements: Iterable<A>) => Effect<R, Chunk.Chunk<E>, B>
}
```

Added in v1.0.0

## validatePar

Returns an effect that executes both this effect and the specified effect,
in parallel. Combines both Cause<E1>` when both effects fail.

**Signature**

```ts
export declare const validatePar: {
  <R, E, A, R1, E1, B>(self: Effect<R, E, A>, that: Effect<R1, E1, B>): Effect<R | R1, E | E1, readonly [A, B]>
  <R1, E1, B>(that: Effect<R1, E1, B>): <R, E, A>(self: Effect<R, E, A>) => Effect<R1 | R, E1 | E, readonly [A, B]>
}
```

Added in v1.0.0

## validateWith

Sequentially zips this effect with the specified effect using the specified
combiner function. Combines the causes in case both effect fail.

**Signature**

```ts
export declare const validateWith: {
  <R, E, A, R2, E2, B, C>(self: Effect<R, E, A>, that: Effect<R2, E2, B>, f: (a: A, b: B) => C): Effect<
    R | R2,
    E | E2,
    C
  >
  <A, R2, E2, B, C>(that: Effect<R2, E2, B>, f: (a: A, b: B) => C): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, C>
}
```

Added in v1.0.0

## validateWithPar

Returns an effect that executes both this effect and the specified effect,
in parallel, combining their results with the specified `f` function. If
both sides fail, then the cause will be combined.

**Signature**

```ts
export declare const validateWithPar: {
  <R, E, A, R1, E1, B, C>(self: Effect<R, E, A>, that: Effect<R1, E1, B>, f: (a: A, b: B) => C): Effect<
    R | R1,
    E | E1,
    C
  >
  <A, R1, E1, B, C>(that: Effect<R1, E1, B>, f: (a: A, b: B) => C): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R1 | R, E1 | E, C>
}
```

Added in v1.0.0

## when

The moral equivalent of `if (p) exp`.

**Signature**

```ts
export declare const when: {
  <R, E, A>(self: Effect<R, E, A>, predicate: LazyArg<boolean>): Effect<R, E, Option.Option<A>>
  (predicate: LazyArg<boolean>): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, Option.Option<A>>
}
```

Added in v1.0.0

## whenCase

Runs an effect when the supplied partial function matches for the given
value, otherwise does nothing.

**Signature**

```ts
export declare const whenCase: <R, E, A, B>(
  evaluate: LazyArg<A>,
  pf: (a: A) => Option.Option<Effect<R, E, B>>
) => Effect<R, E, Option.Option<B>>
```

Added in v1.0.0

## whenCaseEffect

Runs an effect when the supplied partial function matches for the given
value, otherwise does nothing.

**Signature**

```ts
export declare const whenCaseEffect: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, pf: (a: A) => Option.Option<Effect<R2, E2, A2>>): Effect<
    R | R2,
    E | E2,
    Option.Option<A2>
  >
  <A, R2, E2, A2>(pf: (a: A) => Option.Option<Effect<R2, E2, A2>>): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, Option.Option<A2>>
}
```

Added in v1.0.0

## whenFiberRef

Executes this workflow when value of the specified `FiberRef` satisfies the
predicate.

**Signature**

```ts
export declare const whenFiberRef: {
  <R, E, A, S>(self: Effect<R, E, A>, fiberRef: FiberRef.FiberRef<S>, predicate: Predicate<S>): Effect<
    R,
    E,
    readonly [S, Option.Option<A>]
  >
  <S>(fiberRef: FiberRef.FiberRef<S>, predicate: Predicate<S>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R, E, readonly [S, Option.Option<A>]>
}
```

Added in v1.0.0

## whenRef

Executes this workflow when the value of the `Ref` satisfies the predicate.

**Signature**

```ts
export declare const whenRef: {
  <R, E, A, S>(self: Effect<R, E, A>, ref: Ref.Ref<S>, predicate: Predicate<S>): Effect<
    R,
    E,
    readonly [S, Option.Option<A>]
  >
  <S>(ref: Ref.Ref<S>, predicate: Predicate<S>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R, E, readonly [S, Option.Option<A>]>
}
```

Added in v1.0.0

## withClock

Executes the specified workflow with the specified implementation of the
clock service.

**Signature**

```ts
export declare const withClock: {
  <R, E, A extends Clock.Clock>(effect: Effect<R, E, A>, value: A): Effect<R, E, A>
  <A extends Clock.Clock>(value: A): <R, E, A>(effect: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## withEarlyRelease

Returns a new scoped workflow that returns the result of this workflow as
well as a finalizer that can be run to close the scope of this workflow.

**Signature**

```ts
export declare const withEarlyRelease: <R, E, A>(
  self: Effect<R, E, A>
) => Effect<Scope.Scope | R, E, readonly [Effect<never, never, void>, A]>
```

Added in v1.0.0

## withMetric

**Signature**

```ts
export declare const withMetric: {
  <R, E, A extends In, Type, In, Out>(self: Effect<R, E, A>, metric: Metric.Metric<Type, In, Out>): Effect<R, E, A>
  <Type, In, Out>(metric: Metric.Metric<Type, In, Out>): <R, E, A extends In>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

# products

## zip

**Signature**

```ts
export declare const zip: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>): Effect<R | R2, E | E2, readonly [A, A2]>
  <R2, E2, A2>(that: Effect<R2, E2, A2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, readonly [A, A2]>
}
```

Added in v1.0.0

## zipLeft

**Signature**

```ts
export declare const zipLeft: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>): Effect<R | R2, E | E2, A>
  <R2, E2, A2>(that: Effect<R2, E2, A2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, A>
}
```

Added in v1.0.0

## zipRight

**Signature**

```ts
export declare const zipRight: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>): Effect<R | R2, E | E2, A2>
  <R2, E2, A2>(that: Effect<R2, E2, A2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, A2>
}
```

Added in v1.0.0

## zipWith

**Signature**

```ts
export declare const zipWith: {
  <R, E, R2, E2, A2, A, B>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>, f: (a: A, b: A2) => B): Effect<
    R | R2,
    E | E2,
    B
  >
  <R2, E2, A2, A, B>(that: Effect<R2, E2, A2>, f: (a: A, b: A2) => B): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, B>
}
```

Added in v1.0.0

# refinements

## isEffect

This function returns `true` if the specified value is an `Effect` value,
`false` otherwise.

This function can be useful for checking the type of a value before
attempting to operate on it as an `Effect` value. For example, you could
use `isEffect` to check the type of a value before using it as an
argument to a function that expects an `Effect` value.

**Signature**

```ts
export declare const isEffect: (u: unknown) => u is Effect<unknown, unknown, unknown>
```

Added in v1.0.0

# runtime

## updateRuntimeFlags

**Signature**

```ts
export declare const updateRuntimeFlags: (patch: RuntimeFlagsPatch.RuntimeFlagsPatch) => Effect<never, never, void>
```

Added in v1.0.0

## withRuntimeFlags

**Signature**

```ts
export declare const withRuntimeFlags: {
  <R, E, A>(self: Effect<R, E, A>, update: RuntimeFlagsPatch.RuntimeFlagsPatch): Effect<R, E, A>
  (update: RuntimeFlagsPatch.RuntimeFlagsPatch): <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
}
```

Added in v1.0.0

## withRuntimeFlagsScoped

**Signature**

```ts
export declare const withRuntimeFlagsScoped: (
  update: RuntimeFlagsPatch.RuntimeFlagsPatch
) => Effect<Scope.Scope, never, void>
```

Added in v1.0.0

# scoping

## scopeWith

Accesses the current scope and uses it to perform the specified effect.

**Signature**

```ts
export declare const scopeWith: <R, E, A>(f: (scope: Scope.Scope) => Effect<R, E, A>) => Effect<Scope.Scope | R, E, A>
```

Added in v1.0.0

# sequencing

## flatMap

This function is a pipeable operator that maps over an `Effect` value,
flattening the result of the mapping function into a new `Effect` value.

**Signature**

```ts
export declare const flatMap: {
  <R, E, A, R1, E1, B>(self: Effect<R, E, A>, f: (a: A) => Effect<R1, E1, B>): Effect<R | R1, E | E1, B>
  <A, R1, E1, B>(f: (a: A) => Effect<R1, E1, B>): <R, E>(self: Effect<R, E, A>) => Effect<R1 | R, E1 | E, B>
}
```

Added in v1.0.0

## flatten

**Signature**

```ts
export declare const flatten: <R, E, R1, E1, A>(self: Effect<R, E, Effect<R1, E1, A>>) => Effect<R | R1, E | E1, A>
```

Added in v1.0.0

## flattenErrorOption

Unwraps the optional error, defaulting to the provided value.

**Signature**

```ts
export declare const flattenErrorOption: {
  <R, E, A, E1>(self: Effect<R, Option.Option<E>, A>, fallback: E1): Effect<R, E | E1, A>
  <E1>(fallback: E1): <R, E, A>(self: Effect<R, Option.Option<E>, A>) => Effect<R, E1 | E, A>
}
```

Added in v1.0.0

## tap

**Signature**

```ts
export declare const tap: {
  <R, E, A, R2, E2, _>(self: Effect<R, E, A>, f: (a: A) => Effect<R2, E2, _>): Effect<R | R2, E | E2, A>
  <A, R2, E2, _>(f: (a: A) => Effect<R2, E2, _>): <R, E>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, A>
}
```

Added in v1.0.0

## tapBoth

Returns an effect that effectfully "peeks" at the failure or success of
this effect.

**Signature**

```ts
export declare const tapBoth: {
  <R, E, A, R2, E2, X, R3, E3, X1>(
    self: Effect<R, E, A>,
    f: (e: E) => Effect<R2, E2, X>,
    g: (a: A) => Effect<R3, E3, X1>
  ): Effect<R | R2 | R3, E | E2 | E3, A>
  <E, A, R2, E2, X, R3, E3, X1>(f: (e: E) => Effect<R2, E2, X>, g: (a: A) => Effect<R3, E3, X1>): <R>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R3 | R, E | E2 | E3, A>
}
```

Added in v1.0.0

## tapDefect

Returns an effect that effectually "peeks" at the defect of this effect.

**Signature**

```ts
export declare const tapDefect: {
  <R, E, A, R2, E2, X>(self: Effect<R, E, A>, f: (cause: Cause.Cause<never>) => Effect<R2, E2, X>): Effect<
    R | R2,
    E | E2,
    A
  >
  <R2, E2, X>(f: (cause: Cause.Cause<never>) => Effect<R2, E2, X>): <R, E, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, A>
}
```

Added in v1.0.0

## tapEither

Returns an effect that effectfully "peeks" at the result of this effect.

**Signature**

```ts
export declare const tapEither: {
  <R, E, A, R2, E2, X>(self: Effect<R, E, A>, f: (either: Either.Either<E, A>) => Effect<R2, E2, X>): Effect<
    R | R2,
    E | E2,
    A
  >
  <E, A, R2, E2, X>(f: (either: Either.Either<E, A>) => Effect<R2, E2, X>): <R>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E | E2, A>
}
```

Added in v1.0.0

## tapError

Returns an effect that effectfully "peeks" at the failure of this effect.

**Signature**

```ts
export declare const tapError: {
  <R, E, A, R2, E2, X>(self: Effect<R, E, A>, f: (e: E) => Effect<R2, E2, X>): Effect<R | R2, E | E2, A>
  <E, R2, E2, X>(f: (e: E) => Effect<R2, E2, X>): <R, A>(self: Effect<R, E, A>) => Effect<R2 | R, E | E2, A>
}
```

Added in v1.0.0

## tapErrorCause

Returns an effect that effectually "peeks" at the cause of the failure of
this effect.

**Signature**

```ts
export declare const tapErrorCause: {
  <R, E, A, R2, E2, X>(self: Effect<R, E, A>, f: (cause: Cause.Cause<E>) => Effect<R2, E2, X>): Effect<
    R | R2,
    E | E2,
    A
  >
  <E, R2, E2, X>(f: (cause: Cause.Cause<E>) => Effect<R2, E2, X>): <R, A>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E | E2, A>
}
```

Added in v1.0.0

## tapSome

Returns an effect that effectfully "peeks" at the success of this effect.
If the partial function isn't defined at the input, the result is
equivalent to the original effect.

**Signature**

```ts
export declare const tapSome: {
  <R, E, A, R1, E1, X>(self: Effect<R, E, A>, pf: (a: A) => Option.Option<Effect<R1, E1, X>>): Effect<R | R1, E | E1, A>
  <A, R1, E1, X>(pf: (a: A) => Option.Option<Effect<R1, E1, X>>): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R1 | R, E1 | E, A>
}
```

Added in v1.0.0

# supervision

## daemonChildren

Returns a new workflow that will not supervise any fibers forked by this
workflow.

**Signature**

```ts
export declare const daemonChildren: <R, E, A>(self: Effect<R, E, A>) => Effect<R, E, A>
```

Added in v1.0.0

## fork

Returns an effect that forks this effect into its own separate fiber,
returning the fiber immediately, without waiting for it to begin executing
the effect.

You can use the `fork` method whenever you want to execute an effect in a
new fiber, concurrently and without "blocking" the fiber executing other
effects. Using fibers can be tricky, so instead of using this method
directly, consider other higher-level methods, such as `raceWith`,
`zipPar`, and so forth.

The fiber returned by this method has methods to interrupt the fiber and to
wait for it to finish executing the effect. See `Fiber` for more
information.

Whenever you use this method to launch a new fiber, the new fiber is
attached to the parent fiber's scope. This means when the parent fiber
terminates, the child fiber will be terminated as well, ensuring that no
fibers leak. This behavior is called "auto supervision", and if this
behavior is not desired, you may use the `forkDaemon` or `forkIn` methods.

**Signature**

```ts
export declare const fork: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, Fiber.RuntimeFiber<E, A>>
```

Added in v1.0.0

## forkAll

Returns an effect that forks all of the specified values, and returns a
composite fiber that produces a list of their results, in order.

**Signature**

```ts
export declare const forkAll: <R, E, A>(
  effects: Iterable<Effect<R, E, A>>
) => Effect<R, never, Fiber.Fiber<E, Chunk.Chunk<A>>>
```

Added in v1.0.0

## forkAllDiscard

Returns an effect that forks all of the specified values, and returns a
composite fiber that produces unit. This version is faster than `forkAll`
in cases where the results of the forked fibers are not needed.

**Signature**

```ts
export declare const forkAllDiscard: <R, E, A>(effects: Iterable<Effect<R, E, A>>) => Effect<R, never, void>
```

Added in v1.0.0

## forkDaemon

Forks the effect into a new fiber attached to the global scope. Because the
new fiber is attached to the global scope, when the fiber executing the
returned effect terminates, the forked fiber will continue running.

**Signature**

```ts
export declare const forkDaemon: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, Fiber.RuntimeFiber<E, A>>
```

Added in v1.0.0

## forkIn

Forks the effect in the specified scope. The fiber will be interrupted
when the scope is closed.

**Signature**

```ts
export declare const forkIn: {
  <R, E, A>(self: Effect<R, E, A>, scope: Scope.Scope): Effect<R, never, Fiber.RuntimeFiber<E, A>>
  (scope: Scope.Scope): <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, Fiber.RuntimeFiber<E, A>>
}
```

Added in v1.0.0

## forkScoped

Forks the fiber in a `Scope`, interrupting it when the scope is closed.

**Signature**

```ts
export declare const forkScoped: <R, E, A>(
  self: Effect<R, E, A>
) => Effect<Scope.Scope | R, never, Fiber.RuntimeFiber<E, A>>
```

Added in v1.0.0

## forkWithErrorHandler

Like fork but handles an error with the provided handler.

**Signature**

```ts
export declare const forkWithErrorHandler: {
  <R, E, A, X>(self: Effect<R, E, A>, handler: (e: E) => Effect<never, never, X>): Effect<
    R,
    never,
    Fiber.RuntimeFiber<E, A>
  >
  <E, X>(handler: (e: E) => Effect<never, never, X>): <R, A>(
    self: Effect<R, E, A>
  ) => Effect<R, never, Fiber.RuntimeFiber<E, A>>
}
```

Added in v1.0.0

# symbols

## EffectTypeId

**Signature**

```ts
export declare const EffectTypeId: typeof EffectTypeId
```

Added in v1.0.0

## EffectTypeId (type alias)

**Signature**

```ts
export type EffectTypeId = typeof EffectTypeId
```

Added in v1.0.0

# traversing

## forEachWithIndex

Same as `forEach`, except that the function `f` is supplied
a second argument that corresponds to the index (starting from 0)
of the current element being iterated over.

**Signature**

```ts
export declare const forEachWithIndex: {
  <A, R, E, B>(elements: Iterable<A>, f: (a: A, i: number) => Effect<R, E, B>): Effect<R, E, Chunk.Chunk<B>>
  <A, R, E, B>(f: (a: A, i: number) => Effect<R, E, B>): (elements: Iterable<A>) => Effect<R, E, Chunk.Chunk<B>>
}
```

Added in v1.0.0

# utilities

## exit

**Signature**

```ts
export declare const exit: <R, E, A>(self: Effect<R, E, A>) => Effect<R, never, Exit.Exit<E, A>>
```

Added in v1.0.0

## fiberId

**Signature**

```ts
export declare const fiberId: (_: void) => Effect<never, never, FiberId.FiberId>
```

Added in v1.0.0

## intoDeferred

**Signature**

```ts
export declare const intoDeferred: {
  <R, E, A>(self: Effect<R, E, A>, deferred: Deferred.Deferred<E, A>): Effect<R, never, boolean>
  <E, A>(deferred: Deferred.Deferred<E, A>): <R>(self: Effect<R, E, A>) => Effect<R, never, boolean>
}
```

Added in v1.0.0

## unified

Used to unify functions that would otherwise return `Effect<A, B, C> | Effect<D, E, F>`

**Signature**

```ts
export declare const unified: <Args extends readonly any[], Ret extends Effect<any, any, any>>(
  f: (...args: Args) => Ret
) => (...args: Args) => Effect.Unify<Ret>
```

Added in v1.0.0

# zipping

## zipPar

Zips this effect and that effect in parallel.

**Signature**

```ts
export declare const zipPar: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>): Effect<R | R2, E | E2, readonly [A, A2]>
  <R2, E2, A2>(that: Effect<R2, E2, A2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, readonly [A, A2]>
}
```

Added in v1.0.0

## zipParLeft

Returns an effect that executes both this effect and the specified effect,
in parallel, returning result of that effect. If either side fails,
then the other side will be interrupted.

**Signature**

```ts
export declare const zipParLeft: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>): Effect<R | R2, E | E2, A>
  <R2, E2, A2>(that: Effect<R2, E2, A2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, A>
}
```

Added in v1.0.0

## zipParRight

Returns an effect that executes both this effect and the specified effect,
in parallel, returning result of the provided effect. If either side fails,
then the other side will be interrupted.

**Signature**

```ts
export declare const zipParRight: {
  <R, E, A, R2, E2, A2>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>): Effect<R | R2, E | E2, A2>
  <R2, E2, A2>(that: Effect<R2, E2, A2>): <R, E, A>(self: Effect<R, E, A>) => Effect<R2 | R, E2 | E, A2>
}
```

Added in v1.0.0

## zipWithPar

Sequentially zips this effect with the specified effect using the
specified combiner function.

**Signature**

```ts
export declare const zipWithPar: {
  <R, E, A, R2, E2, A2, B>(self: Effect<R, E, A>, that: Effect<R2, E2, A2>, f: (a: A, b: A2) => B): Effect<
    R | R2,
    E | E2,
    B
  >
  <R2, E2, A2, A, B>(that: Effect<R2, E2, A2>, f: (a: A, b: A2) => B): <R, E>(
    self: Effect<R, E, A>
  ) => Effect<R2 | R, E2 | E, B>
}
```

Added in v1.0.0
