
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model SettlementHistory
 * 
 */
export type SettlementHistory = $Result.DefaultSelection<Prisma.$SettlementHistoryPayload>
/**
 * Model Affiliation
 * 
 */
export type Affiliation = $Result.DefaultSelection<Prisma.$AffiliationPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model YongchaContract
 * 
 */
export type YongchaContract = $Result.DefaultSelection<Prisma.$YongchaContractPayload>
/**
 * Model YongchaRateDetail
 * 
 */
export type YongchaRateDetail = $Result.DefaultSelection<Prisma.$YongchaRateDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Drivers
 * const drivers = await prisma.driver.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Drivers
   * const drivers = await prisma.driver.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs>;

  /**
   * `prisma.settlementHistory`: Exposes CRUD operations for the **SettlementHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SettlementHistories
    * const settlementHistories = await prisma.settlementHistory.findMany()
    * ```
    */
  get settlementHistory(): Prisma.SettlementHistoryDelegate<ExtArgs>;

  /**
   * `prisma.affiliation`: Exposes CRUD operations for the **Affiliation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Affiliations
    * const affiliations = await prisma.affiliation.findMany()
    * ```
    */
  get affiliation(): Prisma.AffiliationDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.yongchaContract`: Exposes CRUD operations for the **YongchaContract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YongchaContracts
    * const yongchaContracts = await prisma.yongchaContract.findMany()
    * ```
    */
  get yongchaContract(): Prisma.YongchaContractDelegate<ExtArgs>;

  /**
   * `prisma.yongchaRateDetail`: Exposes CRUD operations for the **YongchaRateDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more YongchaRateDetails
    * const yongchaRateDetails = await prisma.yongchaRateDetail.findMany()
    * ```
    */
  get yongchaRateDetail(): Prisma.YongchaRateDetailDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Driver: 'Driver',
    SettlementHistory: 'SettlementHistory',
    Affiliation: 'Affiliation',
    User: 'User',
    YongchaContract: 'YongchaContract',
    YongchaRateDetail: 'YongchaRateDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "driver" | "settlementHistory" | "affiliation" | "user" | "yongchaContract" | "yongchaRateDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      SettlementHistory: {
        payload: Prisma.$SettlementHistoryPayload<ExtArgs>
        fields: Prisma.SettlementHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettlementHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettlementHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementHistoryPayload>
          }
          findFirst: {
            args: Prisma.SettlementHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettlementHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementHistoryPayload>
          }
          findMany: {
            args: Prisma.SettlementHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementHistoryPayload>[]
          }
          create: {
            args: Prisma.SettlementHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementHistoryPayload>
          }
          createMany: {
            args: Prisma.SettlementHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettlementHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementHistoryPayload>[]
          }
          delete: {
            args: Prisma.SettlementHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementHistoryPayload>
          }
          update: {
            args: Prisma.SettlementHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementHistoryPayload>
          }
          deleteMany: {
            args: Prisma.SettlementHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettlementHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SettlementHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettlementHistoryPayload>
          }
          aggregate: {
            args: Prisma.SettlementHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettlementHistory>
          }
          groupBy: {
            args: Prisma.SettlementHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettlementHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettlementHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<SettlementHistoryCountAggregateOutputType> | number
          }
        }
      }
      Affiliation: {
        payload: Prisma.$AffiliationPayload<ExtArgs>
        fields: Prisma.AffiliationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AffiliationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AffiliationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliationPayload>
          }
          findFirst: {
            args: Prisma.AffiliationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AffiliationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliationPayload>
          }
          findMany: {
            args: Prisma.AffiliationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliationPayload>[]
          }
          create: {
            args: Prisma.AffiliationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliationPayload>
          }
          createMany: {
            args: Prisma.AffiliationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AffiliationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliationPayload>[]
          }
          delete: {
            args: Prisma.AffiliationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliationPayload>
          }
          update: {
            args: Prisma.AffiliationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliationPayload>
          }
          deleteMany: {
            args: Prisma.AffiliationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AffiliationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AffiliationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliationPayload>
          }
          aggregate: {
            args: Prisma.AffiliationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAffiliation>
          }
          groupBy: {
            args: Prisma.AffiliationGroupByArgs<ExtArgs>
            result: $Utils.Optional<AffiliationGroupByOutputType>[]
          }
          count: {
            args: Prisma.AffiliationCountArgs<ExtArgs>
            result: $Utils.Optional<AffiliationCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      YongchaContract: {
        payload: Prisma.$YongchaContractPayload<ExtArgs>
        fields: Prisma.YongchaContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YongchaContractFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YongchaContractFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaContractPayload>
          }
          findFirst: {
            args: Prisma.YongchaContractFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YongchaContractFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaContractPayload>
          }
          findMany: {
            args: Prisma.YongchaContractFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaContractPayload>[]
          }
          create: {
            args: Prisma.YongchaContractCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaContractPayload>
          }
          createMany: {
            args: Prisma.YongchaContractCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YongchaContractCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaContractPayload>[]
          }
          delete: {
            args: Prisma.YongchaContractDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaContractPayload>
          }
          update: {
            args: Prisma.YongchaContractUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaContractPayload>
          }
          deleteMany: {
            args: Prisma.YongchaContractDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YongchaContractUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.YongchaContractUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaContractPayload>
          }
          aggregate: {
            args: Prisma.YongchaContractAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYongchaContract>
          }
          groupBy: {
            args: Prisma.YongchaContractGroupByArgs<ExtArgs>
            result: $Utils.Optional<YongchaContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.YongchaContractCountArgs<ExtArgs>
            result: $Utils.Optional<YongchaContractCountAggregateOutputType> | number
          }
        }
      }
      YongchaRateDetail: {
        payload: Prisma.$YongchaRateDetailPayload<ExtArgs>
        fields: Prisma.YongchaRateDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.YongchaRateDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaRateDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.YongchaRateDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaRateDetailPayload>
          }
          findFirst: {
            args: Prisma.YongchaRateDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaRateDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.YongchaRateDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaRateDetailPayload>
          }
          findMany: {
            args: Prisma.YongchaRateDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaRateDetailPayload>[]
          }
          create: {
            args: Prisma.YongchaRateDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaRateDetailPayload>
          }
          createMany: {
            args: Prisma.YongchaRateDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.YongchaRateDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaRateDetailPayload>[]
          }
          delete: {
            args: Prisma.YongchaRateDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaRateDetailPayload>
          }
          update: {
            args: Prisma.YongchaRateDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaRateDetailPayload>
          }
          deleteMany: {
            args: Prisma.YongchaRateDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.YongchaRateDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.YongchaRateDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$YongchaRateDetailPayload>
          }
          aggregate: {
            args: Prisma.YongchaRateDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateYongchaRateDetail>
          }
          groupBy: {
            args: Prisma.YongchaRateDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<YongchaRateDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.YongchaRateDetailCountArgs<ExtArgs>
            result: $Utils.Optional<YongchaRateDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AffiliationCountOutputType
   */

  export type AffiliationCountOutputType = {
    Driver: number
    YongchaContract: number
    User: number
  }

  export type AffiliationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Driver?: boolean | AffiliationCountOutputTypeCountDriverArgs
    YongchaContract?: boolean | AffiliationCountOutputTypeCountYongchaContractArgs
    User?: boolean | AffiliationCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * AffiliationCountOutputType without action
   */
  export type AffiliationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliationCountOutputType
     */
    select?: AffiliationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AffiliationCountOutputType without action
   */
  export type AffiliationCountOutputTypeCountDriverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
  }

  /**
   * AffiliationCountOutputType without action
   */
  export type AffiliationCountOutputTypeCountYongchaContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YongchaContractWhereInput
  }

  /**
   * AffiliationCountOutputType without action
   */
  export type AffiliationCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type YongchaContractCountOutputType
   */

  export type YongchaContractCountOutputType = {
    SettlementHistory: number
    YongchaRateDetail: number
  }

  export type YongchaContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SettlementHistory?: boolean | YongchaContractCountOutputTypeCountSettlementHistoryArgs
    YongchaRateDetail?: boolean | YongchaContractCountOutputTypeCountYongchaRateDetailArgs
  }

  // Custom InputTypes
  /**
   * YongchaContractCountOutputType without action
   */
  export type YongchaContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContractCountOutputType
     */
    select?: YongchaContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * YongchaContractCountOutputType without action
   */
  export type YongchaContractCountOutputTypeCountSettlementHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementHistoryWhereInput
  }

  /**
   * YongchaContractCountOutputType without action
   */
  export type YongchaContractCountOutputTypeCountYongchaRateDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YongchaRateDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    id: number | null
    affiliationId: number | null
  }

  export type DriverSumAggregateOutputType = {
    id: number | null
    affiliationId: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: number | null
    oldId: string | null
    name: string | null
    affiliationId: number | null
    carNo: string | null
    tonnage: string | null
    phone: string | null
    regDate: Date | null
    address: string | null
    memo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: number | null
    oldId: string | null
    name: string | null
    affiliationId: number | null
    carNo: string | null
    tonnage: string | null
    phone: string | null
    regDate: Date | null
    address: string | null
    memo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    oldId: number
    name: number
    affiliationId: number
    carNo: number
    tonnage: number
    phone: number
    regDate: number
    address: number
    memo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    id?: true
    affiliationId?: true
  }

  export type DriverSumAggregateInputType = {
    id?: true
    affiliationId?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    oldId?: true
    name?: true
    affiliationId?: true
    carNo?: true
    tonnage?: true
    phone?: true
    regDate?: true
    address?: true
    memo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    oldId?: true
    name?: true
    affiliationId?: true
    carNo?: true
    tonnage?: true
    phone?: true
    regDate?: true
    address?: true
    memo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    oldId?: true
    name?: true
    affiliationId?: true
    carNo?: true
    tonnage?: true
    phone?: true
    regDate?: true
    address?: true
    memo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: number
    oldId: string | null
    name: string
    affiliationId: number | null
    carNo: string | null
    tonnage: string | null
    phone: string | null
    regDate: Date | null
    address: string | null
    memo: string | null
    createdAt: Date
    updatedAt: Date
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    name?: boolean
    affiliationId?: boolean
    carNo?: boolean
    tonnage?: boolean
    phone?: boolean
    regDate?: boolean
    address?: boolean
    memo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Affiliation?: boolean | Driver$AffiliationArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    name?: boolean
    affiliationId?: boolean
    carNo?: boolean
    tonnage?: boolean
    phone?: boolean
    regDate?: boolean
    address?: boolean
    memo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Affiliation?: boolean | Driver$AffiliationArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    oldId?: boolean
    name?: boolean
    affiliationId?: boolean
    carNo?: boolean
    tonnage?: boolean
    phone?: boolean
    regDate?: boolean
    address?: boolean
    memo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Affiliation?: boolean | Driver$AffiliationArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Affiliation?: boolean | Driver$AffiliationArgs<ExtArgs>
  }

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      Affiliation: Prisma.$AffiliationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      oldId: string | null
      name: string
      affiliationId: number | null
      carNo: string | null
      tonnage: string | null
      phone: string | null
      regDate: Date | null
      address: string | null
      memo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Affiliation<T extends Driver$AffiliationArgs<ExtArgs> = {}>(args?: Subset<T, Driver$AffiliationArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */ 
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'Int'>
    readonly oldId: FieldRef<"Driver", 'String'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly affiliationId: FieldRef<"Driver", 'Int'>
    readonly carNo: FieldRef<"Driver", 'String'>
    readonly tonnage: FieldRef<"Driver", 'String'>
    readonly phone: FieldRef<"Driver", 'String'>
    readonly regDate: FieldRef<"Driver", 'DateTime'>
    readonly address: FieldRef<"Driver", 'String'>
    readonly memo: FieldRef<"Driver", 'String'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
  }

  /**
   * Driver.Affiliation
   */
  export type Driver$AffiliationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    where?: AffiliationWhereInput
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model SettlementHistory
   */

  export type AggregateSettlementHistory = {
    _count: SettlementHistoryCountAggregateOutputType | null
    _avg: SettlementHistoryAvgAggregateOutputType | null
    _sum: SettlementHistorySumAggregateOutputType | null
    _min: SettlementHistoryMinAggregateOutputType | null
    _max: SettlementHistoryMaxAggregateOutputType | null
  }

  export type SettlementHistoryAvgAggregateOutputType = {
    id: number | null
    destCount: number | null
    totalWeight: number | null
    fee: number | null
    ton: number | null
    contractId: number | null
    gwon: number | null
    originalFee: number | null
  }

  export type SettlementHistorySumAggregateOutputType = {
    id: number | null
    destCount: number | null
    totalWeight: number | null
    fee: number | null
    ton: number | null
    contractId: number | null
    gwon: number | null
    originalFee: number | null
  }

  export type SettlementHistoryMinAggregateOutputType = {
    id: number | null
    oldId: string | null
    date: Date | null
    driverName: string | null
    affiliation: string | null
    tonnage: string | null
    destCount: number | null
    totalWeight: number | null
    fee: number | null
    memo: string | null
    status: string | null
    isPbox: boolean | null
    isReturn: boolean | null
    so: string | null
    nap: string | null
    ton: number | null
    contractId: number | null
    createdAt: Date | null
    appliedTonnage: string | null
    gwon: number | null
    originalFee: number | null
  }

  export type SettlementHistoryMaxAggregateOutputType = {
    id: number | null
    oldId: string | null
    date: Date | null
    driverName: string | null
    affiliation: string | null
    tonnage: string | null
    destCount: number | null
    totalWeight: number | null
    fee: number | null
    memo: string | null
    status: string | null
    isPbox: boolean | null
    isReturn: boolean | null
    so: string | null
    nap: string | null
    ton: number | null
    contractId: number | null
    createdAt: Date | null
    appliedTonnage: string | null
    gwon: number | null
    originalFee: number | null
  }

  export type SettlementHistoryCountAggregateOutputType = {
    id: number
    oldId: number
    date: number
    driverName: number
    affiliation: number
    tonnage: number
    destCount: number
    totalWeight: number
    fee: number
    memo: number
    status: number
    isPbox: number
    isReturn: number
    so: number
    nap: number
    ton: number
    contractId: number
    createdAt: number
    appliedTonnage: number
    gwon: number
    originalFee: number
    _all: number
  }


  export type SettlementHistoryAvgAggregateInputType = {
    id?: true
    destCount?: true
    totalWeight?: true
    fee?: true
    ton?: true
    contractId?: true
    gwon?: true
    originalFee?: true
  }

  export type SettlementHistorySumAggregateInputType = {
    id?: true
    destCount?: true
    totalWeight?: true
    fee?: true
    ton?: true
    contractId?: true
    gwon?: true
    originalFee?: true
  }

  export type SettlementHistoryMinAggregateInputType = {
    id?: true
    oldId?: true
    date?: true
    driverName?: true
    affiliation?: true
    tonnage?: true
    destCount?: true
    totalWeight?: true
    fee?: true
    memo?: true
    status?: true
    isPbox?: true
    isReturn?: true
    so?: true
    nap?: true
    ton?: true
    contractId?: true
    createdAt?: true
    appliedTonnage?: true
    gwon?: true
    originalFee?: true
  }

  export type SettlementHistoryMaxAggregateInputType = {
    id?: true
    oldId?: true
    date?: true
    driverName?: true
    affiliation?: true
    tonnage?: true
    destCount?: true
    totalWeight?: true
    fee?: true
    memo?: true
    status?: true
    isPbox?: true
    isReturn?: true
    so?: true
    nap?: true
    ton?: true
    contractId?: true
    createdAt?: true
    appliedTonnage?: true
    gwon?: true
    originalFee?: true
  }

  export type SettlementHistoryCountAggregateInputType = {
    id?: true
    oldId?: true
    date?: true
    driverName?: true
    affiliation?: true
    tonnage?: true
    destCount?: true
    totalWeight?: true
    fee?: true
    memo?: true
    status?: true
    isPbox?: true
    isReturn?: true
    so?: true
    nap?: true
    ton?: true
    contractId?: true
    createdAt?: true
    appliedTonnage?: true
    gwon?: true
    originalFee?: true
    _all?: true
  }

  export type SettlementHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SettlementHistory to aggregate.
     */
    where?: SettlementHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettlementHistories to fetch.
     */
    orderBy?: SettlementHistoryOrderByWithRelationInput | SettlementHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettlementHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettlementHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettlementHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SettlementHistories
    **/
    _count?: true | SettlementHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettlementHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettlementHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettlementHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettlementHistoryMaxAggregateInputType
  }

  export type GetSettlementHistoryAggregateType<T extends SettlementHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateSettlementHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettlementHistory[P]>
      : GetScalarType<T[P], AggregateSettlementHistory[P]>
  }




  export type SettlementHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettlementHistoryWhereInput
    orderBy?: SettlementHistoryOrderByWithAggregationInput | SettlementHistoryOrderByWithAggregationInput[]
    by: SettlementHistoryScalarFieldEnum[] | SettlementHistoryScalarFieldEnum
    having?: SettlementHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettlementHistoryCountAggregateInputType | true
    _avg?: SettlementHistoryAvgAggregateInputType
    _sum?: SettlementHistorySumAggregateInputType
    _min?: SettlementHistoryMinAggregateInputType
    _max?: SettlementHistoryMaxAggregateInputType
  }

  export type SettlementHistoryGroupByOutputType = {
    id: number
    oldId: string | null
    date: Date
    driverName: string
    affiliation: string | null
    tonnage: string | null
    destCount: number
    totalWeight: number
    fee: number
    memo: string | null
    status: string
    isPbox: boolean
    isReturn: boolean
    so: string | null
    nap: string | null
    ton: number | null
    contractId: number | null
    createdAt: Date
    appliedTonnage: string | null
    gwon: number | null
    originalFee: number
    _count: SettlementHistoryCountAggregateOutputType | null
    _avg: SettlementHistoryAvgAggregateOutputType | null
    _sum: SettlementHistorySumAggregateOutputType | null
    _min: SettlementHistoryMinAggregateOutputType | null
    _max: SettlementHistoryMaxAggregateOutputType | null
  }

  type GetSettlementHistoryGroupByPayload<T extends SettlementHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettlementHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettlementHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettlementHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], SettlementHistoryGroupByOutputType[P]>
        }
      >
    >


  export type SettlementHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    date?: boolean
    driverName?: boolean
    affiliation?: boolean
    tonnage?: boolean
    destCount?: boolean
    totalWeight?: boolean
    fee?: boolean
    memo?: boolean
    status?: boolean
    isPbox?: boolean
    isReturn?: boolean
    so?: boolean
    nap?: boolean
    ton?: boolean
    contractId?: boolean
    createdAt?: boolean
    appliedTonnage?: boolean
    gwon?: boolean
    originalFee?: boolean
    YongchaContract?: boolean | SettlementHistory$YongchaContractArgs<ExtArgs>
  }, ExtArgs["result"]["settlementHistory"]>

  export type SettlementHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    date?: boolean
    driverName?: boolean
    affiliation?: boolean
    tonnage?: boolean
    destCount?: boolean
    totalWeight?: boolean
    fee?: boolean
    memo?: boolean
    status?: boolean
    isPbox?: boolean
    isReturn?: boolean
    so?: boolean
    nap?: boolean
    ton?: boolean
    contractId?: boolean
    createdAt?: boolean
    appliedTonnage?: boolean
    gwon?: boolean
    originalFee?: boolean
    YongchaContract?: boolean | SettlementHistory$YongchaContractArgs<ExtArgs>
  }, ExtArgs["result"]["settlementHistory"]>

  export type SettlementHistorySelectScalar = {
    id?: boolean
    oldId?: boolean
    date?: boolean
    driverName?: boolean
    affiliation?: boolean
    tonnage?: boolean
    destCount?: boolean
    totalWeight?: boolean
    fee?: boolean
    memo?: boolean
    status?: boolean
    isPbox?: boolean
    isReturn?: boolean
    so?: boolean
    nap?: boolean
    ton?: boolean
    contractId?: boolean
    createdAt?: boolean
    appliedTonnage?: boolean
    gwon?: boolean
    originalFee?: boolean
  }

  export type SettlementHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    YongchaContract?: boolean | SettlementHistory$YongchaContractArgs<ExtArgs>
  }
  export type SettlementHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    YongchaContract?: boolean | SettlementHistory$YongchaContractArgs<ExtArgs>
  }

  export type $SettlementHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SettlementHistory"
    objects: {
      YongchaContract: Prisma.$YongchaContractPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      oldId: string | null
      date: Date
      driverName: string
      affiliation: string | null
      tonnage: string | null
      destCount: number
      totalWeight: number
      fee: number
      memo: string | null
      status: string
      isPbox: boolean
      isReturn: boolean
      so: string | null
      nap: string | null
      ton: number | null
      contractId: number | null
      createdAt: Date
      appliedTonnage: string | null
      gwon: number | null
      originalFee: number
    }, ExtArgs["result"]["settlementHistory"]>
    composites: {}
  }

  type SettlementHistoryGetPayload<S extends boolean | null | undefined | SettlementHistoryDefaultArgs> = $Result.GetResult<Prisma.$SettlementHistoryPayload, S>

  type SettlementHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SettlementHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SettlementHistoryCountAggregateInputType | true
    }

  export interface SettlementHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SettlementHistory'], meta: { name: 'SettlementHistory' } }
    /**
     * Find zero or one SettlementHistory that matches the filter.
     * @param {SettlementHistoryFindUniqueArgs} args - Arguments to find a SettlementHistory
     * @example
     * // Get one SettlementHistory
     * const settlementHistory = await prisma.settlementHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettlementHistoryFindUniqueArgs>(args: SelectSubset<T, SettlementHistoryFindUniqueArgs<ExtArgs>>): Prisma__SettlementHistoryClient<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SettlementHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SettlementHistoryFindUniqueOrThrowArgs} args - Arguments to find a SettlementHistory
     * @example
     * // Get one SettlementHistory
     * const settlementHistory = await prisma.settlementHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettlementHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, SettlementHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettlementHistoryClient<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SettlementHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementHistoryFindFirstArgs} args - Arguments to find a SettlementHistory
     * @example
     * // Get one SettlementHistory
     * const settlementHistory = await prisma.settlementHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettlementHistoryFindFirstArgs>(args?: SelectSubset<T, SettlementHistoryFindFirstArgs<ExtArgs>>): Prisma__SettlementHistoryClient<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SettlementHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementHistoryFindFirstOrThrowArgs} args - Arguments to find a SettlementHistory
     * @example
     * // Get one SettlementHistory
     * const settlementHistory = await prisma.settlementHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettlementHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, SettlementHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettlementHistoryClient<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SettlementHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SettlementHistories
     * const settlementHistories = await prisma.settlementHistory.findMany()
     * 
     * // Get first 10 SettlementHistories
     * const settlementHistories = await prisma.settlementHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settlementHistoryWithIdOnly = await prisma.settlementHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettlementHistoryFindManyArgs>(args?: SelectSubset<T, SettlementHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SettlementHistory.
     * @param {SettlementHistoryCreateArgs} args - Arguments to create a SettlementHistory.
     * @example
     * // Create one SettlementHistory
     * const SettlementHistory = await prisma.settlementHistory.create({
     *   data: {
     *     // ... data to create a SettlementHistory
     *   }
     * })
     * 
     */
    create<T extends SettlementHistoryCreateArgs>(args: SelectSubset<T, SettlementHistoryCreateArgs<ExtArgs>>): Prisma__SettlementHistoryClient<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SettlementHistories.
     * @param {SettlementHistoryCreateManyArgs} args - Arguments to create many SettlementHistories.
     * @example
     * // Create many SettlementHistories
     * const settlementHistory = await prisma.settlementHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettlementHistoryCreateManyArgs>(args?: SelectSubset<T, SettlementHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SettlementHistories and returns the data saved in the database.
     * @param {SettlementHistoryCreateManyAndReturnArgs} args - Arguments to create many SettlementHistories.
     * @example
     * // Create many SettlementHistories
     * const settlementHistory = await prisma.settlementHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SettlementHistories and only return the `id`
     * const settlementHistoryWithIdOnly = await prisma.settlementHistory.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettlementHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, SettlementHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SettlementHistory.
     * @param {SettlementHistoryDeleteArgs} args - Arguments to delete one SettlementHistory.
     * @example
     * // Delete one SettlementHistory
     * const SettlementHistory = await prisma.settlementHistory.delete({
     *   where: {
     *     // ... filter to delete one SettlementHistory
     *   }
     * })
     * 
     */
    delete<T extends SettlementHistoryDeleteArgs>(args: SelectSubset<T, SettlementHistoryDeleteArgs<ExtArgs>>): Prisma__SettlementHistoryClient<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SettlementHistory.
     * @param {SettlementHistoryUpdateArgs} args - Arguments to update one SettlementHistory.
     * @example
     * // Update one SettlementHistory
     * const settlementHistory = await prisma.settlementHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettlementHistoryUpdateArgs>(args: SelectSubset<T, SettlementHistoryUpdateArgs<ExtArgs>>): Prisma__SettlementHistoryClient<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SettlementHistories.
     * @param {SettlementHistoryDeleteManyArgs} args - Arguments to filter SettlementHistories to delete.
     * @example
     * // Delete a few SettlementHistories
     * const { count } = await prisma.settlementHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettlementHistoryDeleteManyArgs>(args?: SelectSubset<T, SettlementHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SettlementHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SettlementHistories
     * const settlementHistory = await prisma.settlementHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettlementHistoryUpdateManyArgs>(args: SelectSubset<T, SettlementHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SettlementHistory.
     * @param {SettlementHistoryUpsertArgs} args - Arguments to update or create a SettlementHistory.
     * @example
     * // Update or create a SettlementHistory
     * const settlementHistory = await prisma.settlementHistory.upsert({
     *   create: {
     *     // ... data to create a SettlementHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SettlementHistory we want to update
     *   }
     * })
     */
    upsert<T extends SettlementHistoryUpsertArgs>(args: SelectSubset<T, SettlementHistoryUpsertArgs<ExtArgs>>): Prisma__SettlementHistoryClient<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SettlementHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementHistoryCountArgs} args - Arguments to filter SettlementHistories to count.
     * @example
     * // Count the number of SettlementHistories
     * const count = await prisma.settlementHistory.count({
     *   where: {
     *     // ... the filter for the SettlementHistories we want to count
     *   }
     * })
    **/
    count<T extends SettlementHistoryCountArgs>(
      args?: Subset<T, SettlementHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettlementHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SettlementHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SettlementHistoryAggregateArgs>(args: Subset<T, SettlementHistoryAggregateArgs>): Prisma.PrismaPromise<GetSettlementHistoryAggregateType<T>>

    /**
     * Group by SettlementHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettlementHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SettlementHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettlementHistoryGroupByArgs['orderBy'] }
        : { orderBy?: SettlementHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SettlementHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettlementHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SettlementHistory model
   */
  readonly fields: SettlementHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SettlementHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettlementHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    YongchaContract<T extends SettlementHistory$YongchaContractArgs<ExtArgs> = {}>(args?: Subset<T, SettlementHistory$YongchaContractArgs<ExtArgs>>): Prisma__YongchaContractClient<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SettlementHistory model
   */ 
  interface SettlementHistoryFieldRefs {
    readonly id: FieldRef<"SettlementHistory", 'Int'>
    readonly oldId: FieldRef<"SettlementHistory", 'String'>
    readonly date: FieldRef<"SettlementHistory", 'DateTime'>
    readonly driverName: FieldRef<"SettlementHistory", 'String'>
    readonly affiliation: FieldRef<"SettlementHistory", 'String'>
    readonly tonnage: FieldRef<"SettlementHistory", 'String'>
    readonly destCount: FieldRef<"SettlementHistory", 'Int'>
    readonly totalWeight: FieldRef<"SettlementHistory", 'Int'>
    readonly fee: FieldRef<"SettlementHistory", 'Int'>
    readonly memo: FieldRef<"SettlementHistory", 'String'>
    readonly status: FieldRef<"SettlementHistory", 'String'>
    readonly isPbox: FieldRef<"SettlementHistory", 'Boolean'>
    readonly isReturn: FieldRef<"SettlementHistory", 'Boolean'>
    readonly so: FieldRef<"SettlementHistory", 'String'>
    readonly nap: FieldRef<"SettlementHistory", 'String'>
    readonly ton: FieldRef<"SettlementHistory", 'Int'>
    readonly contractId: FieldRef<"SettlementHistory", 'Int'>
    readonly createdAt: FieldRef<"SettlementHistory", 'DateTime'>
    readonly appliedTonnage: FieldRef<"SettlementHistory", 'String'>
    readonly gwon: FieldRef<"SettlementHistory", 'Int'>
    readonly originalFee: FieldRef<"SettlementHistory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SettlementHistory findUnique
   */
  export type SettlementHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SettlementHistory to fetch.
     */
    where: SettlementHistoryWhereUniqueInput
  }

  /**
   * SettlementHistory findUniqueOrThrow
   */
  export type SettlementHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SettlementHistory to fetch.
     */
    where: SettlementHistoryWhereUniqueInput
  }

  /**
   * SettlementHistory findFirst
   */
  export type SettlementHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SettlementHistory to fetch.
     */
    where?: SettlementHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettlementHistories to fetch.
     */
    orderBy?: SettlementHistoryOrderByWithRelationInput | SettlementHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SettlementHistories.
     */
    cursor?: SettlementHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettlementHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettlementHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SettlementHistories.
     */
    distinct?: SettlementHistoryScalarFieldEnum | SettlementHistoryScalarFieldEnum[]
  }

  /**
   * SettlementHistory findFirstOrThrow
   */
  export type SettlementHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SettlementHistory to fetch.
     */
    where?: SettlementHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettlementHistories to fetch.
     */
    orderBy?: SettlementHistoryOrderByWithRelationInput | SettlementHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SettlementHistories.
     */
    cursor?: SettlementHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettlementHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettlementHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SettlementHistories.
     */
    distinct?: SettlementHistoryScalarFieldEnum | SettlementHistoryScalarFieldEnum[]
  }

  /**
   * SettlementHistory findMany
   */
  export type SettlementHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
    /**
     * Filter, which SettlementHistories to fetch.
     */
    where?: SettlementHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SettlementHistories to fetch.
     */
    orderBy?: SettlementHistoryOrderByWithRelationInput | SettlementHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SettlementHistories.
     */
    cursor?: SettlementHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SettlementHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SettlementHistories.
     */
    skip?: number
    distinct?: SettlementHistoryScalarFieldEnum | SettlementHistoryScalarFieldEnum[]
  }

  /**
   * SettlementHistory create
   */
  export type SettlementHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a SettlementHistory.
     */
    data: XOR<SettlementHistoryCreateInput, SettlementHistoryUncheckedCreateInput>
  }

  /**
   * SettlementHistory createMany
   */
  export type SettlementHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SettlementHistories.
     */
    data: SettlementHistoryCreateManyInput | SettlementHistoryCreateManyInput[]
  }

  /**
   * SettlementHistory createManyAndReturn
   */
  export type SettlementHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SettlementHistories.
     */
    data: SettlementHistoryCreateManyInput | SettlementHistoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SettlementHistory update
   */
  export type SettlementHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a SettlementHistory.
     */
    data: XOR<SettlementHistoryUpdateInput, SettlementHistoryUncheckedUpdateInput>
    /**
     * Choose, which SettlementHistory to update.
     */
    where: SettlementHistoryWhereUniqueInput
  }

  /**
   * SettlementHistory updateMany
   */
  export type SettlementHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SettlementHistories.
     */
    data: XOR<SettlementHistoryUpdateManyMutationInput, SettlementHistoryUncheckedUpdateManyInput>
    /**
     * Filter which SettlementHistories to update
     */
    where?: SettlementHistoryWhereInput
  }

  /**
   * SettlementHistory upsert
   */
  export type SettlementHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the SettlementHistory to update in case it exists.
     */
    where: SettlementHistoryWhereUniqueInput
    /**
     * In case the SettlementHistory found by the `where` argument doesn't exist, create a new SettlementHistory with this data.
     */
    create: XOR<SettlementHistoryCreateInput, SettlementHistoryUncheckedCreateInput>
    /**
     * In case the SettlementHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettlementHistoryUpdateInput, SettlementHistoryUncheckedUpdateInput>
  }

  /**
   * SettlementHistory delete
   */
  export type SettlementHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
    /**
     * Filter which SettlementHistory to delete.
     */
    where: SettlementHistoryWhereUniqueInput
  }

  /**
   * SettlementHistory deleteMany
   */
  export type SettlementHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SettlementHistories to delete
     */
    where?: SettlementHistoryWhereInput
  }

  /**
   * SettlementHistory.YongchaContract
   */
  export type SettlementHistory$YongchaContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    where?: YongchaContractWhereInput
  }

  /**
   * SettlementHistory without action
   */
  export type SettlementHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Affiliation
   */

  export type AggregateAffiliation = {
    _count: AffiliationCountAggregateOutputType | null
    _avg: AffiliationAvgAggregateOutputType | null
    _sum: AffiliationSumAggregateOutputType | null
    _min: AffiliationMinAggregateOutputType | null
    _max: AffiliationMaxAggregateOutputType | null
  }

  export type AffiliationAvgAggregateOutputType = {
    id: number | null
  }

  export type AffiliationSumAggregateOutputType = {
    id: number | null
  }

  export type AffiliationMinAggregateOutputType = {
    id: number | null
    oldId: string | null
    name: string | null
    bizNo: string | null
    ceo: string | null
    address: string | null
    manager: string | null
    contact: string | null
    email: string | null
    memo: string | null
    createdAt: Date | null
  }

  export type AffiliationMaxAggregateOutputType = {
    id: number | null
    oldId: string | null
    name: string | null
    bizNo: string | null
    ceo: string | null
    address: string | null
    manager: string | null
    contact: string | null
    email: string | null
    memo: string | null
    createdAt: Date | null
  }

  export type AffiliationCountAggregateOutputType = {
    id: number
    oldId: number
    name: number
    bizNo: number
    ceo: number
    address: number
    manager: number
    contact: number
    email: number
    memo: number
    createdAt: number
    _all: number
  }


  export type AffiliationAvgAggregateInputType = {
    id?: true
  }

  export type AffiliationSumAggregateInputType = {
    id?: true
  }

  export type AffiliationMinAggregateInputType = {
    id?: true
    oldId?: true
    name?: true
    bizNo?: true
    ceo?: true
    address?: true
    manager?: true
    contact?: true
    email?: true
    memo?: true
    createdAt?: true
  }

  export type AffiliationMaxAggregateInputType = {
    id?: true
    oldId?: true
    name?: true
    bizNo?: true
    ceo?: true
    address?: true
    manager?: true
    contact?: true
    email?: true
    memo?: true
    createdAt?: true
  }

  export type AffiliationCountAggregateInputType = {
    id?: true
    oldId?: true
    name?: true
    bizNo?: true
    ceo?: true
    address?: true
    manager?: true
    contact?: true
    email?: true
    memo?: true
    createdAt?: true
    _all?: true
  }

  export type AffiliationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Affiliation to aggregate.
     */
    where?: AffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliations to fetch.
     */
    orderBy?: AffiliationOrderByWithRelationInput | AffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Affiliations
    **/
    _count?: true | AffiliationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AffiliationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AffiliationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AffiliationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AffiliationMaxAggregateInputType
  }

  export type GetAffiliationAggregateType<T extends AffiliationAggregateArgs> = {
        [P in keyof T & keyof AggregateAffiliation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAffiliation[P]>
      : GetScalarType<T[P], AggregateAffiliation[P]>
  }




  export type AffiliationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliationWhereInput
    orderBy?: AffiliationOrderByWithAggregationInput | AffiliationOrderByWithAggregationInput[]
    by: AffiliationScalarFieldEnum[] | AffiliationScalarFieldEnum
    having?: AffiliationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AffiliationCountAggregateInputType | true
    _avg?: AffiliationAvgAggregateInputType
    _sum?: AffiliationSumAggregateInputType
    _min?: AffiliationMinAggregateInputType
    _max?: AffiliationMaxAggregateInputType
  }

  export type AffiliationGroupByOutputType = {
    id: number
    oldId: string | null
    name: string
    bizNo: string | null
    ceo: string | null
    address: string | null
    manager: string | null
    contact: string | null
    email: string | null
    memo: string | null
    createdAt: Date
    _count: AffiliationCountAggregateOutputType | null
    _avg: AffiliationAvgAggregateOutputType | null
    _sum: AffiliationSumAggregateOutputType | null
    _min: AffiliationMinAggregateOutputType | null
    _max: AffiliationMaxAggregateOutputType | null
  }

  type GetAffiliationGroupByPayload<T extends AffiliationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AffiliationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AffiliationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AffiliationGroupByOutputType[P]>
            : GetScalarType<T[P], AffiliationGroupByOutputType[P]>
        }
      >
    >


  export type AffiliationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    name?: boolean
    bizNo?: boolean
    ceo?: boolean
    address?: boolean
    manager?: boolean
    contact?: boolean
    email?: boolean
    memo?: boolean
    createdAt?: boolean
    Driver?: boolean | Affiliation$DriverArgs<ExtArgs>
    YongchaContract?: boolean | Affiliation$YongchaContractArgs<ExtArgs>
    User?: boolean | Affiliation$UserArgs<ExtArgs>
    _count?: boolean | AffiliationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["affiliation"]>

  export type AffiliationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    name?: boolean
    bizNo?: boolean
    ceo?: boolean
    address?: boolean
    manager?: boolean
    contact?: boolean
    email?: boolean
    memo?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["affiliation"]>

  export type AffiliationSelectScalar = {
    id?: boolean
    oldId?: boolean
    name?: boolean
    bizNo?: boolean
    ceo?: boolean
    address?: boolean
    manager?: boolean
    contact?: boolean
    email?: boolean
    memo?: boolean
    createdAt?: boolean
  }

  export type AffiliationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Driver?: boolean | Affiliation$DriverArgs<ExtArgs>
    YongchaContract?: boolean | Affiliation$YongchaContractArgs<ExtArgs>
    User?: boolean | Affiliation$UserArgs<ExtArgs>
    _count?: boolean | AffiliationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AffiliationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AffiliationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Affiliation"
    objects: {
      Driver: Prisma.$DriverPayload<ExtArgs>[]
      YongchaContract: Prisma.$YongchaContractPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      oldId: string | null
      name: string
      bizNo: string | null
      ceo: string | null
      address: string | null
      manager: string | null
      contact: string | null
      email: string | null
      memo: string | null
      createdAt: Date
    }, ExtArgs["result"]["affiliation"]>
    composites: {}
  }

  type AffiliationGetPayload<S extends boolean | null | undefined | AffiliationDefaultArgs> = $Result.GetResult<Prisma.$AffiliationPayload, S>

  type AffiliationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AffiliationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AffiliationCountAggregateInputType | true
    }

  export interface AffiliationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Affiliation'], meta: { name: 'Affiliation' } }
    /**
     * Find zero or one Affiliation that matches the filter.
     * @param {AffiliationFindUniqueArgs} args - Arguments to find a Affiliation
     * @example
     * // Get one Affiliation
     * const affiliation = await prisma.affiliation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AffiliationFindUniqueArgs>(args: SelectSubset<T, AffiliationFindUniqueArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Affiliation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AffiliationFindUniqueOrThrowArgs} args - Arguments to find a Affiliation
     * @example
     * // Get one Affiliation
     * const affiliation = await prisma.affiliation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AffiliationFindUniqueOrThrowArgs>(args: SelectSubset<T, AffiliationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Affiliation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliationFindFirstArgs} args - Arguments to find a Affiliation
     * @example
     * // Get one Affiliation
     * const affiliation = await prisma.affiliation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AffiliationFindFirstArgs>(args?: SelectSubset<T, AffiliationFindFirstArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Affiliation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliationFindFirstOrThrowArgs} args - Arguments to find a Affiliation
     * @example
     * // Get one Affiliation
     * const affiliation = await prisma.affiliation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AffiliationFindFirstOrThrowArgs>(args?: SelectSubset<T, AffiliationFindFirstOrThrowArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Affiliations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Affiliations
     * const affiliations = await prisma.affiliation.findMany()
     * 
     * // Get first 10 Affiliations
     * const affiliations = await prisma.affiliation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const affiliationWithIdOnly = await prisma.affiliation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AffiliationFindManyArgs>(args?: SelectSubset<T, AffiliationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Affiliation.
     * @param {AffiliationCreateArgs} args - Arguments to create a Affiliation.
     * @example
     * // Create one Affiliation
     * const Affiliation = await prisma.affiliation.create({
     *   data: {
     *     // ... data to create a Affiliation
     *   }
     * })
     * 
     */
    create<T extends AffiliationCreateArgs>(args: SelectSubset<T, AffiliationCreateArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Affiliations.
     * @param {AffiliationCreateManyArgs} args - Arguments to create many Affiliations.
     * @example
     * // Create many Affiliations
     * const affiliation = await prisma.affiliation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AffiliationCreateManyArgs>(args?: SelectSubset<T, AffiliationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Affiliations and returns the data saved in the database.
     * @param {AffiliationCreateManyAndReturnArgs} args - Arguments to create many Affiliations.
     * @example
     * // Create many Affiliations
     * const affiliation = await prisma.affiliation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Affiliations and only return the `id`
     * const affiliationWithIdOnly = await prisma.affiliation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AffiliationCreateManyAndReturnArgs>(args?: SelectSubset<T, AffiliationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Affiliation.
     * @param {AffiliationDeleteArgs} args - Arguments to delete one Affiliation.
     * @example
     * // Delete one Affiliation
     * const Affiliation = await prisma.affiliation.delete({
     *   where: {
     *     // ... filter to delete one Affiliation
     *   }
     * })
     * 
     */
    delete<T extends AffiliationDeleteArgs>(args: SelectSubset<T, AffiliationDeleteArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Affiliation.
     * @param {AffiliationUpdateArgs} args - Arguments to update one Affiliation.
     * @example
     * // Update one Affiliation
     * const affiliation = await prisma.affiliation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AffiliationUpdateArgs>(args: SelectSubset<T, AffiliationUpdateArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Affiliations.
     * @param {AffiliationDeleteManyArgs} args - Arguments to filter Affiliations to delete.
     * @example
     * // Delete a few Affiliations
     * const { count } = await prisma.affiliation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AffiliationDeleteManyArgs>(args?: SelectSubset<T, AffiliationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Affiliations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Affiliations
     * const affiliation = await prisma.affiliation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AffiliationUpdateManyArgs>(args: SelectSubset<T, AffiliationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Affiliation.
     * @param {AffiliationUpsertArgs} args - Arguments to update or create a Affiliation.
     * @example
     * // Update or create a Affiliation
     * const affiliation = await prisma.affiliation.upsert({
     *   create: {
     *     // ... data to create a Affiliation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Affiliation we want to update
     *   }
     * })
     */
    upsert<T extends AffiliationUpsertArgs>(args: SelectSubset<T, AffiliationUpsertArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Affiliations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliationCountArgs} args - Arguments to filter Affiliations to count.
     * @example
     * // Count the number of Affiliations
     * const count = await prisma.affiliation.count({
     *   where: {
     *     // ... the filter for the Affiliations we want to count
     *   }
     * })
    **/
    count<T extends AffiliationCountArgs>(
      args?: Subset<T, AffiliationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AffiliationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Affiliation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AffiliationAggregateArgs>(args: Subset<T, AffiliationAggregateArgs>): Prisma.PrismaPromise<GetAffiliationAggregateType<T>>

    /**
     * Group by Affiliation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AffiliationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AffiliationGroupByArgs['orderBy'] }
        : { orderBy?: AffiliationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AffiliationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAffiliationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Affiliation model
   */
  readonly fields: AffiliationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Affiliation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AffiliationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Driver<T extends Affiliation$DriverArgs<ExtArgs> = {}>(args?: Subset<T, Affiliation$DriverArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany"> | Null>
    YongchaContract<T extends Affiliation$YongchaContractArgs<ExtArgs> = {}>(args?: Subset<T, Affiliation$YongchaContractArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "findMany"> | Null>
    User<T extends Affiliation$UserArgs<ExtArgs> = {}>(args?: Subset<T, Affiliation$UserArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Affiliation model
   */ 
  interface AffiliationFieldRefs {
    readonly id: FieldRef<"Affiliation", 'Int'>
    readonly oldId: FieldRef<"Affiliation", 'String'>
    readonly name: FieldRef<"Affiliation", 'String'>
    readonly bizNo: FieldRef<"Affiliation", 'String'>
    readonly ceo: FieldRef<"Affiliation", 'String'>
    readonly address: FieldRef<"Affiliation", 'String'>
    readonly manager: FieldRef<"Affiliation", 'String'>
    readonly contact: FieldRef<"Affiliation", 'String'>
    readonly email: FieldRef<"Affiliation", 'String'>
    readonly memo: FieldRef<"Affiliation", 'String'>
    readonly createdAt: FieldRef<"Affiliation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Affiliation findUnique
   */
  export type AffiliationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    /**
     * Filter, which Affiliation to fetch.
     */
    where: AffiliationWhereUniqueInput
  }

  /**
   * Affiliation findUniqueOrThrow
   */
  export type AffiliationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    /**
     * Filter, which Affiliation to fetch.
     */
    where: AffiliationWhereUniqueInput
  }

  /**
   * Affiliation findFirst
   */
  export type AffiliationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    /**
     * Filter, which Affiliation to fetch.
     */
    where?: AffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliations to fetch.
     */
    orderBy?: AffiliationOrderByWithRelationInput | AffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Affiliations.
     */
    cursor?: AffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Affiliations.
     */
    distinct?: AffiliationScalarFieldEnum | AffiliationScalarFieldEnum[]
  }

  /**
   * Affiliation findFirstOrThrow
   */
  export type AffiliationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    /**
     * Filter, which Affiliation to fetch.
     */
    where?: AffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliations to fetch.
     */
    orderBy?: AffiliationOrderByWithRelationInput | AffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Affiliations.
     */
    cursor?: AffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Affiliations.
     */
    distinct?: AffiliationScalarFieldEnum | AffiliationScalarFieldEnum[]
  }

  /**
   * Affiliation findMany
   */
  export type AffiliationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    /**
     * Filter, which Affiliations to fetch.
     */
    where?: AffiliationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliations to fetch.
     */
    orderBy?: AffiliationOrderByWithRelationInput | AffiliationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Affiliations.
     */
    cursor?: AffiliationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliations.
     */
    skip?: number
    distinct?: AffiliationScalarFieldEnum | AffiliationScalarFieldEnum[]
  }

  /**
   * Affiliation create
   */
  export type AffiliationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    /**
     * The data needed to create a Affiliation.
     */
    data: XOR<AffiliationCreateInput, AffiliationUncheckedCreateInput>
  }

  /**
   * Affiliation createMany
   */
  export type AffiliationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Affiliations.
     */
    data: AffiliationCreateManyInput | AffiliationCreateManyInput[]
  }

  /**
   * Affiliation createManyAndReturn
   */
  export type AffiliationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Affiliations.
     */
    data: AffiliationCreateManyInput | AffiliationCreateManyInput[]
  }

  /**
   * Affiliation update
   */
  export type AffiliationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    /**
     * The data needed to update a Affiliation.
     */
    data: XOR<AffiliationUpdateInput, AffiliationUncheckedUpdateInput>
    /**
     * Choose, which Affiliation to update.
     */
    where: AffiliationWhereUniqueInput
  }

  /**
   * Affiliation updateMany
   */
  export type AffiliationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Affiliations.
     */
    data: XOR<AffiliationUpdateManyMutationInput, AffiliationUncheckedUpdateManyInput>
    /**
     * Filter which Affiliations to update
     */
    where?: AffiliationWhereInput
  }

  /**
   * Affiliation upsert
   */
  export type AffiliationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    /**
     * The filter to search for the Affiliation to update in case it exists.
     */
    where: AffiliationWhereUniqueInput
    /**
     * In case the Affiliation found by the `where` argument doesn't exist, create a new Affiliation with this data.
     */
    create: XOR<AffiliationCreateInput, AffiliationUncheckedCreateInput>
    /**
     * In case the Affiliation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AffiliationUpdateInput, AffiliationUncheckedUpdateInput>
  }

  /**
   * Affiliation delete
   */
  export type AffiliationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    /**
     * Filter which Affiliation to delete.
     */
    where: AffiliationWhereUniqueInput
  }

  /**
   * Affiliation deleteMany
   */
  export type AffiliationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Affiliations to delete
     */
    where?: AffiliationWhereInput
  }

  /**
   * Affiliation.Driver
   */
  export type Affiliation$DriverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    cursor?: DriverWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Affiliation.YongchaContract
   */
  export type Affiliation$YongchaContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    where?: YongchaContractWhereInput
    orderBy?: YongchaContractOrderByWithRelationInput | YongchaContractOrderByWithRelationInput[]
    cursor?: YongchaContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YongchaContractScalarFieldEnum | YongchaContractScalarFieldEnum[]
  }

  /**
   * Affiliation.User
   */
  export type Affiliation$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Affiliation without action
   */
  export type AffiliationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    affiliationId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    affiliationId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    oldId: string | null
    loginId: string | null
    password: string | null
    name: string | null
    role: string | null
    affiliationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    oldId: string | null
    loginId: string | null
    password: string | null
    name: string | null
    role: string | null
    affiliationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    oldId: number
    loginId: number
    password: number
    name: number
    role: number
    affiliationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    affiliationId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    affiliationId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    oldId?: true
    loginId?: true
    password?: true
    name?: true
    role?: true
    affiliationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    oldId?: true
    loginId?: true
    password?: true
    name?: true
    role?: true
    affiliationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    oldId?: true
    loginId?: true
    password?: true
    name?: true
    role?: true
    affiliationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    oldId: string | null
    loginId: string
    password: string
    name: string
    role: string
    affiliationId: number | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    loginId?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    affiliationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Affiliation?: boolean | User$AffiliationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    loginId?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    affiliationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Affiliation?: boolean | User$AffiliationArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    oldId?: boolean
    loginId?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    affiliationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Affiliation?: boolean | User$AffiliationArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Affiliation?: boolean | User$AffiliationArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Affiliation: Prisma.$AffiliationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      oldId: string | null
      loginId: string
      password: string
      name: string
      role: string
      affiliationId: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Affiliation<T extends User$AffiliationArgs<ExtArgs> = {}>(args?: Subset<T, User$AffiliationArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly oldId: FieldRef<"User", 'String'>
    readonly loginId: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly affiliationId: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.Affiliation
   */
  export type User$AffiliationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliation
     */
    select?: AffiliationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliationInclude<ExtArgs> | null
    where?: AffiliationWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model YongchaContract
   */

  export type AggregateYongchaContract = {
    _count: YongchaContractCountAggregateOutputType | null
    _avg: YongchaContractAvgAggregateOutputType | null
    _sum: YongchaContractSumAggregateOutputType | null
    _min: YongchaContractMinAggregateOutputType | null
    _max: YongchaContractMaxAggregateOutputType | null
  }

  export type YongchaContractAvgAggregateOutputType = {
    id: number | null
    year: number | null
    affiliationId: number | null
  }

  export type YongchaContractSumAggregateOutputType = {
    id: number | null
    year: number | null
    affiliationId: number | null
  }

  export type YongchaContractMinAggregateOutputType = {
    id: number | null
    oldId: string | null
    year: number | null
    affiliationId: number | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    memo: string | null
  }

  export type YongchaContractMaxAggregateOutputType = {
    id: number | null
    oldId: string | null
    year: number | null
    affiliationId: number | null
    startDate: Date | null
    endDate: Date | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
    memo: string | null
  }

  export type YongchaContractCountAggregateOutputType = {
    id: number
    oldId: number
    year: number
    affiliationId: number
    startDate: number
    endDate: number
    status: number
    createdAt: number
    updatedAt: number
    memo: number
    _all: number
  }


  export type YongchaContractAvgAggregateInputType = {
    id?: true
    year?: true
    affiliationId?: true
  }

  export type YongchaContractSumAggregateInputType = {
    id?: true
    year?: true
    affiliationId?: true
  }

  export type YongchaContractMinAggregateInputType = {
    id?: true
    oldId?: true
    year?: true
    affiliationId?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    memo?: true
  }

  export type YongchaContractMaxAggregateInputType = {
    id?: true
    oldId?: true
    year?: true
    affiliationId?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    memo?: true
  }

  export type YongchaContractCountAggregateInputType = {
    id?: true
    oldId?: true
    year?: true
    affiliationId?: true
    startDate?: true
    endDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    memo?: true
    _all?: true
  }

  export type YongchaContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YongchaContract to aggregate.
     */
    where?: YongchaContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YongchaContracts to fetch.
     */
    orderBy?: YongchaContractOrderByWithRelationInput | YongchaContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YongchaContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YongchaContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YongchaContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YongchaContracts
    **/
    _count?: true | YongchaContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YongchaContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YongchaContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YongchaContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YongchaContractMaxAggregateInputType
  }

  export type GetYongchaContractAggregateType<T extends YongchaContractAggregateArgs> = {
        [P in keyof T & keyof AggregateYongchaContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYongchaContract[P]>
      : GetScalarType<T[P], AggregateYongchaContract[P]>
  }




  export type YongchaContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YongchaContractWhereInput
    orderBy?: YongchaContractOrderByWithAggregationInput | YongchaContractOrderByWithAggregationInput[]
    by: YongchaContractScalarFieldEnum[] | YongchaContractScalarFieldEnum
    having?: YongchaContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YongchaContractCountAggregateInputType | true
    _avg?: YongchaContractAvgAggregateInputType
    _sum?: YongchaContractSumAggregateInputType
    _min?: YongchaContractMinAggregateInputType
    _max?: YongchaContractMaxAggregateInputType
  }

  export type YongchaContractGroupByOutputType = {
    id: number
    oldId: string | null
    year: number
    affiliationId: number
    startDate: Date
    endDate: Date
    status: string
    createdAt: Date
    updatedAt: Date
    memo: string | null
    _count: YongchaContractCountAggregateOutputType | null
    _avg: YongchaContractAvgAggregateOutputType | null
    _sum: YongchaContractSumAggregateOutputType | null
    _min: YongchaContractMinAggregateOutputType | null
    _max: YongchaContractMaxAggregateOutputType | null
  }

  type GetYongchaContractGroupByPayload<T extends YongchaContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YongchaContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YongchaContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YongchaContractGroupByOutputType[P]>
            : GetScalarType<T[P], YongchaContractGroupByOutputType[P]>
        }
      >
    >


  export type YongchaContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    year?: boolean
    affiliationId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memo?: boolean
    SettlementHistory?: boolean | YongchaContract$SettlementHistoryArgs<ExtArgs>
    Affiliation?: boolean | AffiliationDefaultArgs<ExtArgs>
    YongchaRateDetail?: boolean | YongchaContract$YongchaRateDetailArgs<ExtArgs>
    _count?: boolean | YongchaContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["yongchaContract"]>

  export type YongchaContractSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    year?: boolean
    affiliationId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memo?: boolean
    Affiliation?: boolean | AffiliationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["yongchaContract"]>

  export type YongchaContractSelectScalar = {
    id?: boolean
    oldId?: boolean
    year?: boolean
    affiliationId?: boolean
    startDate?: boolean
    endDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    memo?: boolean
  }

  export type YongchaContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SettlementHistory?: boolean | YongchaContract$SettlementHistoryArgs<ExtArgs>
    Affiliation?: boolean | AffiliationDefaultArgs<ExtArgs>
    YongchaRateDetail?: boolean | YongchaContract$YongchaRateDetailArgs<ExtArgs>
    _count?: boolean | YongchaContractCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type YongchaContractIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Affiliation?: boolean | AffiliationDefaultArgs<ExtArgs>
  }

  export type $YongchaContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YongchaContract"
    objects: {
      SettlementHistory: Prisma.$SettlementHistoryPayload<ExtArgs>[]
      Affiliation: Prisma.$AffiliationPayload<ExtArgs>
      YongchaRateDetail: Prisma.$YongchaRateDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      oldId: string | null
      year: number
      affiliationId: number
      startDate: Date
      endDate: Date
      status: string
      createdAt: Date
      updatedAt: Date
      memo: string | null
    }, ExtArgs["result"]["yongchaContract"]>
    composites: {}
  }

  type YongchaContractGetPayload<S extends boolean | null | undefined | YongchaContractDefaultArgs> = $Result.GetResult<Prisma.$YongchaContractPayload, S>

  type YongchaContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<YongchaContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: YongchaContractCountAggregateInputType | true
    }

  export interface YongchaContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YongchaContract'], meta: { name: 'YongchaContract' } }
    /**
     * Find zero or one YongchaContract that matches the filter.
     * @param {YongchaContractFindUniqueArgs} args - Arguments to find a YongchaContract
     * @example
     * // Get one YongchaContract
     * const yongchaContract = await prisma.yongchaContract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YongchaContractFindUniqueArgs>(args: SelectSubset<T, YongchaContractFindUniqueArgs<ExtArgs>>): Prisma__YongchaContractClient<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one YongchaContract that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {YongchaContractFindUniqueOrThrowArgs} args - Arguments to find a YongchaContract
     * @example
     * // Get one YongchaContract
     * const yongchaContract = await prisma.yongchaContract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YongchaContractFindUniqueOrThrowArgs>(args: SelectSubset<T, YongchaContractFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YongchaContractClient<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first YongchaContract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaContractFindFirstArgs} args - Arguments to find a YongchaContract
     * @example
     * // Get one YongchaContract
     * const yongchaContract = await prisma.yongchaContract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YongchaContractFindFirstArgs>(args?: SelectSubset<T, YongchaContractFindFirstArgs<ExtArgs>>): Prisma__YongchaContractClient<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first YongchaContract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaContractFindFirstOrThrowArgs} args - Arguments to find a YongchaContract
     * @example
     * // Get one YongchaContract
     * const yongchaContract = await prisma.yongchaContract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YongchaContractFindFirstOrThrowArgs>(args?: SelectSubset<T, YongchaContractFindFirstOrThrowArgs<ExtArgs>>): Prisma__YongchaContractClient<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more YongchaContracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaContractFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YongchaContracts
     * const yongchaContracts = await prisma.yongchaContract.findMany()
     * 
     * // Get first 10 YongchaContracts
     * const yongchaContracts = await prisma.yongchaContract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yongchaContractWithIdOnly = await prisma.yongchaContract.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YongchaContractFindManyArgs>(args?: SelectSubset<T, YongchaContractFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a YongchaContract.
     * @param {YongchaContractCreateArgs} args - Arguments to create a YongchaContract.
     * @example
     * // Create one YongchaContract
     * const YongchaContract = await prisma.yongchaContract.create({
     *   data: {
     *     // ... data to create a YongchaContract
     *   }
     * })
     * 
     */
    create<T extends YongchaContractCreateArgs>(args: SelectSubset<T, YongchaContractCreateArgs<ExtArgs>>): Prisma__YongchaContractClient<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many YongchaContracts.
     * @param {YongchaContractCreateManyArgs} args - Arguments to create many YongchaContracts.
     * @example
     * // Create many YongchaContracts
     * const yongchaContract = await prisma.yongchaContract.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YongchaContractCreateManyArgs>(args?: SelectSubset<T, YongchaContractCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YongchaContracts and returns the data saved in the database.
     * @param {YongchaContractCreateManyAndReturnArgs} args - Arguments to create many YongchaContracts.
     * @example
     * // Create many YongchaContracts
     * const yongchaContract = await prisma.yongchaContract.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YongchaContracts and only return the `id`
     * const yongchaContractWithIdOnly = await prisma.yongchaContract.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YongchaContractCreateManyAndReturnArgs>(args?: SelectSubset<T, YongchaContractCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a YongchaContract.
     * @param {YongchaContractDeleteArgs} args - Arguments to delete one YongchaContract.
     * @example
     * // Delete one YongchaContract
     * const YongchaContract = await prisma.yongchaContract.delete({
     *   where: {
     *     // ... filter to delete one YongchaContract
     *   }
     * })
     * 
     */
    delete<T extends YongchaContractDeleteArgs>(args: SelectSubset<T, YongchaContractDeleteArgs<ExtArgs>>): Prisma__YongchaContractClient<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one YongchaContract.
     * @param {YongchaContractUpdateArgs} args - Arguments to update one YongchaContract.
     * @example
     * // Update one YongchaContract
     * const yongchaContract = await prisma.yongchaContract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YongchaContractUpdateArgs>(args: SelectSubset<T, YongchaContractUpdateArgs<ExtArgs>>): Prisma__YongchaContractClient<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more YongchaContracts.
     * @param {YongchaContractDeleteManyArgs} args - Arguments to filter YongchaContracts to delete.
     * @example
     * // Delete a few YongchaContracts
     * const { count } = await prisma.yongchaContract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YongchaContractDeleteManyArgs>(args?: SelectSubset<T, YongchaContractDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YongchaContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YongchaContracts
     * const yongchaContract = await prisma.yongchaContract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YongchaContractUpdateManyArgs>(args: SelectSubset<T, YongchaContractUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one YongchaContract.
     * @param {YongchaContractUpsertArgs} args - Arguments to update or create a YongchaContract.
     * @example
     * // Update or create a YongchaContract
     * const yongchaContract = await prisma.yongchaContract.upsert({
     *   create: {
     *     // ... data to create a YongchaContract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YongchaContract we want to update
     *   }
     * })
     */
    upsert<T extends YongchaContractUpsertArgs>(args: SelectSubset<T, YongchaContractUpsertArgs<ExtArgs>>): Prisma__YongchaContractClient<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of YongchaContracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaContractCountArgs} args - Arguments to filter YongchaContracts to count.
     * @example
     * // Count the number of YongchaContracts
     * const count = await prisma.yongchaContract.count({
     *   where: {
     *     // ... the filter for the YongchaContracts we want to count
     *   }
     * })
    **/
    count<T extends YongchaContractCountArgs>(
      args?: Subset<T, YongchaContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YongchaContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YongchaContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YongchaContractAggregateArgs>(args: Subset<T, YongchaContractAggregateArgs>): Prisma.PrismaPromise<GetYongchaContractAggregateType<T>>

    /**
     * Group by YongchaContract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends YongchaContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YongchaContractGroupByArgs['orderBy'] }
        : { orderBy?: YongchaContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, YongchaContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYongchaContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YongchaContract model
   */
  readonly fields: YongchaContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YongchaContract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YongchaContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SettlementHistory<T extends YongchaContract$SettlementHistoryArgs<ExtArgs> = {}>(args?: Subset<T, YongchaContract$SettlementHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettlementHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    Affiliation<T extends AffiliationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AffiliationDefaultArgs<ExtArgs>>): Prisma__AffiliationClient<$Result.GetResult<Prisma.$AffiliationPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    YongchaRateDetail<T extends YongchaContract$YongchaRateDetailArgs<ExtArgs> = {}>(args?: Subset<T, YongchaContract$YongchaRateDetailArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the YongchaContract model
   */ 
  interface YongchaContractFieldRefs {
    readonly id: FieldRef<"YongchaContract", 'Int'>
    readonly oldId: FieldRef<"YongchaContract", 'String'>
    readonly year: FieldRef<"YongchaContract", 'Int'>
    readonly affiliationId: FieldRef<"YongchaContract", 'Int'>
    readonly startDate: FieldRef<"YongchaContract", 'DateTime'>
    readonly endDate: FieldRef<"YongchaContract", 'DateTime'>
    readonly status: FieldRef<"YongchaContract", 'String'>
    readonly createdAt: FieldRef<"YongchaContract", 'DateTime'>
    readonly updatedAt: FieldRef<"YongchaContract", 'DateTime'>
    readonly memo: FieldRef<"YongchaContract", 'String'>
  }
    

  // Custom InputTypes
  /**
   * YongchaContract findUnique
   */
  export type YongchaContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    /**
     * Filter, which YongchaContract to fetch.
     */
    where: YongchaContractWhereUniqueInput
  }

  /**
   * YongchaContract findUniqueOrThrow
   */
  export type YongchaContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    /**
     * Filter, which YongchaContract to fetch.
     */
    where: YongchaContractWhereUniqueInput
  }

  /**
   * YongchaContract findFirst
   */
  export type YongchaContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    /**
     * Filter, which YongchaContract to fetch.
     */
    where?: YongchaContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YongchaContracts to fetch.
     */
    orderBy?: YongchaContractOrderByWithRelationInput | YongchaContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YongchaContracts.
     */
    cursor?: YongchaContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YongchaContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YongchaContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YongchaContracts.
     */
    distinct?: YongchaContractScalarFieldEnum | YongchaContractScalarFieldEnum[]
  }

  /**
   * YongchaContract findFirstOrThrow
   */
  export type YongchaContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    /**
     * Filter, which YongchaContract to fetch.
     */
    where?: YongchaContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YongchaContracts to fetch.
     */
    orderBy?: YongchaContractOrderByWithRelationInput | YongchaContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YongchaContracts.
     */
    cursor?: YongchaContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YongchaContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YongchaContracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YongchaContracts.
     */
    distinct?: YongchaContractScalarFieldEnum | YongchaContractScalarFieldEnum[]
  }

  /**
   * YongchaContract findMany
   */
  export type YongchaContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    /**
     * Filter, which YongchaContracts to fetch.
     */
    where?: YongchaContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YongchaContracts to fetch.
     */
    orderBy?: YongchaContractOrderByWithRelationInput | YongchaContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YongchaContracts.
     */
    cursor?: YongchaContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YongchaContracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YongchaContracts.
     */
    skip?: number
    distinct?: YongchaContractScalarFieldEnum | YongchaContractScalarFieldEnum[]
  }

  /**
   * YongchaContract create
   */
  export type YongchaContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    /**
     * The data needed to create a YongchaContract.
     */
    data: XOR<YongchaContractCreateInput, YongchaContractUncheckedCreateInput>
  }

  /**
   * YongchaContract createMany
   */
  export type YongchaContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YongchaContracts.
     */
    data: YongchaContractCreateManyInput | YongchaContractCreateManyInput[]
  }

  /**
   * YongchaContract createManyAndReturn
   */
  export type YongchaContractCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many YongchaContracts.
     */
    data: YongchaContractCreateManyInput | YongchaContractCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * YongchaContract update
   */
  export type YongchaContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    /**
     * The data needed to update a YongchaContract.
     */
    data: XOR<YongchaContractUpdateInput, YongchaContractUncheckedUpdateInput>
    /**
     * Choose, which YongchaContract to update.
     */
    where: YongchaContractWhereUniqueInput
  }

  /**
   * YongchaContract updateMany
   */
  export type YongchaContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YongchaContracts.
     */
    data: XOR<YongchaContractUpdateManyMutationInput, YongchaContractUncheckedUpdateManyInput>
    /**
     * Filter which YongchaContracts to update
     */
    where?: YongchaContractWhereInput
  }

  /**
   * YongchaContract upsert
   */
  export type YongchaContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    /**
     * The filter to search for the YongchaContract to update in case it exists.
     */
    where: YongchaContractWhereUniqueInput
    /**
     * In case the YongchaContract found by the `where` argument doesn't exist, create a new YongchaContract with this data.
     */
    create: XOR<YongchaContractCreateInput, YongchaContractUncheckedCreateInput>
    /**
     * In case the YongchaContract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YongchaContractUpdateInput, YongchaContractUncheckedUpdateInput>
  }

  /**
   * YongchaContract delete
   */
  export type YongchaContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
    /**
     * Filter which YongchaContract to delete.
     */
    where: YongchaContractWhereUniqueInput
  }

  /**
   * YongchaContract deleteMany
   */
  export type YongchaContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YongchaContracts to delete
     */
    where?: YongchaContractWhereInput
  }

  /**
   * YongchaContract.SettlementHistory
   */
  export type YongchaContract$SettlementHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SettlementHistory
     */
    select?: SettlementHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SettlementHistoryInclude<ExtArgs> | null
    where?: SettlementHistoryWhereInput
    orderBy?: SettlementHistoryOrderByWithRelationInput | SettlementHistoryOrderByWithRelationInput[]
    cursor?: SettlementHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SettlementHistoryScalarFieldEnum | SettlementHistoryScalarFieldEnum[]
  }

  /**
   * YongchaContract.YongchaRateDetail
   */
  export type YongchaContract$YongchaRateDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
    where?: YongchaRateDetailWhereInput
    orderBy?: YongchaRateDetailOrderByWithRelationInput | YongchaRateDetailOrderByWithRelationInput[]
    cursor?: YongchaRateDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: YongchaRateDetailScalarFieldEnum | YongchaRateDetailScalarFieldEnum[]
  }

  /**
   * YongchaContract without action
   */
  export type YongchaContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaContract
     */
    select?: YongchaContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaContractInclude<ExtArgs> | null
  }


  /**
   * Model YongchaRateDetail
   */

  export type AggregateYongchaRateDetail = {
    _count: YongchaRateDetailCountAggregateOutputType | null
    _avg: YongchaRateDetailAvgAggregateOutputType | null
    _sum: YongchaRateDetailSumAggregateOutputType | null
    _min: YongchaRateDetailMinAggregateOutputType | null
    _max: YongchaRateDetailMaxAggregateOutputType | null
  }

  export type YongchaRateDetailAvgAggregateOutputType = {
    id: number | null
    contractId: number | null
    price: number | null
  }

  export type YongchaRateDetailSumAggregateOutputType = {
    id: number | null
    contractId: number | null
    price: number | null
  }

  export type YongchaRateDetailMinAggregateOutputType = {
    id: number | null
    oldId: string | null
    contractId: number | null
    region: string | null
    price: number | null
    memo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YongchaRateDetailMaxAggregateOutputType = {
    id: number | null
    oldId: string | null
    contractId: number | null
    region: string | null
    price: number | null
    memo: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type YongchaRateDetailCountAggregateOutputType = {
    id: number
    oldId: number
    contractId: number
    region: number
    price: number
    memo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type YongchaRateDetailAvgAggregateInputType = {
    id?: true
    contractId?: true
    price?: true
  }

  export type YongchaRateDetailSumAggregateInputType = {
    id?: true
    contractId?: true
    price?: true
  }

  export type YongchaRateDetailMinAggregateInputType = {
    id?: true
    oldId?: true
    contractId?: true
    region?: true
    price?: true
    memo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YongchaRateDetailMaxAggregateInputType = {
    id?: true
    oldId?: true
    contractId?: true
    region?: true
    price?: true
    memo?: true
    createdAt?: true
    updatedAt?: true
  }

  export type YongchaRateDetailCountAggregateInputType = {
    id?: true
    oldId?: true
    contractId?: true
    region?: true
    price?: true
    memo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type YongchaRateDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YongchaRateDetail to aggregate.
     */
    where?: YongchaRateDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YongchaRateDetails to fetch.
     */
    orderBy?: YongchaRateDetailOrderByWithRelationInput | YongchaRateDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: YongchaRateDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YongchaRateDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YongchaRateDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned YongchaRateDetails
    **/
    _count?: true | YongchaRateDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: YongchaRateDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: YongchaRateDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: YongchaRateDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: YongchaRateDetailMaxAggregateInputType
  }

  export type GetYongchaRateDetailAggregateType<T extends YongchaRateDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateYongchaRateDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateYongchaRateDetail[P]>
      : GetScalarType<T[P], AggregateYongchaRateDetail[P]>
  }




  export type YongchaRateDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: YongchaRateDetailWhereInput
    orderBy?: YongchaRateDetailOrderByWithAggregationInput | YongchaRateDetailOrderByWithAggregationInput[]
    by: YongchaRateDetailScalarFieldEnum[] | YongchaRateDetailScalarFieldEnum
    having?: YongchaRateDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: YongchaRateDetailCountAggregateInputType | true
    _avg?: YongchaRateDetailAvgAggregateInputType
    _sum?: YongchaRateDetailSumAggregateInputType
    _min?: YongchaRateDetailMinAggregateInputType
    _max?: YongchaRateDetailMaxAggregateInputType
  }

  export type YongchaRateDetailGroupByOutputType = {
    id: number
    oldId: string | null
    contractId: number
    region: string
    price: number
    memo: string | null
    createdAt: Date
    updatedAt: Date
    _count: YongchaRateDetailCountAggregateOutputType | null
    _avg: YongchaRateDetailAvgAggregateOutputType | null
    _sum: YongchaRateDetailSumAggregateOutputType | null
    _min: YongchaRateDetailMinAggregateOutputType | null
    _max: YongchaRateDetailMaxAggregateOutputType | null
  }

  type GetYongchaRateDetailGroupByPayload<T extends YongchaRateDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<YongchaRateDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof YongchaRateDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], YongchaRateDetailGroupByOutputType[P]>
            : GetScalarType<T[P], YongchaRateDetailGroupByOutputType[P]>
        }
      >
    >


  export type YongchaRateDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    contractId?: boolean
    region?: boolean
    price?: boolean
    memo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    YongchaContract?: boolean | YongchaContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["yongchaRateDetail"]>

  export type YongchaRateDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    oldId?: boolean
    contractId?: boolean
    region?: boolean
    price?: boolean
    memo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    YongchaContract?: boolean | YongchaContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["yongchaRateDetail"]>

  export type YongchaRateDetailSelectScalar = {
    id?: boolean
    oldId?: boolean
    contractId?: boolean
    region?: boolean
    price?: boolean
    memo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type YongchaRateDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    YongchaContract?: boolean | YongchaContractDefaultArgs<ExtArgs>
  }
  export type YongchaRateDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    YongchaContract?: boolean | YongchaContractDefaultArgs<ExtArgs>
  }

  export type $YongchaRateDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "YongchaRateDetail"
    objects: {
      YongchaContract: Prisma.$YongchaContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      oldId: string | null
      contractId: number
      region: string
      price: number
      memo: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["yongchaRateDetail"]>
    composites: {}
  }

  type YongchaRateDetailGetPayload<S extends boolean | null | undefined | YongchaRateDetailDefaultArgs> = $Result.GetResult<Prisma.$YongchaRateDetailPayload, S>

  type YongchaRateDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<YongchaRateDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: YongchaRateDetailCountAggregateInputType | true
    }

  export interface YongchaRateDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['YongchaRateDetail'], meta: { name: 'YongchaRateDetail' } }
    /**
     * Find zero or one YongchaRateDetail that matches the filter.
     * @param {YongchaRateDetailFindUniqueArgs} args - Arguments to find a YongchaRateDetail
     * @example
     * // Get one YongchaRateDetail
     * const yongchaRateDetail = await prisma.yongchaRateDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends YongchaRateDetailFindUniqueArgs>(args: SelectSubset<T, YongchaRateDetailFindUniqueArgs<ExtArgs>>): Prisma__YongchaRateDetailClient<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one YongchaRateDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {YongchaRateDetailFindUniqueOrThrowArgs} args - Arguments to find a YongchaRateDetail
     * @example
     * // Get one YongchaRateDetail
     * const yongchaRateDetail = await prisma.yongchaRateDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends YongchaRateDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, YongchaRateDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__YongchaRateDetailClient<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first YongchaRateDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaRateDetailFindFirstArgs} args - Arguments to find a YongchaRateDetail
     * @example
     * // Get one YongchaRateDetail
     * const yongchaRateDetail = await prisma.yongchaRateDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends YongchaRateDetailFindFirstArgs>(args?: SelectSubset<T, YongchaRateDetailFindFirstArgs<ExtArgs>>): Prisma__YongchaRateDetailClient<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first YongchaRateDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaRateDetailFindFirstOrThrowArgs} args - Arguments to find a YongchaRateDetail
     * @example
     * // Get one YongchaRateDetail
     * const yongchaRateDetail = await prisma.yongchaRateDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends YongchaRateDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, YongchaRateDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__YongchaRateDetailClient<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more YongchaRateDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaRateDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all YongchaRateDetails
     * const yongchaRateDetails = await prisma.yongchaRateDetail.findMany()
     * 
     * // Get first 10 YongchaRateDetails
     * const yongchaRateDetails = await prisma.yongchaRateDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const yongchaRateDetailWithIdOnly = await prisma.yongchaRateDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends YongchaRateDetailFindManyArgs>(args?: SelectSubset<T, YongchaRateDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a YongchaRateDetail.
     * @param {YongchaRateDetailCreateArgs} args - Arguments to create a YongchaRateDetail.
     * @example
     * // Create one YongchaRateDetail
     * const YongchaRateDetail = await prisma.yongchaRateDetail.create({
     *   data: {
     *     // ... data to create a YongchaRateDetail
     *   }
     * })
     * 
     */
    create<T extends YongchaRateDetailCreateArgs>(args: SelectSubset<T, YongchaRateDetailCreateArgs<ExtArgs>>): Prisma__YongchaRateDetailClient<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many YongchaRateDetails.
     * @param {YongchaRateDetailCreateManyArgs} args - Arguments to create many YongchaRateDetails.
     * @example
     * // Create many YongchaRateDetails
     * const yongchaRateDetail = await prisma.yongchaRateDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends YongchaRateDetailCreateManyArgs>(args?: SelectSubset<T, YongchaRateDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many YongchaRateDetails and returns the data saved in the database.
     * @param {YongchaRateDetailCreateManyAndReturnArgs} args - Arguments to create many YongchaRateDetails.
     * @example
     * // Create many YongchaRateDetails
     * const yongchaRateDetail = await prisma.yongchaRateDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many YongchaRateDetails and only return the `id`
     * const yongchaRateDetailWithIdOnly = await prisma.yongchaRateDetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends YongchaRateDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, YongchaRateDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a YongchaRateDetail.
     * @param {YongchaRateDetailDeleteArgs} args - Arguments to delete one YongchaRateDetail.
     * @example
     * // Delete one YongchaRateDetail
     * const YongchaRateDetail = await prisma.yongchaRateDetail.delete({
     *   where: {
     *     // ... filter to delete one YongchaRateDetail
     *   }
     * })
     * 
     */
    delete<T extends YongchaRateDetailDeleteArgs>(args: SelectSubset<T, YongchaRateDetailDeleteArgs<ExtArgs>>): Prisma__YongchaRateDetailClient<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one YongchaRateDetail.
     * @param {YongchaRateDetailUpdateArgs} args - Arguments to update one YongchaRateDetail.
     * @example
     * // Update one YongchaRateDetail
     * const yongchaRateDetail = await prisma.yongchaRateDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends YongchaRateDetailUpdateArgs>(args: SelectSubset<T, YongchaRateDetailUpdateArgs<ExtArgs>>): Prisma__YongchaRateDetailClient<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more YongchaRateDetails.
     * @param {YongchaRateDetailDeleteManyArgs} args - Arguments to filter YongchaRateDetails to delete.
     * @example
     * // Delete a few YongchaRateDetails
     * const { count } = await prisma.yongchaRateDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends YongchaRateDetailDeleteManyArgs>(args?: SelectSubset<T, YongchaRateDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more YongchaRateDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaRateDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many YongchaRateDetails
     * const yongchaRateDetail = await prisma.yongchaRateDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends YongchaRateDetailUpdateManyArgs>(args: SelectSubset<T, YongchaRateDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one YongchaRateDetail.
     * @param {YongchaRateDetailUpsertArgs} args - Arguments to update or create a YongchaRateDetail.
     * @example
     * // Update or create a YongchaRateDetail
     * const yongchaRateDetail = await prisma.yongchaRateDetail.upsert({
     *   create: {
     *     // ... data to create a YongchaRateDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the YongchaRateDetail we want to update
     *   }
     * })
     */
    upsert<T extends YongchaRateDetailUpsertArgs>(args: SelectSubset<T, YongchaRateDetailUpsertArgs<ExtArgs>>): Prisma__YongchaRateDetailClient<$Result.GetResult<Prisma.$YongchaRateDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of YongchaRateDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaRateDetailCountArgs} args - Arguments to filter YongchaRateDetails to count.
     * @example
     * // Count the number of YongchaRateDetails
     * const count = await prisma.yongchaRateDetail.count({
     *   where: {
     *     // ... the filter for the YongchaRateDetails we want to count
     *   }
     * })
    **/
    count<T extends YongchaRateDetailCountArgs>(
      args?: Subset<T, YongchaRateDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], YongchaRateDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a YongchaRateDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaRateDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends YongchaRateDetailAggregateArgs>(args: Subset<T, YongchaRateDetailAggregateArgs>): Prisma.PrismaPromise<GetYongchaRateDetailAggregateType<T>>

    /**
     * Group by YongchaRateDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {YongchaRateDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends YongchaRateDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: YongchaRateDetailGroupByArgs['orderBy'] }
        : { orderBy?: YongchaRateDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, YongchaRateDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetYongchaRateDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the YongchaRateDetail model
   */
  readonly fields: YongchaRateDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for YongchaRateDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__YongchaRateDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    YongchaContract<T extends YongchaContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, YongchaContractDefaultArgs<ExtArgs>>): Prisma__YongchaContractClient<$Result.GetResult<Prisma.$YongchaContractPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the YongchaRateDetail model
   */ 
  interface YongchaRateDetailFieldRefs {
    readonly id: FieldRef<"YongchaRateDetail", 'Int'>
    readonly oldId: FieldRef<"YongchaRateDetail", 'String'>
    readonly contractId: FieldRef<"YongchaRateDetail", 'Int'>
    readonly region: FieldRef<"YongchaRateDetail", 'String'>
    readonly price: FieldRef<"YongchaRateDetail", 'Int'>
    readonly memo: FieldRef<"YongchaRateDetail", 'String'>
    readonly createdAt: FieldRef<"YongchaRateDetail", 'DateTime'>
    readonly updatedAt: FieldRef<"YongchaRateDetail", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * YongchaRateDetail findUnique
   */
  export type YongchaRateDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
    /**
     * Filter, which YongchaRateDetail to fetch.
     */
    where: YongchaRateDetailWhereUniqueInput
  }

  /**
   * YongchaRateDetail findUniqueOrThrow
   */
  export type YongchaRateDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
    /**
     * Filter, which YongchaRateDetail to fetch.
     */
    where: YongchaRateDetailWhereUniqueInput
  }

  /**
   * YongchaRateDetail findFirst
   */
  export type YongchaRateDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
    /**
     * Filter, which YongchaRateDetail to fetch.
     */
    where?: YongchaRateDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YongchaRateDetails to fetch.
     */
    orderBy?: YongchaRateDetailOrderByWithRelationInput | YongchaRateDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YongchaRateDetails.
     */
    cursor?: YongchaRateDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YongchaRateDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YongchaRateDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YongchaRateDetails.
     */
    distinct?: YongchaRateDetailScalarFieldEnum | YongchaRateDetailScalarFieldEnum[]
  }

  /**
   * YongchaRateDetail findFirstOrThrow
   */
  export type YongchaRateDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
    /**
     * Filter, which YongchaRateDetail to fetch.
     */
    where?: YongchaRateDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YongchaRateDetails to fetch.
     */
    orderBy?: YongchaRateDetailOrderByWithRelationInput | YongchaRateDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for YongchaRateDetails.
     */
    cursor?: YongchaRateDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YongchaRateDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YongchaRateDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of YongchaRateDetails.
     */
    distinct?: YongchaRateDetailScalarFieldEnum | YongchaRateDetailScalarFieldEnum[]
  }

  /**
   * YongchaRateDetail findMany
   */
  export type YongchaRateDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
    /**
     * Filter, which YongchaRateDetails to fetch.
     */
    where?: YongchaRateDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of YongchaRateDetails to fetch.
     */
    orderBy?: YongchaRateDetailOrderByWithRelationInput | YongchaRateDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing YongchaRateDetails.
     */
    cursor?: YongchaRateDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` YongchaRateDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` YongchaRateDetails.
     */
    skip?: number
    distinct?: YongchaRateDetailScalarFieldEnum | YongchaRateDetailScalarFieldEnum[]
  }

  /**
   * YongchaRateDetail create
   */
  export type YongchaRateDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a YongchaRateDetail.
     */
    data: XOR<YongchaRateDetailCreateInput, YongchaRateDetailUncheckedCreateInput>
  }

  /**
   * YongchaRateDetail createMany
   */
  export type YongchaRateDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many YongchaRateDetails.
     */
    data: YongchaRateDetailCreateManyInput | YongchaRateDetailCreateManyInput[]
  }

  /**
   * YongchaRateDetail createManyAndReturn
   */
  export type YongchaRateDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many YongchaRateDetails.
     */
    data: YongchaRateDetailCreateManyInput | YongchaRateDetailCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * YongchaRateDetail update
   */
  export type YongchaRateDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a YongchaRateDetail.
     */
    data: XOR<YongchaRateDetailUpdateInput, YongchaRateDetailUncheckedUpdateInput>
    /**
     * Choose, which YongchaRateDetail to update.
     */
    where: YongchaRateDetailWhereUniqueInput
  }

  /**
   * YongchaRateDetail updateMany
   */
  export type YongchaRateDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update YongchaRateDetails.
     */
    data: XOR<YongchaRateDetailUpdateManyMutationInput, YongchaRateDetailUncheckedUpdateManyInput>
    /**
     * Filter which YongchaRateDetails to update
     */
    where?: YongchaRateDetailWhereInput
  }

  /**
   * YongchaRateDetail upsert
   */
  export type YongchaRateDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the YongchaRateDetail to update in case it exists.
     */
    where: YongchaRateDetailWhereUniqueInput
    /**
     * In case the YongchaRateDetail found by the `where` argument doesn't exist, create a new YongchaRateDetail with this data.
     */
    create: XOR<YongchaRateDetailCreateInput, YongchaRateDetailUncheckedCreateInput>
    /**
     * In case the YongchaRateDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<YongchaRateDetailUpdateInput, YongchaRateDetailUncheckedUpdateInput>
  }

  /**
   * YongchaRateDetail delete
   */
  export type YongchaRateDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
    /**
     * Filter which YongchaRateDetail to delete.
     */
    where: YongchaRateDetailWhereUniqueInput
  }

  /**
   * YongchaRateDetail deleteMany
   */
  export type YongchaRateDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which YongchaRateDetails to delete
     */
    where?: YongchaRateDetailWhereInput
  }

  /**
   * YongchaRateDetail without action
   */
  export type YongchaRateDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the YongchaRateDetail
     */
    select?: YongchaRateDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: YongchaRateDetailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DriverScalarFieldEnum: {
    id: 'id',
    oldId: 'oldId',
    name: 'name',
    affiliationId: 'affiliationId',
    carNo: 'carNo',
    tonnage: 'tonnage',
    phone: 'phone',
    regDate: 'regDate',
    address: 'address',
    memo: 'memo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const SettlementHistoryScalarFieldEnum: {
    id: 'id',
    oldId: 'oldId',
    date: 'date',
    driverName: 'driverName',
    affiliation: 'affiliation',
    tonnage: 'tonnage',
    destCount: 'destCount',
    totalWeight: 'totalWeight',
    fee: 'fee',
    memo: 'memo',
    status: 'status',
    isPbox: 'isPbox',
    isReturn: 'isReturn',
    so: 'so',
    nap: 'nap',
    ton: 'ton',
    contractId: 'contractId',
    createdAt: 'createdAt',
    appliedTonnage: 'appliedTonnage',
    gwon: 'gwon',
    originalFee: 'originalFee'
  };

  export type SettlementHistoryScalarFieldEnum = (typeof SettlementHistoryScalarFieldEnum)[keyof typeof SettlementHistoryScalarFieldEnum]


  export const AffiliationScalarFieldEnum: {
    id: 'id',
    oldId: 'oldId',
    name: 'name',
    bizNo: 'bizNo',
    ceo: 'ceo',
    address: 'address',
    manager: 'manager',
    contact: 'contact',
    email: 'email',
    memo: 'memo',
    createdAt: 'createdAt'
  };

  export type AffiliationScalarFieldEnum = (typeof AffiliationScalarFieldEnum)[keyof typeof AffiliationScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    oldId: 'oldId',
    loginId: 'loginId',
    password: 'password',
    name: 'name',
    role: 'role',
    affiliationId: 'affiliationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const YongchaContractScalarFieldEnum: {
    id: 'id',
    oldId: 'oldId',
    year: 'year',
    affiliationId: 'affiliationId',
    startDate: 'startDate',
    endDate: 'endDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    memo: 'memo'
  };

  export type YongchaContractScalarFieldEnum = (typeof YongchaContractScalarFieldEnum)[keyof typeof YongchaContractScalarFieldEnum]


  export const YongchaRateDetailScalarFieldEnum: {
    id: 'id',
    oldId: 'oldId',
    contractId: 'contractId',
    region: 'region',
    price: 'price',
    memo: 'memo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type YongchaRateDetailScalarFieldEnum = (typeof YongchaRateDetailScalarFieldEnum)[keyof typeof YongchaRateDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: IntFilter<"Driver"> | number
    oldId?: StringNullableFilter<"Driver"> | string | null
    name?: StringFilter<"Driver"> | string
    affiliationId?: IntNullableFilter<"Driver"> | number | null
    carNo?: StringNullableFilter<"Driver"> | string | null
    tonnage?: StringNullableFilter<"Driver"> | string | null
    phone?: StringNullableFilter<"Driver"> | string | null
    regDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    address?: StringNullableFilter<"Driver"> | string | null
    memo?: StringNullableFilter<"Driver"> | string | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    Affiliation?: XOR<AffiliationNullableRelationFilter, AffiliationWhereInput> | null
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    name?: SortOrder
    affiliationId?: SortOrderInput | SortOrder
    carNo?: SortOrderInput | SortOrder
    tonnage?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    regDate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Affiliation?: AffiliationOrderByWithRelationInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    oldId?: StringNullableFilter<"Driver"> | string | null
    name?: StringFilter<"Driver"> | string
    affiliationId?: IntNullableFilter<"Driver"> | number | null
    carNo?: StringNullableFilter<"Driver"> | string | null
    tonnage?: StringNullableFilter<"Driver"> | string | null
    phone?: StringNullableFilter<"Driver"> | string | null
    regDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    address?: StringNullableFilter<"Driver"> | string | null
    memo?: StringNullableFilter<"Driver"> | string | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    Affiliation?: XOR<AffiliationNullableRelationFilter, AffiliationWhereInput> | null
  }, "id">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    name?: SortOrder
    affiliationId?: SortOrderInput | SortOrder
    carNo?: SortOrderInput | SortOrder
    tonnage?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    regDate?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Driver"> | number
    oldId?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    name?: StringWithAggregatesFilter<"Driver"> | string
    affiliationId?: IntNullableWithAggregatesFilter<"Driver"> | number | null
    carNo?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    tonnage?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    regDate?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    memo?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
  }

  export type SettlementHistoryWhereInput = {
    AND?: SettlementHistoryWhereInput | SettlementHistoryWhereInput[]
    OR?: SettlementHistoryWhereInput[]
    NOT?: SettlementHistoryWhereInput | SettlementHistoryWhereInput[]
    id?: IntFilter<"SettlementHistory"> | number
    oldId?: StringNullableFilter<"SettlementHistory"> | string | null
    date?: DateTimeFilter<"SettlementHistory"> | Date | string
    driverName?: StringFilter<"SettlementHistory"> | string
    affiliation?: StringNullableFilter<"SettlementHistory"> | string | null
    tonnage?: StringNullableFilter<"SettlementHistory"> | string | null
    destCount?: IntFilter<"SettlementHistory"> | number
    totalWeight?: IntFilter<"SettlementHistory"> | number
    fee?: IntFilter<"SettlementHistory"> | number
    memo?: StringNullableFilter<"SettlementHistory"> | string | null
    status?: StringFilter<"SettlementHistory"> | string
    isPbox?: BoolFilter<"SettlementHistory"> | boolean
    isReturn?: BoolFilter<"SettlementHistory"> | boolean
    so?: StringNullableFilter<"SettlementHistory"> | string | null
    nap?: StringNullableFilter<"SettlementHistory"> | string | null
    ton?: IntNullableFilter<"SettlementHistory"> | number | null
    contractId?: IntNullableFilter<"SettlementHistory"> | number | null
    createdAt?: DateTimeFilter<"SettlementHistory"> | Date | string
    appliedTonnage?: StringNullableFilter<"SettlementHistory"> | string | null
    gwon?: IntNullableFilter<"SettlementHistory"> | number | null
    originalFee?: IntFilter<"SettlementHistory"> | number
    YongchaContract?: XOR<YongchaContractNullableRelationFilter, YongchaContractWhereInput> | null
  }

  export type SettlementHistoryOrderByWithRelationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    date?: SortOrder
    driverName?: SortOrder
    affiliation?: SortOrderInput | SortOrder
    tonnage?: SortOrderInput | SortOrder
    destCount?: SortOrder
    totalWeight?: SortOrder
    fee?: SortOrder
    memo?: SortOrderInput | SortOrder
    status?: SortOrder
    isPbox?: SortOrder
    isReturn?: SortOrder
    so?: SortOrderInput | SortOrder
    nap?: SortOrderInput | SortOrder
    ton?: SortOrderInput | SortOrder
    contractId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    appliedTonnage?: SortOrderInput | SortOrder
    gwon?: SortOrderInput | SortOrder
    originalFee?: SortOrder
    YongchaContract?: YongchaContractOrderByWithRelationInput
  }

  export type SettlementHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SettlementHistoryWhereInput | SettlementHistoryWhereInput[]
    OR?: SettlementHistoryWhereInput[]
    NOT?: SettlementHistoryWhereInput | SettlementHistoryWhereInput[]
    oldId?: StringNullableFilter<"SettlementHistory"> | string | null
    date?: DateTimeFilter<"SettlementHistory"> | Date | string
    driverName?: StringFilter<"SettlementHistory"> | string
    affiliation?: StringNullableFilter<"SettlementHistory"> | string | null
    tonnage?: StringNullableFilter<"SettlementHistory"> | string | null
    destCount?: IntFilter<"SettlementHistory"> | number
    totalWeight?: IntFilter<"SettlementHistory"> | number
    fee?: IntFilter<"SettlementHistory"> | number
    memo?: StringNullableFilter<"SettlementHistory"> | string | null
    status?: StringFilter<"SettlementHistory"> | string
    isPbox?: BoolFilter<"SettlementHistory"> | boolean
    isReturn?: BoolFilter<"SettlementHistory"> | boolean
    so?: StringNullableFilter<"SettlementHistory"> | string | null
    nap?: StringNullableFilter<"SettlementHistory"> | string | null
    ton?: IntNullableFilter<"SettlementHistory"> | number | null
    contractId?: IntNullableFilter<"SettlementHistory"> | number | null
    createdAt?: DateTimeFilter<"SettlementHistory"> | Date | string
    appliedTonnage?: StringNullableFilter<"SettlementHistory"> | string | null
    gwon?: IntNullableFilter<"SettlementHistory"> | number | null
    originalFee?: IntFilter<"SettlementHistory"> | number
    YongchaContract?: XOR<YongchaContractNullableRelationFilter, YongchaContractWhereInput> | null
  }, "id">

  export type SettlementHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    date?: SortOrder
    driverName?: SortOrder
    affiliation?: SortOrderInput | SortOrder
    tonnage?: SortOrderInput | SortOrder
    destCount?: SortOrder
    totalWeight?: SortOrder
    fee?: SortOrder
    memo?: SortOrderInput | SortOrder
    status?: SortOrder
    isPbox?: SortOrder
    isReturn?: SortOrder
    so?: SortOrderInput | SortOrder
    nap?: SortOrderInput | SortOrder
    ton?: SortOrderInput | SortOrder
    contractId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    appliedTonnage?: SortOrderInput | SortOrder
    gwon?: SortOrderInput | SortOrder
    originalFee?: SortOrder
    _count?: SettlementHistoryCountOrderByAggregateInput
    _avg?: SettlementHistoryAvgOrderByAggregateInput
    _max?: SettlementHistoryMaxOrderByAggregateInput
    _min?: SettlementHistoryMinOrderByAggregateInput
    _sum?: SettlementHistorySumOrderByAggregateInput
  }

  export type SettlementHistoryScalarWhereWithAggregatesInput = {
    AND?: SettlementHistoryScalarWhereWithAggregatesInput | SettlementHistoryScalarWhereWithAggregatesInput[]
    OR?: SettlementHistoryScalarWhereWithAggregatesInput[]
    NOT?: SettlementHistoryScalarWhereWithAggregatesInput | SettlementHistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SettlementHistory"> | number
    oldId?: StringNullableWithAggregatesFilter<"SettlementHistory"> | string | null
    date?: DateTimeWithAggregatesFilter<"SettlementHistory"> | Date | string
    driverName?: StringWithAggregatesFilter<"SettlementHistory"> | string
    affiliation?: StringNullableWithAggregatesFilter<"SettlementHistory"> | string | null
    tonnage?: StringNullableWithAggregatesFilter<"SettlementHistory"> | string | null
    destCount?: IntWithAggregatesFilter<"SettlementHistory"> | number
    totalWeight?: IntWithAggregatesFilter<"SettlementHistory"> | number
    fee?: IntWithAggregatesFilter<"SettlementHistory"> | number
    memo?: StringNullableWithAggregatesFilter<"SettlementHistory"> | string | null
    status?: StringWithAggregatesFilter<"SettlementHistory"> | string
    isPbox?: BoolWithAggregatesFilter<"SettlementHistory"> | boolean
    isReturn?: BoolWithAggregatesFilter<"SettlementHistory"> | boolean
    so?: StringNullableWithAggregatesFilter<"SettlementHistory"> | string | null
    nap?: StringNullableWithAggregatesFilter<"SettlementHistory"> | string | null
    ton?: IntNullableWithAggregatesFilter<"SettlementHistory"> | number | null
    contractId?: IntNullableWithAggregatesFilter<"SettlementHistory"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"SettlementHistory"> | Date | string
    appliedTonnage?: StringNullableWithAggregatesFilter<"SettlementHistory"> | string | null
    gwon?: IntNullableWithAggregatesFilter<"SettlementHistory"> | number | null
    originalFee?: IntWithAggregatesFilter<"SettlementHistory"> | number
  }

  export type AffiliationWhereInput = {
    AND?: AffiliationWhereInput | AffiliationWhereInput[]
    OR?: AffiliationWhereInput[]
    NOT?: AffiliationWhereInput | AffiliationWhereInput[]
    id?: IntFilter<"Affiliation"> | number
    oldId?: StringNullableFilter<"Affiliation"> | string | null
    name?: StringFilter<"Affiliation"> | string
    bizNo?: StringNullableFilter<"Affiliation"> | string | null
    ceo?: StringNullableFilter<"Affiliation"> | string | null
    address?: StringNullableFilter<"Affiliation"> | string | null
    manager?: StringNullableFilter<"Affiliation"> | string | null
    contact?: StringNullableFilter<"Affiliation"> | string | null
    email?: StringNullableFilter<"Affiliation"> | string | null
    memo?: StringNullableFilter<"Affiliation"> | string | null
    createdAt?: DateTimeFilter<"Affiliation"> | Date | string
    Driver?: DriverListRelationFilter
    YongchaContract?: YongchaContractListRelationFilter
    User?: UserListRelationFilter
  }

  export type AffiliationOrderByWithRelationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    name?: SortOrder
    bizNo?: SortOrderInput | SortOrder
    ceo?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    manager?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    Driver?: DriverOrderByRelationAggregateInput
    YongchaContract?: YongchaContractOrderByRelationAggregateInput
    User?: UserOrderByRelationAggregateInput
  }

  export type AffiliationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: AffiliationWhereInput | AffiliationWhereInput[]
    OR?: AffiliationWhereInput[]
    NOT?: AffiliationWhereInput | AffiliationWhereInput[]
    oldId?: StringNullableFilter<"Affiliation"> | string | null
    bizNo?: StringNullableFilter<"Affiliation"> | string | null
    ceo?: StringNullableFilter<"Affiliation"> | string | null
    address?: StringNullableFilter<"Affiliation"> | string | null
    manager?: StringNullableFilter<"Affiliation"> | string | null
    contact?: StringNullableFilter<"Affiliation"> | string | null
    email?: StringNullableFilter<"Affiliation"> | string | null
    memo?: StringNullableFilter<"Affiliation"> | string | null
    createdAt?: DateTimeFilter<"Affiliation"> | Date | string
    Driver?: DriverListRelationFilter
    YongchaContract?: YongchaContractListRelationFilter
    User?: UserListRelationFilter
  }, "id" | "name">

  export type AffiliationOrderByWithAggregationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    name?: SortOrder
    bizNo?: SortOrderInput | SortOrder
    ceo?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    manager?: SortOrderInput | SortOrder
    contact?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AffiliationCountOrderByAggregateInput
    _avg?: AffiliationAvgOrderByAggregateInput
    _max?: AffiliationMaxOrderByAggregateInput
    _min?: AffiliationMinOrderByAggregateInput
    _sum?: AffiliationSumOrderByAggregateInput
  }

  export type AffiliationScalarWhereWithAggregatesInput = {
    AND?: AffiliationScalarWhereWithAggregatesInput | AffiliationScalarWhereWithAggregatesInput[]
    OR?: AffiliationScalarWhereWithAggregatesInput[]
    NOT?: AffiliationScalarWhereWithAggregatesInput | AffiliationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Affiliation"> | number
    oldId?: StringNullableWithAggregatesFilter<"Affiliation"> | string | null
    name?: StringWithAggregatesFilter<"Affiliation"> | string
    bizNo?: StringNullableWithAggregatesFilter<"Affiliation"> | string | null
    ceo?: StringNullableWithAggregatesFilter<"Affiliation"> | string | null
    address?: StringNullableWithAggregatesFilter<"Affiliation"> | string | null
    manager?: StringNullableWithAggregatesFilter<"Affiliation"> | string | null
    contact?: StringNullableWithAggregatesFilter<"Affiliation"> | string | null
    email?: StringNullableWithAggregatesFilter<"Affiliation"> | string | null
    memo?: StringNullableWithAggregatesFilter<"Affiliation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Affiliation"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    oldId?: StringNullableFilter<"User"> | string | null
    loginId?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    affiliationId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Affiliation?: XOR<AffiliationNullableRelationFilter, AffiliationWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    loginId?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    affiliationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Affiliation?: AffiliationOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    loginId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    oldId?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    affiliationId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Affiliation?: XOR<AffiliationNullableRelationFilter, AffiliationWhereInput> | null
  }, "id" | "loginId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    loginId?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    affiliationId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    oldId?: StringNullableWithAggregatesFilter<"User"> | string | null
    loginId?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    affiliationId?: IntNullableWithAggregatesFilter<"User"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type YongchaContractWhereInput = {
    AND?: YongchaContractWhereInput | YongchaContractWhereInput[]
    OR?: YongchaContractWhereInput[]
    NOT?: YongchaContractWhereInput | YongchaContractWhereInput[]
    id?: IntFilter<"YongchaContract"> | number
    oldId?: StringNullableFilter<"YongchaContract"> | string | null
    year?: IntFilter<"YongchaContract"> | number
    affiliationId?: IntFilter<"YongchaContract"> | number
    startDate?: DateTimeFilter<"YongchaContract"> | Date | string
    endDate?: DateTimeFilter<"YongchaContract"> | Date | string
    status?: StringFilter<"YongchaContract"> | string
    createdAt?: DateTimeFilter<"YongchaContract"> | Date | string
    updatedAt?: DateTimeFilter<"YongchaContract"> | Date | string
    memo?: StringNullableFilter<"YongchaContract"> | string | null
    SettlementHistory?: SettlementHistoryListRelationFilter
    Affiliation?: XOR<AffiliationRelationFilter, AffiliationWhereInput>
    YongchaRateDetail?: YongchaRateDetailListRelationFilter
  }

  export type YongchaContractOrderByWithRelationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    year?: SortOrder
    affiliationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memo?: SortOrderInput | SortOrder
    SettlementHistory?: SettlementHistoryOrderByRelationAggregateInput
    Affiliation?: AffiliationOrderByWithRelationInput
    YongchaRateDetail?: YongchaRateDetailOrderByRelationAggregateInput
  }

  export type YongchaContractWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: YongchaContractWhereInput | YongchaContractWhereInput[]
    OR?: YongchaContractWhereInput[]
    NOT?: YongchaContractWhereInput | YongchaContractWhereInput[]
    oldId?: StringNullableFilter<"YongchaContract"> | string | null
    year?: IntFilter<"YongchaContract"> | number
    affiliationId?: IntFilter<"YongchaContract"> | number
    startDate?: DateTimeFilter<"YongchaContract"> | Date | string
    endDate?: DateTimeFilter<"YongchaContract"> | Date | string
    status?: StringFilter<"YongchaContract"> | string
    createdAt?: DateTimeFilter<"YongchaContract"> | Date | string
    updatedAt?: DateTimeFilter<"YongchaContract"> | Date | string
    memo?: StringNullableFilter<"YongchaContract"> | string | null
    SettlementHistory?: SettlementHistoryListRelationFilter
    Affiliation?: XOR<AffiliationRelationFilter, AffiliationWhereInput>
    YongchaRateDetail?: YongchaRateDetailListRelationFilter
  }, "id">

  export type YongchaContractOrderByWithAggregationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    year?: SortOrder
    affiliationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memo?: SortOrderInput | SortOrder
    _count?: YongchaContractCountOrderByAggregateInput
    _avg?: YongchaContractAvgOrderByAggregateInput
    _max?: YongchaContractMaxOrderByAggregateInput
    _min?: YongchaContractMinOrderByAggregateInput
    _sum?: YongchaContractSumOrderByAggregateInput
  }

  export type YongchaContractScalarWhereWithAggregatesInput = {
    AND?: YongchaContractScalarWhereWithAggregatesInput | YongchaContractScalarWhereWithAggregatesInput[]
    OR?: YongchaContractScalarWhereWithAggregatesInput[]
    NOT?: YongchaContractScalarWhereWithAggregatesInput | YongchaContractScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"YongchaContract"> | number
    oldId?: StringNullableWithAggregatesFilter<"YongchaContract"> | string | null
    year?: IntWithAggregatesFilter<"YongchaContract"> | number
    affiliationId?: IntWithAggregatesFilter<"YongchaContract"> | number
    startDate?: DateTimeWithAggregatesFilter<"YongchaContract"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"YongchaContract"> | Date | string
    status?: StringWithAggregatesFilter<"YongchaContract"> | string
    createdAt?: DateTimeWithAggregatesFilter<"YongchaContract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"YongchaContract"> | Date | string
    memo?: StringNullableWithAggregatesFilter<"YongchaContract"> | string | null
  }

  export type YongchaRateDetailWhereInput = {
    AND?: YongchaRateDetailWhereInput | YongchaRateDetailWhereInput[]
    OR?: YongchaRateDetailWhereInput[]
    NOT?: YongchaRateDetailWhereInput | YongchaRateDetailWhereInput[]
    id?: IntFilter<"YongchaRateDetail"> | number
    oldId?: StringNullableFilter<"YongchaRateDetail"> | string | null
    contractId?: IntFilter<"YongchaRateDetail"> | number
    region?: StringFilter<"YongchaRateDetail"> | string
    price?: IntFilter<"YongchaRateDetail"> | number
    memo?: StringNullableFilter<"YongchaRateDetail"> | string | null
    createdAt?: DateTimeFilter<"YongchaRateDetail"> | Date | string
    updatedAt?: DateTimeFilter<"YongchaRateDetail"> | Date | string
    YongchaContract?: XOR<YongchaContractRelationFilter, YongchaContractWhereInput>
  }

  export type YongchaRateDetailOrderByWithRelationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    contractId?: SortOrder
    region?: SortOrder
    price?: SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    YongchaContract?: YongchaContractOrderByWithRelationInput
  }

  export type YongchaRateDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: YongchaRateDetailWhereInput | YongchaRateDetailWhereInput[]
    OR?: YongchaRateDetailWhereInput[]
    NOT?: YongchaRateDetailWhereInput | YongchaRateDetailWhereInput[]
    oldId?: StringNullableFilter<"YongchaRateDetail"> | string | null
    contractId?: IntFilter<"YongchaRateDetail"> | number
    region?: StringFilter<"YongchaRateDetail"> | string
    price?: IntFilter<"YongchaRateDetail"> | number
    memo?: StringNullableFilter<"YongchaRateDetail"> | string | null
    createdAt?: DateTimeFilter<"YongchaRateDetail"> | Date | string
    updatedAt?: DateTimeFilter<"YongchaRateDetail"> | Date | string
    YongchaContract?: XOR<YongchaContractRelationFilter, YongchaContractWhereInput>
  }, "id">

  export type YongchaRateDetailOrderByWithAggregationInput = {
    id?: SortOrder
    oldId?: SortOrderInput | SortOrder
    contractId?: SortOrder
    region?: SortOrder
    price?: SortOrder
    memo?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: YongchaRateDetailCountOrderByAggregateInput
    _avg?: YongchaRateDetailAvgOrderByAggregateInput
    _max?: YongchaRateDetailMaxOrderByAggregateInput
    _min?: YongchaRateDetailMinOrderByAggregateInput
    _sum?: YongchaRateDetailSumOrderByAggregateInput
  }

  export type YongchaRateDetailScalarWhereWithAggregatesInput = {
    AND?: YongchaRateDetailScalarWhereWithAggregatesInput | YongchaRateDetailScalarWhereWithAggregatesInput[]
    OR?: YongchaRateDetailScalarWhereWithAggregatesInput[]
    NOT?: YongchaRateDetailScalarWhereWithAggregatesInput | YongchaRateDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"YongchaRateDetail"> | number
    oldId?: StringNullableWithAggregatesFilter<"YongchaRateDetail"> | string | null
    contractId?: IntWithAggregatesFilter<"YongchaRateDetail"> | number
    region?: StringWithAggregatesFilter<"YongchaRateDetail"> | string
    price?: IntWithAggregatesFilter<"YongchaRateDetail"> | number
    memo?: StringNullableWithAggregatesFilter<"YongchaRateDetail"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"YongchaRateDetail"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"YongchaRateDetail"> | Date | string
  }

  export type DriverCreateInput = {
    oldId?: string | null
    name: string
    carNo?: string | null
    tonnage?: string | null
    phone?: string | null
    regDate?: Date | string | null
    address?: string | null
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Affiliation?: AffiliationCreateNestedOneWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: number
    oldId?: string | null
    name: string
    affiliationId?: number | null
    carNo?: string | null
    tonnage?: string | null
    phone?: string | null
    regDate?: Date | string | null
    address?: string | null
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    carNo?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    regDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Affiliation?: AffiliationUpdateOneWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    affiliationId?: NullableIntFieldUpdateOperationsInput | number | null
    carNo?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    regDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateManyInput = {
    id?: number
    oldId?: string | null
    name: string
    affiliationId?: number | null
    carNo?: string | null
    tonnage?: string | null
    phone?: string | null
    regDate?: Date | string | null
    address?: string | null
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateManyMutationInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    carNo?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    regDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    affiliationId?: NullableIntFieldUpdateOperationsInput | number | null
    carNo?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    regDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementHistoryCreateInput = {
    oldId?: string | null
    date: Date | string
    driverName: string
    affiliation?: string | null
    tonnage?: string | null
    destCount: number
    totalWeight: number
    fee: number
    memo?: string | null
    status?: string
    isPbox?: boolean
    isReturn?: boolean
    so?: string | null
    nap?: string | null
    ton?: number | null
    createdAt?: Date | string
    appliedTonnage?: string | null
    gwon?: number | null
    originalFee?: number
    YongchaContract?: YongchaContractCreateNestedOneWithoutSettlementHistoryInput
  }

  export type SettlementHistoryUncheckedCreateInput = {
    id?: number
    oldId?: string | null
    date: Date | string
    driverName: string
    affiliation?: string | null
    tonnage?: string | null
    destCount: number
    totalWeight: number
    fee: number
    memo?: string | null
    status?: string
    isPbox?: boolean
    isReturn?: boolean
    so?: string | null
    nap?: string | null
    ton?: number | null
    contractId?: number | null
    createdAt?: Date | string
    appliedTonnage?: string | null
    gwon?: number | null
    originalFee?: number
  }

  export type SettlementHistoryUpdateInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    driverName?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    destCount?: IntFieldUpdateOperationsInput | number
    totalWeight?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isPbox?: BoolFieldUpdateOperationsInput | boolean
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    so?: NullableStringFieldUpdateOperationsInput | string | null
    nap?: NullableStringFieldUpdateOperationsInput | string | null
    ton?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedTonnage?: NullableStringFieldUpdateOperationsInput | string | null
    gwon?: NullableIntFieldUpdateOperationsInput | number | null
    originalFee?: IntFieldUpdateOperationsInput | number
    YongchaContract?: YongchaContractUpdateOneWithoutSettlementHistoryNestedInput
  }

  export type SettlementHistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    driverName?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    destCount?: IntFieldUpdateOperationsInput | number
    totalWeight?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isPbox?: BoolFieldUpdateOperationsInput | boolean
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    so?: NullableStringFieldUpdateOperationsInput | string | null
    nap?: NullableStringFieldUpdateOperationsInput | string | null
    ton?: NullableIntFieldUpdateOperationsInput | number | null
    contractId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedTonnage?: NullableStringFieldUpdateOperationsInput | string | null
    gwon?: NullableIntFieldUpdateOperationsInput | number | null
    originalFee?: IntFieldUpdateOperationsInput | number
  }

  export type SettlementHistoryCreateManyInput = {
    id?: number
    oldId?: string | null
    date: Date | string
    driverName: string
    affiliation?: string | null
    tonnage?: string | null
    destCount: number
    totalWeight: number
    fee: number
    memo?: string | null
    status?: string
    isPbox?: boolean
    isReturn?: boolean
    so?: string | null
    nap?: string | null
    ton?: number | null
    contractId?: number | null
    createdAt?: Date | string
    appliedTonnage?: string | null
    gwon?: number | null
    originalFee?: number
  }

  export type SettlementHistoryUpdateManyMutationInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    driverName?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    destCount?: IntFieldUpdateOperationsInput | number
    totalWeight?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isPbox?: BoolFieldUpdateOperationsInput | boolean
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    so?: NullableStringFieldUpdateOperationsInput | string | null
    nap?: NullableStringFieldUpdateOperationsInput | string | null
    ton?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedTonnage?: NullableStringFieldUpdateOperationsInput | string | null
    gwon?: NullableIntFieldUpdateOperationsInput | number | null
    originalFee?: IntFieldUpdateOperationsInput | number
  }

  export type SettlementHistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    driverName?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    destCount?: IntFieldUpdateOperationsInput | number
    totalWeight?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isPbox?: BoolFieldUpdateOperationsInput | boolean
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    so?: NullableStringFieldUpdateOperationsInput | string | null
    nap?: NullableStringFieldUpdateOperationsInput | string | null
    ton?: NullableIntFieldUpdateOperationsInput | number | null
    contractId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedTonnage?: NullableStringFieldUpdateOperationsInput | string | null
    gwon?: NullableIntFieldUpdateOperationsInput | number | null
    originalFee?: IntFieldUpdateOperationsInput | number
  }

  export type AffiliationCreateInput = {
    oldId?: string | null
    name: string
    bizNo?: string | null
    ceo?: string | null
    address?: string | null
    manager?: string | null
    contact?: string | null
    email?: string | null
    memo?: string | null
    createdAt?: Date | string
    Driver?: DriverCreateNestedManyWithoutAffiliationInput
    YongchaContract?: YongchaContractCreateNestedManyWithoutAffiliationInput
    User?: UserCreateNestedManyWithoutAffiliationInput
  }

  export type AffiliationUncheckedCreateInput = {
    id?: number
    oldId?: string | null
    name: string
    bizNo?: string | null
    ceo?: string | null
    address?: string | null
    manager?: string | null
    contact?: string | null
    email?: string | null
    memo?: string | null
    createdAt?: Date | string
    Driver?: DriverUncheckedCreateNestedManyWithoutAffiliationInput
    YongchaContract?: YongchaContractUncheckedCreateNestedManyWithoutAffiliationInput
    User?: UserUncheckedCreateNestedManyWithoutAffiliationInput
  }

  export type AffiliationUpdateInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    bizNo?: NullableStringFieldUpdateOperationsInput | string | null
    ceo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Driver?: DriverUpdateManyWithoutAffiliationNestedInput
    YongchaContract?: YongchaContractUpdateManyWithoutAffiliationNestedInput
    User?: UserUpdateManyWithoutAffiliationNestedInput
  }

  export type AffiliationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    bizNo?: NullableStringFieldUpdateOperationsInput | string | null
    ceo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Driver?: DriverUncheckedUpdateManyWithoutAffiliationNestedInput
    YongchaContract?: YongchaContractUncheckedUpdateManyWithoutAffiliationNestedInput
    User?: UserUncheckedUpdateManyWithoutAffiliationNestedInput
  }

  export type AffiliationCreateManyInput = {
    id?: number
    oldId?: string | null
    name: string
    bizNo?: string | null
    ceo?: string | null
    address?: string | null
    manager?: string | null
    contact?: string | null
    email?: string | null
    memo?: string | null
    createdAt?: Date | string
  }

  export type AffiliationUpdateManyMutationInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    bizNo?: NullableStringFieldUpdateOperationsInput | string | null
    ceo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    bizNo?: NullableStringFieldUpdateOperationsInput | string | null
    ceo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    oldId?: string | null
    loginId: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Affiliation?: AffiliationCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    oldId?: string | null
    loginId: string
    password: string
    name: string
    role?: string
    affiliationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Affiliation?: AffiliationUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    affiliationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    oldId?: string | null
    loginId: string
    password: string
    name: string
    role?: string
    affiliationId?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    affiliationId?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YongchaContractCreateInput = {
    oldId?: string | null
    year: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memo?: string | null
    SettlementHistory?: SettlementHistoryCreateNestedManyWithoutYongchaContractInput
    Affiliation: AffiliationCreateNestedOneWithoutYongchaContractInput
    YongchaRateDetail?: YongchaRateDetailCreateNestedManyWithoutYongchaContractInput
  }

  export type YongchaContractUncheckedCreateInput = {
    id?: number
    oldId?: string | null
    year: number
    affiliationId: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memo?: string | null
    SettlementHistory?: SettlementHistoryUncheckedCreateNestedManyWithoutYongchaContractInput
    YongchaRateDetail?: YongchaRateDetailUncheckedCreateNestedManyWithoutYongchaContractInput
  }

  export type YongchaContractUpdateInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementHistory?: SettlementHistoryUpdateManyWithoutYongchaContractNestedInput
    Affiliation?: AffiliationUpdateOneRequiredWithoutYongchaContractNestedInput
    YongchaRateDetail?: YongchaRateDetailUpdateManyWithoutYongchaContractNestedInput
  }

  export type YongchaContractUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    affiliationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementHistory?: SettlementHistoryUncheckedUpdateManyWithoutYongchaContractNestedInput
    YongchaRateDetail?: YongchaRateDetailUncheckedUpdateManyWithoutYongchaContractNestedInput
  }

  export type YongchaContractCreateManyInput = {
    id?: number
    oldId?: string | null
    year: number
    affiliationId: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memo?: string | null
  }

  export type YongchaContractUpdateManyMutationInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YongchaContractUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    affiliationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type YongchaRateDetailCreateInput = {
    oldId?: string | null
    region: string
    price: number
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    YongchaContract: YongchaContractCreateNestedOneWithoutYongchaRateDetailInput
  }

  export type YongchaRateDetailUncheckedCreateInput = {
    id?: number
    oldId?: string | null
    contractId: number
    region: string
    price: number
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YongchaRateDetailUpdateInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    YongchaContract?: YongchaContractUpdateOneRequiredWithoutYongchaRateDetailNestedInput
  }

  export type YongchaRateDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YongchaRateDetailCreateManyInput = {
    id?: number
    oldId?: string | null
    contractId: number
    region: string
    price: number
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YongchaRateDetailUpdateManyMutationInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YongchaRateDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: IntFieldUpdateOperationsInput | number
    region?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AffiliationNullableRelationFilter = {
    is?: AffiliationWhereInput | null
    isNot?: AffiliationWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    name?: SortOrder
    affiliationId?: SortOrder
    carNo?: SortOrder
    tonnage?: SortOrder
    phone?: SortOrder
    regDate?: SortOrder
    address?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    id?: SortOrder
    affiliationId?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    name?: SortOrder
    affiliationId?: SortOrder
    carNo?: SortOrder
    tonnage?: SortOrder
    phone?: SortOrder
    regDate?: SortOrder
    address?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    name?: SortOrder
    affiliationId?: SortOrder
    carNo?: SortOrder
    tonnage?: SortOrder
    phone?: SortOrder
    regDate?: SortOrder
    address?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    id?: SortOrder
    affiliationId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type YongchaContractNullableRelationFilter = {
    is?: YongchaContractWhereInput | null
    isNot?: YongchaContractWhereInput | null
  }

  export type SettlementHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    date?: SortOrder
    driverName?: SortOrder
    affiliation?: SortOrder
    tonnage?: SortOrder
    destCount?: SortOrder
    totalWeight?: SortOrder
    fee?: SortOrder
    memo?: SortOrder
    status?: SortOrder
    isPbox?: SortOrder
    isReturn?: SortOrder
    so?: SortOrder
    nap?: SortOrder
    ton?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    appliedTonnage?: SortOrder
    gwon?: SortOrder
    originalFee?: SortOrder
  }

  export type SettlementHistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    destCount?: SortOrder
    totalWeight?: SortOrder
    fee?: SortOrder
    ton?: SortOrder
    contractId?: SortOrder
    gwon?: SortOrder
    originalFee?: SortOrder
  }

  export type SettlementHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    date?: SortOrder
    driverName?: SortOrder
    affiliation?: SortOrder
    tonnage?: SortOrder
    destCount?: SortOrder
    totalWeight?: SortOrder
    fee?: SortOrder
    memo?: SortOrder
    status?: SortOrder
    isPbox?: SortOrder
    isReturn?: SortOrder
    so?: SortOrder
    nap?: SortOrder
    ton?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    appliedTonnage?: SortOrder
    gwon?: SortOrder
    originalFee?: SortOrder
  }

  export type SettlementHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    date?: SortOrder
    driverName?: SortOrder
    affiliation?: SortOrder
    tonnage?: SortOrder
    destCount?: SortOrder
    totalWeight?: SortOrder
    fee?: SortOrder
    memo?: SortOrder
    status?: SortOrder
    isPbox?: SortOrder
    isReturn?: SortOrder
    so?: SortOrder
    nap?: SortOrder
    ton?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
    appliedTonnage?: SortOrder
    gwon?: SortOrder
    originalFee?: SortOrder
  }

  export type SettlementHistorySumOrderByAggregateInput = {
    id?: SortOrder
    destCount?: SortOrder
    totalWeight?: SortOrder
    fee?: SortOrder
    ton?: SortOrder
    contractId?: SortOrder
    gwon?: SortOrder
    originalFee?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DriverListRelationFilter = {
    every?: DriverWhereInput
    some?: DriverWhereInput
    none?: DriverWhereInput
  }

  export type YongchaContractListRelationFilter = {
    every?: YongchaContractWhereInput
    some?: YongchaContractWhereInput
    none?: YongchaContractWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DriverOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YongchaContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AffiliationCountOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    name?: SortOrder
    bizNo?: SortOrder
    ceo?: SortOrder
    address?: SortOrder
    manager?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
  }

  export type AffiliationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AffiliationMaxOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    name?: SortOrder
    bizNo?: SortOrder
    ceo?: SortOrder
    address?: SortOrder
    manager?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
  }

  export type AffiliationMinOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    name?: SortOrder
    bizNo?: SortOrder
    ceo?: SortOrder
    address?: SortOrder
    manager?: SortOrder
    contact?: SortOrder
    email?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
  }

  export type AffiliationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    affiliationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    affiliationId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    affiliationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    loginId?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    affiliationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    affiliationId?: SortOrder
  }

  export type SettlementHistoryListRelationFilter = {
    every?: SettlementHistoryWhereInput
    some?: SettlementHistoryWhereInput
    none?: SettlementHistoryWhereInput
  }

  export type AffiliationRelationFilter = {
    is?: AffiliationWhereInput
    isNot?: AffiliationWhereInput
  }

  export type YongchaRateDetailListRelationFilter = {
    every?: YongchaRateDetailWhereInput
    some?: YongchaRateDetailWhereInput
    none?: YongchaRateDetailWhereInput
  }

  export type SettlementHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YongchaRateDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type YongchaContractCountOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    year?: SortOrder
    affiliationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memo?: SortOrder
  }

  export type YongchaContractAvgOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    affiliationId?: SortOrder
  }

  export type YongchaContractMaxOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    year?: SortOrder
    affiliationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memo?: SortOrder
  }

  export type YongchaContractMinOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    year?: SortOrder
    affiliationId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    memo?: SortOrder
  }

  export type YongchaContractSumOrderByAggregateInput = {
    id?: SortOrder
    year?: SortOrder
    affiliationId?: SortOrder
  }

  export type YongchaContractRelationFilter = {
    is?: YongchaContractWhereInput
    isNot?: YongchaContractWhereInput
  }

  export type YongchaRateDetailCountOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    contractId?: SortOrder
    region?: SortOrder
    price?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YongchaRateDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    price?: SortOrder
  }

  export type YongchaRateDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    contractId?: SortOrder
    region?: SortOrder
    price?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YongchaRateDetailMinOrderByAggregateInput = {
    id?: SortOrder
    oldId?: SortOrder
    contractId?: SortOrder
    region?: SortOrder
    price?: SortOrder
    memo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type YongchaRateDetailSumOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    price?: SortOrder
  }

  export type AffiliationCreateNestedOneWithoutDriverInput = {
    create?: XOR<AffiliationCreateWithoutDriverInput, AffiliationUncheckedCreateWithoutDriverInput>
    connectOrCreate?: AffiliationCreateOrConnectWithoutDriverInput
    connect?: AffiliationWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AffiliationUpdateOneWithoutDriverNestedInput = {
    create?: XOR<AffiliationCreateWithoutDriverInput, AffiliationUncheckedCreateWithoutDriverInput>
    connectOrCreate?: AffiliationCreateOrConnectWithoutDriverInput
    upsert?: AffiliationUpsertWithoutDriverInput
    disconnect?: AffiliationWhereInput | boolean
    delete?: AffiliationWhereInput | boolean
    connect?: AffiliationWhereUniqueInput
    update?: XOR<XOR<AffiliationUpdateToOneWithWhereWithoutDriverInput, AffiliationUpdateWithoutDriverInput>, AffiliationUncheckedUpdateWithoutDriverInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type YongchaContractCreateNestedOneWithoutSettlementHistoryInput = {
    create?: XOR<YongchaContractCreateWithoutSettlementHistoryInput, YongchaContractUncheckedCreateWithoutSettlementHistoryInput>
    connectOrCreate?: YongchaContractCreateOrConnectWithoutSettlementHistoryInput
    connect?: YongchaContractWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type YongchaContractUpdateOneWithoutSettlementHistoryNestedInput = {
    create?: XOR<YongchaContractCreateWithoutSettlementHistoryInput, YongchaContractUncheckedCreateWithoutSettlementHistoryInput>
    connectOrCreate?: YongchaContractCreateOrConnectWithoutSettlementHistoryInput
    upsert?: YongchaContractUpsertWithoutSettlementHistoryInput
    disconnect?: YongchaContractWhereInput | boolean
    delete?: YongchaContractWhereInput | boolean
    connect?: YongchaContractWhereUniqueInput
    update?: XOR<XOR<YongchaContractUpdateToOneWithWhereWithoutSettlementHistoryInput, YongchaContractUpdateWithoutSettlementHistoryInput>, YongchaContractUncheckedUpdateWithoutSettlementHistoryInput>
  }

  export type DriverCreateNestedManyWithoutAffiliationInput = {
    create?: XOR<DriverCreateWithoutAffiliationInput, DriverUncheckedCreateWithoutAffiliationInput> | DriverCreateWithoutAffiliationInput[] | DriverUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutAffiliationInput | DriverCreateOrConnectWithoutAffiliationInput[]
    createMany?: DriverCreateManyAffiliationInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type YongchaContractCreateNestedManyWithoutAffiliationInput = {
    create?: XOR<YongchaContractCreateWithoutAffiliationInput, YongchaContractUncheckedCreateWithoutAffiliationInput> | YongchaContractCreateWithoutAffiliationInput[] | YongchaContractUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: YongchaContractCreateOrConnectWithoutAffiliationInput | YongchaContractCreateOrConnectWithoutAffiliationInput[]
    createMany?: YongchaContractCreateManyAffiliationInputEnvelope
    connect?: YongchaContractWhereUniqueInput | YongchaContractWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutAffiliationInput = {
    create?: XOR<UserCreateWithoutAffiliationInput, UserUncheckedCreateWithoutAffiliationInput> | UserCreateWithoutAffiliationInput[] | UserUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAffiliationInput | UserCreateOrConnectWithoutAffiliationInput[]
    createMany?: UserCreateManyAffiliationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DriverUncheckedCreateNestedManyWithoutAffiliationInput = {
    create?: XOR<DriverCreateWithoutAffiliationInput, DriverUncheckedCreateWithoutAffiliationInput> | DriverCreateWithoutAffiliationInput[] | DriverUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutAffiliationInput | DriverCreateOrConnectWithoutAffiliationInput[]
    createMany?: DriverCreateManyAffiliationInputEnvelope
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
  }

  export type YongchaContractUncheckedCreateNestedManyWithoutAffiliationInput = {
    create?: XOR<YongchaContractCreateWithoutAffiliationInput, YongchaContractUncheckedCreateWithoutAffiliationInput> | YongchaContractCreateWithoutAffiliationInput[] | YongchaContractUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: YongchaContractCreateOrConnectWithoutAffiliationInput | YongchaContractCreateOrConnectWithoutAffiliationInput[]
    createMany?: YongchaContractCreateManyAffiliationInputEnvelope
    connect?: YongchaContractWhereUniqueInput | YongchaContractWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAffiliationInput = {
    create?: XOR<UserCreateWithoutAffiliationInput, UserUncheckedCreateWithoutAffiliationInput> | UserCreateWithoutAffiliationInput[] | UserUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAffiliationInput | UserCreateOrConnectWithoutAffiliationInput[]
    createMany?: UserCreateManyAffiliationInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DriverUpdateManyWithoutAffiliationNestedInput = {
    create?: XOR<DriverCreateWithoutAffiliationInput, DriverUncheckedCreateWithoutAffiliationInput> | DriverCreateWithoutAffiliationInput[] | DriverUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutAffiliationInput | DriverCreateOrConnectWithoutAffiliationInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutAffiliationInput | DriverUpsertWithWhereUniqueWithoutAffiliationInput[]
    createMany?: DriverCreateManyAffiliationInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutAffiliationInput | DriverUpdateWithWhereUniqueWithoutAffiliationInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutAffiliationInput | DriverUpdateManyWithWhereWithoutAffiliationInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type YongchaContractUpdateManyWithoutAffiliationNestedInput = {
    create?: XOR<YongchaContractCreateWithoutAffiliationInput, YongchaContractUncheckedCreateWithoutAffiliationInput> | YongchaContractCreateWithoutAffiliationInput[] | YongchaContractUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: YongchaContractCreateOrConnectWithoutAffiliationInput | YongchaContractCreateOrConnectWithoutAffiliationInput[]
    upsert?: YongchaContractUpsertWithWhereUniqueWithoutAffiliationInput | YongchaContractUpsertWithWhereUniqueWithoutAffiliationInput[]
    createMany?: YongchaContractCreateManyAffiliationInputEnvelope
    set?: YongchaContractWhereUniqueInput | YongchaContractWhereUniqueInput[]
    disconnect?: YongchaContractWhereUniqueInput | YongchaContractWhereUniqueInput[]
    delete?: YongchaContractWhereUniqueInput | YongchaContractWhereUniqueInput[]
    connect?: YongchaContractWhereUniqueInput | YongchaContractWhereUniqueInput[]
    update?: YongchaContractUpdateWithWhereUniqueWithoutAffiliationInput | YongchaContractUpdateWithWhereUniqueWithoutAffiliationInput[]
    updateMany?: YongchaContractUpdateManyWithWhereWithoutAffiliationInput | YongchaContractUpdateManyWithWhereWithoutAffiliationInput[]
    deleteMany?: YongchaContractScalarWhereInput | YongchaContractScalarWhereInput[]
  }

  export type UserUpdateManyWithoutAffiliationNestedInput = {
    create?: XOR<UserCreateWithoutAffiliationInput, UserUncheckedCreateWithoutAffiliationInput> | UserCreateWithoutAffiliationInput[] | UserUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAffiliationInput | UserCreateOrConnectWithoutAffiliationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAffiliationInput | UserUpsertWithWhereUniqueWithoutAffiliationInput[]
    createMany?: UserCreateManyAffiliationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAffiliationInput | UserUpdateWithWhereUniqueWithoutAffiliationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAffiliationInput | UserUpdateManyWithWhereWithoutAffiliationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DriverUncheckedUpdateManyWithoutAffiliationNestedInput = {
    create?: XOR<DriverCreateWithoutAffiliationInput, DriverUncheckedCreateWithoutAffiliationInput> | DriverCreateWithoutAffiliationInput[] | DriverUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: DriverCreateOrConnectWithoutAffiliationInput | DriverCreateOrConnectWithoutAffiliationInput[]
    upsert?: DriverUpsertWithWhereUniqueWithoutAffiliationInput | DriverUpsertWithWhereUniqueWithoutAffiliationInput[]
    createMany?: DriverCreateManyAffiliationInputEnvelope
    set?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    disconnect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    delete?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    connect?: DriverWhereUniqueInput | DriverWhereUniqueInput[]
    update?: DriverUpdateWithWhereUniqueWithoutAffiliationInput | DriverUpdateWithWhereUniqueWithoutAffiliationInput[]
    updateMany?: DriverUpdateManyWithWhereWithoutAffiliationInput | DriverUpdateManyWithWhereWithoutAffiliationInput[]
    deleteMany?: DriverScalarWhereInput | DriverScalarWhereInput[]
  }

  export type YongchaContractUncheckedUpdateManyWithoutAffiliationNestedInput = {
    create?: XOR<YongchaContractCreateWithoutAffiliationInput, YongchaContractUncheckedCreateWithoutAffiliationInput> | YongchaContractCreateWithoutAffiliationInput[] | YongchaContractUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: YongchaContractCreateOrConnectWithoutAffiliationInput | YongchaContractCreateOrConnectWithoutAffiliationInput[]
    upsert?: YongchaContractUpsertWithWhereUniqueWithoutAffiliationInput | YongchaContractUpsertWithWhereUniqueWithoutAffiliationInput[]
    createMany?: YongchaContractCreateManyAffiliationInputEnvelope
    set?: YongchaContractWhereUniqueInput | YongchaContractWhereUniqueInput[]
    disconnect?: YongchaContractWhereUniqueInput | YongchaContractWhereUniqueInput[]
    delete?: YongchaContractWhereUniqueInput | YongchaContractWhereUniqueInput[]
    connect?: YongchaContractWhereUniqueInput | YongchaContractWhereUniqueInput[]
    update?: YongchaContractUpdateWithWhereUniqueWithoutAffiliationInput | YongchaContractUpdateWithWhereUniqueWithoutAffiliationInput[]
    updateMany?: YongchaContractUpdateManyWithWhereWithoutAffiliationInput | YongchaContractUpdateManyWithWhereWithoutAffiliationInput[]
    deleteMany?: YongchaContractScalarWhereInput | YongchaContractScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAffiliationNestedInput = {
    create?: XOR<UserCreateWithoutAffiliationInput, UserUncheckedCreateWithoutAffiliationInput> | UserCreateWithoutAffiliationInput[] | UserUncheckedCreateWithoutAffiliationInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAffiliationInput | UserCreateOrConnectWithoutAffiliationInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAffiliationInput | UserUpsertWithWhereUniqueWithoutAffiliationInput[]
    createMany?: UserCreateManyAffiliationInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAffiliationInput | UserUpdateWithWhereUniqueWithoutAffiliationInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAffiliationInput | UserUpdateManyWithWhereWithoutAffiliationInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AffiliationCreateNestedOneWithoutUserInput = {
    create?: XOR<AffiliationCreateWithoutUserInput, AffiliationUncheckedCreateWithoutUserInput>
    connectOrCreate?: AffiliationCreateOrConnectWithoutUserInput
    connect?: AffiliationWhereUniqueInput
  }

  export type AffiliationUpdateOneWithoutUserNestedInput = {
    create?: XOR<AffiliationCreateWithoutUserInput, AffiliationUncheckedCreateWithoutUserInput>
    connectOrCreate?: AffiliationCreateOrConnectWithoutUserInput
    upsert?: AffiliationUpsertWithoutUserInput
    disconnect?: AffiliationWhereInput | boolean
    delete?: AffiliationWhereInput | boolean
    connect?: AffiliationWhereUniqueInput
    update?: XOR<XOR<AffiliationUpdateToOneWithWhereWithoutUserInput, AffiliationUpdateWithoutUserInput>, AffiliationUncheckedUpdateWithoutUserInput>
  }

  export type SettlementHistoryCreateNestedManyWithoutYongchaContractInput = {
    create?: XOR<SettlementHistoryCreateWithoutYongchaContractInput, SettlementHistoryUncheckedCreateWithoutYongchaContractInput> | SettlementHistoryCreateWithoutYongchaContractInput[] | SettlementHistoryUncheckedCreateWithoutYongchaContractInput[]
    connectOrCreate?: SettlementHistoryCreateOrConnectWithoutYongchaContractInput | SettlementHistoryCreateOrConnectWithoutYongchaContractInput[]
    createMany?: SettlementHistoryCreateManyYongchaContractInputEnvelope
    connect?: SettlementHistoryWhereUniqueInput | SettlementHistoryWhereUniqueInput[]
  }

  export type AffiliationCreateNestedOneWithoutYongchaContractInput = {
    create?: XOR<AffiliationCreateWithoutYongchaContractInput, AffiliationUncheckedCreateWithoutYongchaContractInput>
    connectOrCreate?: AffiliationCreateOrConnectWithoutYongchaContractInput
    connect?: AffiliationWhereUniqueInput
  }

  export type YongchaRateDetailCreateNestedManyWithoutYongchaContractInput = {
    create?: XOR<YongchaRateDetailCreateWithoutYongchaContractInput, YongchaRateDetailUncheckedCreateWithoutYongchaContractInput> | YongchaRateDetailCreateWithoutYongchaContractInput[] | YongchaRateDetailUncheckedCreateWithoutYongchaContractInput[]
    connectOrCreate?: YongchaRateDetailCreateOrConnectWithoutYongchaContractInput | YongchaRateDetailCreateOrConnectWithoutYongchaContractInput[]
    createMany?: YongchaRateDetailCreateManyYongchaContractInputEnvelope
    connect?: YongchaRateDetailWhereUniqueInput | YongchaRateDetailWhereUniqueInput[]
  }

  export type SettlementHistoryUncheckedCreateNestedManyWithoutYongchaContractInput = {
    create?: XOR<SettlementHistoryCreateWithoutYongchaContractInput, SettlementHistoryUncheckedCreateWithoutYongchaContractInput> | SettlementHistoryCreateWithoutYongchaContractInput[] | SettlementHistoryUncheckedCreateWithoutYongchaContractInput[]
    connectOrCreate?: SettlementHistoryCreateOrConnectWithoutYongchaContractInput | SettlementHistoryCreateOrConnectWithoutYongchaContractInput[]
    createMany?: SettlementHistoryCreateManyYongchaContractInputEnvelope
    connect?: SettlementHistoryWhereUniqueInput | SettlementHistoryWhereUniqueInput[]
  }

  export type YongchaRateDetailUncheckedCreateNestedManyWithoutYongchaContractInput = {
    create?: XOR<YongchaRateDetailCreateWithoutYongchaContractInput, YongchaRateDetailUncheckedCreateWithoutYongchaContractInput> | YongchaRateDetailCreateWithoutYongchaContractInput[] | YongchaRateDetailUncheckedCreateWithoutYongchaContractInput[]
    connectOrCreate?: YongchaRateDetailCreateOrConnectWithoutYongchaContractInput | YongchaRateDetailCreateOrConnectWithoutYongchaContractInput[]
    createMany?: YongchaRateDetailCreateManyYongchaContractInputEnvelope
    connect?: YongchaRateDetailWhereUniqueInput | YongchaRateDetailWhereUniqueInput[]
  }

  export type SettlementHistoryUpdateManyWithoutYongchaContractNestedInput = {
    create?: XOR<SettlementHistoryCreateWithoutYongchaContractInput, SettlementHistoryUncheckedCreateWithoutYongchaContractInput> | SettlementHistoryCreateWithoutYongchaContractInput[] | SettlementHistoryUncheckedCreateWithoutYongchaContractInput[]
    connectOrCreate?: SettlementHistoryCreateOrConnectWithoutYongchaContractInput | SettlementHistoryCreateOrConnectWithoutYongchaContractInput[]
    upsert?: SettlementHistoryUpsertWithWhereUniqueWithoutYongchaContractInput | SettlementHistoryUpsertWithWhereUniqueWithoutYongchaContractInput[]
    createMany?: SettlementHistoryCreateManyYongchaContractInputEnvelope
    set?: SettlementHistoryWhereUniqueInput | SettlementHistoryWhereUniqueInput[]
    disconnect?: SettlementHistoryWhereUniqueInput | SettlementHistoryWhereUniqueInput[]
    delete?: SettlementHistoryWhereUniqueInput | SettlementHistoryWhereUniqueInput[]
    connect?: SettlementHistoryWhereUniqueInput | SettlementHistoryWhereUniqueInput[]
    update?: SettlementHistoryUpdateWithWhereUniqueWithoutYongchaContractInput | SettlementHistoryUpdateWithWhereUniqueWithoutYongchaContractInput[]
    updateMany?: SettlementHistoryUpdateManyWithWhereWithoutYongchaContractInput | SettlementHistoryUpdateManyWithWhereWithoutYongchaContractInput[]
    deleteMany?: SettlementHistoryScalarWhereInput | SettlementHistoryScalarWhereInput[]
  }

  export type AffiliationUpdateOneRequiredWithoutYongchaContractNestedInput = {
    create?: XOR<AffiliationCreateWithoutYongchaContractInput, AffiliationUncheckedCreateWithoutYongchaContractInput>
    connectOrCreate?: AffiliationCreateOrConnectWithoutYongchaContractInput
    upsert?: AffiliationUpsertWithoutYongchaContractInput
    connect?: AffiliationWhereUniqueInput
    update?: XOR<XOR<AffiliationUpdateToOneWithWhereWithoutYongchaContractInput, AffiliationUpdateWithoutYongchaContractInput>, AffiliationUncheckedUpdateWithoutYongchaContractInput>
  }

  export type YongchaRateDetailUpdateManyWithoutYongchaContractNestedInput = {
    create?: XOR<YongchaRateDetailCreateWithoutYongchaContractInput, YongchaRateDetailUncheckedCreateWithoutYongchaContractInput> | YongchaRateDetailCreateWithoutYongchaContractInput[] | YongchaRateDetailUncheckedCreateWithoutYongchaContractInput[]
    connectOrCreate?: YongchaRateDetailCreateOrConnectWithoutYongchaContractInput | YongchaRateDetailCreateOrConnectWithoutYongchaContractInput[]
    upsert?: YongchaRateDetailUpsertWithWhereUniqueWithoutYongchaContractInput | YongchaRateDetailUpsertWithWhereUniqueWithoutYongchaContractInput[]
    createMany?: YongchaRateDetailCreateManyYongchaContractInputEnvelope
    set?: YongchaRateDetailWhereUniqueInput | YongchaRateDetailWhereUniqueInput[]
    disconnect?: YongchaRateDetailWhereUniqueInput | YongchaRateDetailWhereUniqueInput[]
    delete?: YongchaRateDetailWhereUniqueInput | YongchaRateDetailWhereUniqueInput[]
    connect?: YongchaRateDetailWhereUniqueInput | YongchaRateDetailWhereUniqueInput[]
    update?: YongchaRateDetailUpdateWithWhereUniqueWithoutYongchaContractInput | YongchaRateDetailUpdateWithWhereUniqueWithoutYongchaContractInput[]
    updateMany?: YongchaRateDetailUpdateManyWithWhereWithoutYongchaContractInput | YongchaRateDetailUpdateManyWithWhereWithoutYongchaContractInput[]
    deleteMany?: YongchaRateDetailScalarWhereInput | YongchaRateDetailScalarWhereInput[]
  }

  export type SettlementHistoryUncheckedUpdateManyWithoutYongchaContractNestedInput = {
    create?: XOR<SettlementHistoryCreateWithoutYongchaContractInput, SettlementHistoryUncheckedCreateWithoutYongchaContractInput> | SettlementHistoryCreateWithoutYongchaContractInput[] | SettlementHistoryUncheckedCreateWithoutYongchaContractInput[]
    connectOrCreate?: SettlementHistoryCreateOrConnectWithoutYongchaContractInput | SettlementHistoryCreateOrConnectWithoutYongchaContractInput[]
    upsert?: SettlementHistoryUpsertWithWhereUniqueWithoutYongchaContractInput | SettlementHistoryUpsertWithWhereUniqueWithoutYongchaContractInput[]
    createMany?: SettlementHistoryCreateManyYongchaContractInputEnvelope
    set?: SettlementHistoryWhereUniqueInput | SettlementHistoryWhereUniqueInput[]
    disconnect?: SettlementHistoryWhereUniqueInput | SettlementHistoryWhereUniqueInput[]
    delete?: SettlementHistoryWhereUniqueInput | SettlementHistoryWhereUniqueInput[]
    connect?: SettlementHistoryWhereUniqueInput | SettlementHistoryWhereUniqueInput[]
    update?: SettlementHistoryUpdateWithWhereUniqueWithoutYongchaContractInput | SettlementHistoryUpdateWithWhereUniqueWithoutYongchaContractInput[]
    updateMany?: SettlementHistoryUpdateManyWithWhereWithoutYongchaContractInput | SettlementHistoryUpdateManyWithWhereWithoutYongchaContractInput[]
    deleteMany?: SettlementHistoryScalarWhereInput | SettlementHistoryScalarWhereInput[]
  }

  export type YongchaRateDetailUncheckedUpdateManyWithoutYongchaContractNestedInput = {
    create?: XOR<YongchaRateDetailCreateWithoutYongchaContractInput, YongchaRateDetailUncheckedCreateWithoutYongchaContractInput> | YongchaRateDetailCreateWithoutYongchaContractInput[] | YongchaRateDetailUncheckedCreateWithoutYongchaContractInput[]
    connectOrCreate?: YongchaRateDetailCreateOrConnectWithoutYongchaContractInput | YongchaRateDetailCreateOrConnectWithoutYongchaContractInput[]
    upsert?: YongchaRateDetailUpsertWithWhereUniqueWithoutYongchaContractInput | YongchaRateDetailUpsertWithWhereUniqueWithoutYongchaContractInput[]
    createMany?: YongchaRateDetailCreateManyYongchaContractInputEnvelope
    set?: YongchaRateDetailWhereUniqueInput | YongchaRateDetailWhereUniqueInput[]
    disconnect?: YongchaRateDetailWhereUniqueInput | YongchaRateDetailWhereUniqueInput[]
    delete?: YongchaRateDetailWhereUniqueInput | YongchaRateDetailWhereUniqueInput[]
    connect?: YongchaRateDetailWhereUniqueInput | YongchaRateDetailWhereUniqueInput[]
    update?: YongchaRateDetailUpdateWithWhereUniqueWithoutYongchaContractInput | YongchaRateDetailUpdateWithWhereUniqueWithoutYongchaContractInput[]
    updateMany?: YongchaRateDetailUpdateManyWithWhereWithoutYongchaContractInput | YongchaRateDetailUpdateManyWithWhereWithoutYongchaContractInput[]
    deleteMany?: YongchaRateDetailScalarWhereInput | YongchaRateDetailScalarWhereInput[]
  }

  export type YongchaContractCreateNestedOneWithoutYongchaRateDetailInput = {
    create?: XOR<YongchaContractCreateWithoutYongchaRateDetailInput, YongchaContractUncheckedCreateWithoutYongchaRateDetailInput>
    connectOrCreate?: YongchaContractCreateOrConnectWithoutYongchaRateDetailInput
    connect?: YongchaContractWhereUniqueInput
  }

  export type YongchaContractUpdateOneRequiredWithoutYongchaRateDetailNestedInput = {
    create?: XOR<YongchaContractCreateWithoutYongchaRateDetailInput, YongchaContractUncheckedCreateWithoutYongchaRateDetailInput>
    connectOrCreate?: YongchaContractCreateOrConnectWithoutYongchaRateDetailInput
    upsert?: YongchaContractUpsertWithoutYongchaRateDetailInput
    connect?: YongchaContractWhereUniqueInput
    update?: XOR<XOR<YongchaContractUpdateToOneWithWhereWithoutYongchaRateDetailInput, YongchaContractUpdateWithoutYongchaRateDetailInput>, YongchaContractUncheckedUpdateWithoutYongchaRateDetailInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AffiliationCreateWithoutDriverInput = {
    oldId?: string | null
    name: string
    bizNo?: string | null
    ceo?: string | null
    address?: string | null
    manager?: string | null
    contact?: string | null
    email?: string | null
    memo?: string | null
    createdAt?: Date | string
    YongchaContract?: YongchaContractCreateNestedManyWithoutAffiliationInput
    User?: UserCreateNestedManyWithoutAffiliationInput
  }

  export type AffiliationUncheckedCreateWithoutDriverInput = {
    id?: number
    oldId?: string | null
    name: string
    bizNo?: string | null
    ceo?: string | null
    address?: string | null
    manager?: string | null
    contact?: string | null
    email?: string | null
    memo?: string | null
    createdAt?: Date | string
    YongchaContract?: YongchaContractUncheckedCreateNestedManyWithoutAffiliationInput
    User?: UserUncheckedCreateNestedManyWithoutAffiliationInput
  }

  export type AffiliationCreateOrConnectWithoutDriverInput = {
    where: AffiliationWhereUniqueInput
    create: XOR<AffiliationCreateWithoutDriverInput, AffiliationUncheckedCreateWithoutDriverInput>
  }

  export type AffiliationUpsertWithoutDriverInput = {
    update: XOR<AffiliationUpdateWithoutDriverInput, AffiliationUncheckedUpdateWithoutDriverInput>
    create: XOR<AffiliationCreateWithoutDriverInput, AffiliationUncheckedCreateWithoutDriverInput>
    where?: AffiliationWhereInput
  }

  export type AffiliationUpdateToOneWithWhereWithoutDriverInput = {
    where?: AffiliationWhereInput
    data: XOR<AffiliationUpdateWithoutDriverInput, AffiliationUncheckedUpdateWithoutDriverInput>
  }

  export type AffiliationUpdateWithoutDriverInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    bizNo?: NullableStringFieldUpdateOperationsInput | string | null
    ceo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    YongchaContract?: YongchaContractUpdateManyWithoutAffiliationNestedInput
    User?: UserUpdateManyWithoutAffiliationNestedInput
  }

  export type AffiliationUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    bizNo?: NullableStringFieldUpdateOperationsInput | string | null
    ceo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    YongchaContract?: YongchaContractUncheckedUpdateManyWithoutAffiliationNestedInput
    User?: UserUncheckedUpdateManyWithoutAffiliationNestedInput
  }

  export type YongchaContractCreateWithoutSettlementHistoryInput = {
    oldId?: string | null
    year: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memo?: string | null
    Affiliation: AffiliationCreateNestedOneWithoutYongchaContractInput
    YongchaRateDetail?: YongchaRateDetailCreateNestedManyWithoutYongchaContractInput
  }

  export type YongchaContractUncheckedCreateWithoutSettlementHistoryInput = {
    id?: number
    oldId?: string | null
    year: number
    affiliationId: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memo?: string | null
    YongchaRateDetail?: YongchaRateDetailUncheckedCreateNestedManyWithoutYongchaContractInput
  }

  export type YongchaContractCreateOrConnectWithoutSettlementHistoryInput = {
    where: YongchaContractWhereUniqueInput
    create: XOR<YongchaContractCreateWithoutSettlementHistoryInput, YongchaContractUncheckedCreateWithoutSettlementHistoryInput>
  }

  export type YongchaContractUpsertWithoutSettlementHistoryInput = {
    update: XOR<YongchaContractUpdateWithoutSettlementHistoryInput, YongchaContractUncheckedUpdateWithoutSettlementHistoryInput>
    create: XOR<YongchaContractCreateWithoutSettlementHistoryInput, YongchaContractUncheckedCreateWithoutSettlementHistoryInput>
    where?: YongchaContractWhereInput
  }

  export type YongchaContractUpdateToOneWithWhereWithoutSettlementHistoryInput = {
    where?: YongchaContractWhereInput
    data: XOR<YongchaContractUpdateWithoutSettlementHistoryInput, YongchaContractUncheckedUpdateWithoutSettlementHistoryInput>
  }

  export type YongchaContractUpdateWithoutSettlementHistoryInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    Affiliation?: AffiliationUpdateOneRequiredWithoutYongchaContractNestedInput
    YongchaRateDetail?: YongchaRateDetailUpdateManyWithoutYongchaContractNestedInput
  }

  export type YongchaContractUncheckedUpdateWithoutSettlementHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    affiliationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    YongchaRateDetail?: YongchaRateDetailUncheckedUpdateManyWithoutYongchaContractNestedInput
  }

  export type DriverCreateWithoutAffiliationInput = {
    oldId?: string | null
    name: string
    carNo?: string | null
    tonnage?: string | null
    phone?: string | null
    regDate?: Date | string | null
    address?: string | null
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUncheckedCreateWithoutAffiliationInput = {
    id?: number
    oldId?: string | null
    name: string
    carNo?: string | null
    tonnage?: string | null
    phone?: string | null
    regDate?: Date | string | null
    address?: string | null
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverCreateOrConnectWithoutAffiliationInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutAffiliationInput, DriverUncheckedCreateWithoutAffiliationInput>
  }

  export type DriverCreateManyAffiliationInputEnvelope = {
    data: DriverCreateManyAffiliationInput | DriverCreateManyAffiliationInput[]
  }

  export type YongchaContractCreateWithoutAffiliationInput = {
    oldId?: string | null
    year: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memo?: string | null
    SettlementHistory?: SettlementHistoryCreateNestedManyWithoutYongchaContractInput
    YongchaRateDetail?: YongchaRateDetailCreateNestedManyWithoutYongchaContractInput
  }

  export type YongchaContractUncheckedCreateWithoutAffiliationInput = {
    id?: number
    oldId?: string | null
    year: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memo?: string | null
    SettlementHistory?: SettlementHistoryUncheckedCreateNestedManyWithoutYongchaContractInput
    YongchaRateDetail?: YongchaRateDetailUncheckedCreateNestedManyWithoutYongchaContractInput
  }

  export type YongchaContractCreateOrConnectWithoutAffiliationInput = {
    where: YongchaContractWhereUniqueInput
    create: XOR<YongchaContractCreateWithoutAffiliationInput, YongchaContractUncheckedCreateWithoutAffiliationInput>
  }

  export type YongchaContractCreateManyAffiliationInputEnvelope = {
    data: YongchaContractCreateManyAffiliationInput | YongchaContractCreateManyAffiliationInput[]
  }

  export type UserCreateWithoutAffiliationInput = {
    oldId?: string | null
    loginId: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutAffiliationInput = {
    id?: number
    oldId?: string | null
    loginId: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutAffiliationInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAffiliationInput, UserUncheckedCreateWithoutAffiliationInput>
  }

  export type UserCreateManyAffiliationInputEnvelope = {
    data: UserCreateManyAffiliationInput | UserCreateManyAffiliationInput[]
  }

  export type DriverUpsertWithWhereUniqueWithoutAffiliationInput = {
    where: DriverWhereUniqueInput
    update: XOR<DriverUpdateWithoutAffiliationInput, DriverUncheckedUpdateWithoutAffiliationInput>
    create: XOR<DriverCreateWithoutAffiliationInput, DriverUncheckedCreateWithoutAffiliationInput>
  }

  export type DriverUpdateWithWhereUniqueWithoutAffiliationInput = {
    where: DriverWhereUniqueInput
    data: XOR<DriverUpdateWithoutAffiliationInput, DriverUncheckedUpdateWithoutAffiliationInput>
  }

  export type DriverUpdateManyWithWhereWithoutAffiliationInput = {
    where: DriverScalarWhereInput
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyWithoutAffiliationInput>
  }

  export type DriverScalarWhereInput = {
    AND?: DriverScalarWhereInput | DriverScalarWhereInput[]
    OR?: DriverScalarWhereInput[]
    NOT?: DriverScalarWhereInput | DriverScalarWhereInput[]
    id?: IntFilter<"Driver"> | number
    oldId?: StringNullableFilter<"Driver"> | string | null
    name?: StringFilter<"Driver"> | string
    affiliationId?: IntNullableFilter<"Driver"> | number | null
    carNo?: StringNullableFilter<"Driver"> | string | null
    tonnage?: StringNullableFilter<"Driver"> | string | null
    phone?: StringNullableFilter<"Driver"> | string | null
    regDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    address?: StringNullableFilter<"Driver"> | string | null
    memo?: StringNullableFilter<"Driver"> | string | null
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
  }

  export type YongchaContractUpsertWithWhereUniqueWithoutAffiliationInput = {
    where: YongchaContractWhereUniqueInput
    update: XOR<YongchaContractUpdateWithoutAffiliationInput, YongchaContractUncheckedUpdateWithoutAffiliationInput>
    create: XOR<YongchaContractCreateWithoutAffiliationInput, YongchaContractUncheckedCreateWithoutAffiliationInput>
  }

  export type YongchaContractUpdateWithWhereUniqueWithoutAffiliationInput = {
    where: YongchaContractWhereUniqueInput
    data: XOR<YongchaContractUpdateWithoutAffiliationInput, YongchaContractUncheckedUpdateWithoutAffiliationInput>
  }

  export type YongchaContractUpdateManyWithWhereWithoutAffiliationInput = {
    where: YongchaContractScalarWhereInput
    data: XOR<YongchaContractUpdateManyMutationInput, YongchaContractUncheckedUpdateManyWithoutAffiliationInput>
  }

  export type YongchaContractScalarWhereInput = {
    AND?: YongchaContractScalarWhereInput | YongchaContractScalarWhereInput[]
    OR?: YongchaContractScalarWhereInput[]
    NOT?: YongchaContractScalarWhereInput | YongchaContractScalarWhereInput[]
    id?: IntFilter<"YongchaContract"> | number
    oldId?: StringNullableFilter<"YongchaContract"> | string | null
    year?: IntFilter<"YongchaContract"> | number
    affiliationId?: IntFilter<"YongchaContract"> | number
    startDate?: DateTimeFilter<"YongchaContract"> | Date | string
    endDate?: DateTimeFilter<"YongchaContract"> | Date | string
    status?: StringFilter<"YongchaContract"> | string
    createdAt?: DateTimeFilter<"YongchaContract"> | Date | string
    updatedAt?: DateTimeFilter<"YongchaContract"> | Date | string
    memo?: StringNullableFilter<"YongchaContract"> | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutAffiliationInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAffiliationInput, UserUncheckedUpdateWithoutAffiliationInput>
    create: XOR<UserCreateWithoutAffiliationInput, UserUncheckedCreateWithoutAffiliationInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAffiliationInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAffiliationInput, UserUncheckedUpdateWithoutAffiliationInput>
  }

  export type UserUpdateManyWithWhereWithoutAffiliationInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAffiliationInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    oldId?: StringNullableFilter<"User"> | string | null
    loginId?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    affiliationId?: IntNullableFilter<"User"> | number | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type AffiliationCreateWithoutUserInput = {
    oldId?: string | null
    name: string
    bizNo?: string | null
    ceo?: string | null
    address?: string | null
    manager?: string | null
    contact?: string | null
    email?: string | null
    memo?: string | null
    createdAt?: Date | string
    Driver?: DriverCreateNestedManyWithoutAffiliationInput
    YongchaContract?: YongchaContractCreateNestedManyWithoutAffiliationInput
  }

  export type AffiliationUncheckedCreateWithoutUserInput = {
    id?: number
    oldId?: string | null
    name: string
    bizNo?: string | null
    ceo?: string | null
    address?: string | null
    manager?: string | null
    contact?: string | null
    email?: string | null
    memo?: string | null
    createdAt?: Date | string
    Driver?: DriverUncheckedCreateNestedManyWithoutAffiliationInput
    YongchaContract?: YongchaContractUncheckedCreateNestedManyWithoutAffiliationInput
  }

  export type AffiliationCreateOrConnectWithoutUserInput = {
    where: AffiliationWhereUniqueInput
    create: XOR<AffiliationCreateWithoutUserInput, AffiliationUncheckedCreateWithoutUserInput>
  }

  export type AffiliationUpsertWithoutUserInput = {
    update: XOR<AffiliationUpdateWithoutUserInput, AffiliationUncheckedUpdateWithoutUserInput>
    create: XOR<AffiliationCreateWithoutUserInput, AffiliationUncheckedCreateWithoutUserInput>
    where?: AffiliationWhereInput
  }

  export type AffiliationUpdateToOneWithWhereWithoutUserInput = {
    where?: AffiliationWhereInput
    data: XOR<AffiliationUpdateWithoutUserInput, AffiliationUncheckedUpdateWithoutUserInput>
  }

  export type AffiliationUpdateWithoutUserInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    bizNo?: NullableStringFieldUpdateOperationsInput | string | null
    ceo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Driver?: DriverUpdateManyWithoutAffiliationNestedInput
    YongchaContract?: YongchaContractUpdateManyWithoutAffiliationNestedInput
  }

  export type AffiliationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    bizNo?: NullableStringFieldUpdateOperationsInput | string | null
    ceo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Driver?: DriverUncheckedUpdateManyWithoutAffiliationNestedInput
    YongchaContract?: YongchaContractUncheckedUpdateManyWithoutAffiliationNestedInput
  }

  export type SettlementHistoryCreateWithoutYongchaContractInput = {
    oldId?: string | null
    date: Date | string
    driverName: string
    affiliation?: string | null
    tonnage?: string | null
    destCount: number
    totalWeight: number
    fee: number
    memo?: string | null
    status?: string
    isPbox?: boolean
    isReturn?: boolean
    so?: string | null
    nap?: string | null
    ton?: number | null
    createdAt?: Date | string
    appliedTonnage?: string | null
    gwon?: number | null
    originalFee?: number
  }

  export type SettlementHistoryUncheckedCreateWithoutYongchaContractInput = {
    id?: number
    oldId?: string | null
    date: Date | string
    driverName: string
    affiliation?: string | null
    tonnage?: string | null
    destCount: number
    totalWeight: number
    fee: number
    memo?: string | null
    status?: string
    isPbox?: boolean
    isReturn?: boolean
    so?: string | null
    nap?: string | null
    ton?: number | null
    createdAt?: Date | string
    appliedTonnage?: string | null
    gwon?: number | null
    originalFee?: number
  }

  export type SettlementHistoryCreateOrConnectWithoutYongchaContractInput = {
    where: SettlementHistoryWhereUniqueInput
    create: XOR<SettlementHistoryCreateWithoutYongchaContractInput, SettlementHistoryUncheckedCreateWithoutYongchaContractInput>
  }

  export type SettlementHistoryCreateManyYongchaContractInputEnvelope = {
    data: SettlementHistoryCreateManyYongchaContractInput | SettlementHistoryCreateManyYongchaContractInput[]
  }

  export type AffiliationCreateWithoutYongchaContractInput = {
    oldId?: string | null
    name: string
    bizNo?: string | null
    ceo?: string | null
    address?: string | null
    manager?: string | null
    contact?: string | null
    email?: string | null
    memo?: string | null
    createdAt?: Date | string
    Driver?: DriverCreateNestedManyWithoutAffiliationInput
    User?: UserCreateNestedManyWithoutAffiliationInput
  }

  export type AffiliationUncheckedCreateWithoutYongchaContractInput = {
    id?: number
    oldId?: string | null
    name: string
    bizNo?: string | null
    ceo?: string | null
    address?: string | null
    manager?: string | null
    contact?: string | null
    email?: string | null
    memo?: string | null
    createdAt?: Date | string
    Driver?: DriverUncheckedCreateNestedManyWithoutAffiliationInput
    User?: UserUncheckedCreateNestedManyWithoutAffiliationInput
  }

  export type AffiliationCreateOrConnectWithoutYongchaContractInput = {
    where: AffiliationWhereUniqueInput
    create: XOR<AffiliationCreateWithoutYongchaContractInput, AffiliationUncheckedCreateWithoutYongchaContractInput>
  }

  export type YongchaRateDetailCreateWithoutYongchaContractInput = {
    oldId?: string | null
    region: string
    price: number
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YongchaRateDetailUncheckedCreateWithoutYongchaContractInput = {
    id?: number
    oldId?: string | null
    region: string
    price: number
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YongchaRateDetailCreateOrConnectWithoutYongchaContractInput = {
    where: YongchaRateDetailWhereUniqueInput
    create: XOR<YongchaRateDetailCreateWithoutYongchaContractInput, YongchaRateDetailUncheckedCreateWithoutYongchaContractInput>
  }

  export type YongchaRateDetailCreateManyYongchaContractInputEnvelope = {
    data: YongchaRateDetailCreateManyYongchaContractInput | YongchaRateDetailCreateManyYongchaContractInput[]
  }

  export type SettlementHistoryUpsertWithWhereUniqueWithoutYongchaContractInput = {
    where: SettlementHistoryWhereUniqueInput
    update: XOR<SettlementHistoryUpdateWithoutYongchaContractInput, SettlementHistoryUncheckedUpdateWithoutYongchaContractInput>
    create: XOR<SettlementHistoryCreateWithoutYongchaContractInput, SettlementHistoryUncheckedCreateWithoutYongchaContractInput>
  }

  export type SettlementHistoryUpdateWithWhereUniqueWithoutYongchaContractInput = {
    where: SettlementHistoryWhereUniqueInput
    data: XOR<SettlementHistoryUpdateWithoutYongchaContractInput, SettlementHistoryUncheckedUpdateWithoutYongchaContractInput>
  }

  export type SettlementHistoryUpdateManyWithWhereWithoutYongchaContractInput = {
    where: SettlementHistoryScalarWhereInput
    data: XOR<SettlementHistoryUpdateManyMutationInput, SettlementHistoryUncheckedUpdateManyWithoutYongchaContractInput>
  }

  export type SettlementHistoryScalarWhereInput = {
    AND?: SettlementHistoryScalarWhereInput | SettlementHistoryScalarWhereInput[]
    OR?: SettlementHistoryScalarWhereInput[]
    NOT?: SettlementHistoryScalarWhereInput | SettlementHistoryScalarWhereInput[]
    id?: IntFilter<"SettlementHistory"> | number
    oldId?: StringNullableFilter<"SettlementHistory"> | string | null
    date?: DateTimeFilter<"SettlementHistory"> | Date | string
    driverName?: StringFilter<"SettlementHistory"> | string
    affiliation?: StringNullableFilter<"SettlementHistory"> | string | null
    tonnage?: StringNullableFilter<"SettlementHistory"> | string | null
    destCount?: IntFilter<"SettlementHistory"> | number
    totalWeight?: IntFilter<"SettlementHistory"> | number
    fee?: IntFilter<"SettlementHistory"> | number
    memo?: StringNullableFilter<"SettlementHistory"> | string | null
    status?: StringFilter<"SettlementHistory"> | string
    isPbox?: BoolFilter<"SettlementHistory"> | boolean
    isReturn?: BoolFilter<"SettlementHistory"> | boolean
    so?: StringNullableFilter<"SettlementHistory"> | string | null
    nap?: StringNullableFilter<"SettlementHistory"> | string | null
    ton?: IntNullableFilter<"SettlementHistory"> | number | null
    contractId?: IntNullableFilter<"SettlementHistory"> | number | null
    createdAt?: DateTimeFilter<"SettlementHistory"> | Date | string
    appliedTonnage?: StringNullableFilter<"SettlementHistory"> | string | null
    gwon?: IntNullableFilter<"SettlementHistory"> | number | null
    originalFee?: IntFilter<"SettlementHistory"> | number
  }

  export type AffiliationUpsertWithoutYongchaContractInput = {
    update: XOR<AffiliationUpdateWithoutYongchaContractInput, AffiliationUncheckedUpdateWithoutYongchaContractInput>
    create: XOR<AffiliationCreateWithoutYongchaContractInput, AffiliationUncheckedCreateWithoutYongchaContractInput>
    where?: AffiliationWhereInput
  }

  export type AffiliationUpdateToOneWithWhereWithoutYongchaContractInput = {
    where?: AffiliationWhereInput
    data: XOR<AffiliationUpdateWithoutYongchaContractInput, AffiliationUncheckedUpdateWithoutYongchaContractInput>
  }

  export type AffiliationUpdateWithoutYongchaContractInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    bizNo?: NullableStringFieldUpdateOperationsInput | string | null
    ceo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Driver?: DriverUpdateManyWithoutAffiliationNestedInput
    User?: UserUpdateManyWithoutAffiliationNestedInput
  }

  export type AffiliationUncheckedUpdateWithoutYongchaContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    bizNo?: NullableStringFieldUpdateOperationsInput | string | null
    ceo?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    manager?: NullableStringFieldUpdateOperationsInput | string | null
    contact?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Driver?: DriverUncheckedUpdateManyWithoutAffiliationNestedInput
    User?: UserUncheckedUpdateManyWithoutAffiliationNestedInput
  }

  export type YongchaRateDetailUpsertWithWhereUniqueWithoutYongchaContractInput = {
    where: YongchaRateDetailWhereUniqueInput
    update: XOR<YongchaRateDetailUpdateWithoutYongchaContractInput, YongchaRateDetailUncheckedUpdateWithoutYongchaContractInput>
    create: XOR<YongchaRateDetailCreateWithoutYongchaContractInput, YongchaRateDetailUncheckedCreateWithoutYongchaContractInput>
  }

  export type YongchaRateDetailUpdateWithWhereUniqueWithoutYongchaContractInput = {
    where: YongchaRateDetailWhereUniqueInput
    data: XOR<YongchaRateDetailUpdateWithoutYongchaContractInput, YongchaRateDetailUncheckedUpdateWithoutYongchaContractInput>
  }

  export type YongchaRateDetailUpdateManyWithWhereWithoutYongchaContractInput = {
    where: YongchaRateDetailScalarWhereInput
    data: XOR<YongchaRateDetailUpdateManyMutationInput, YongchaRateDetailUncheckedUpdateManyWithoutYongchaContractInput>
  }

  export type YongchaRateDetailScalarWhereInput = {
    AND?: YongchaRateDetailScalarWhereInput | YongchaRateDetailScalarWhereInput[]
    OR?: YongchaRateDetailScalarWhereInput[]
    NOT?: YongchaRateDetailScalarWhereInput | YongchaRateDetailScalarWhereInput[]
    id?: IntFilter<"YongchaRateDetail"> | number
    oldId?: StringNullableFilter<"YongchaRateDetail"> | string | null
    contractId?: IntFilter<"YongchaRateDetail"> | number
    region?: StringFilter<"YongchaRateDetail"> | string
    price?: IntFilter<"YongchaRateDetail"> | number
    memo?: StringNullableFilter<"YongchaRateDetail"> | string | null
    createdAt?: DateTimeFilter<"YongchaRateDetail"> | Date | string
    updatedAt?: DateTimeFilter<"YongchaRateDetail"> | Date | string
  }

  export type YongchaContractCreateWithoutYongchaRateDetailInput = {
    oldId?: string | null
    year: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memo?: string | null
    SettlementHistory?: SettlementHistoryCreateNestedManyWithoutYongchaContractInput
    Affiliation: AffiliationCreateNestedOneWithoutYongchaContractInput
  }

  export type YongchaContractUncheckedCreateWithoutYongchaRateDetailInput = {
    id?: number
    oldId?: string | null
    year: number
    affiliationId: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memo?: string | null
    SettlementHistory?: SettlementHistoryUncheckedCreateNestedManyWithoutYongchaContractInput
  }

  export type YongchaContractCreateOrConnectWithoutYongchaRateDetailInput = {
    where: YongchaContractWhereUniqueInput
    create: XOR<YongchaContractCreateWithoutYongchaRateDetailInput, YongchaContractUncheckedCreateWithoutYongchaRateDetailInput>
  }

  export type YongchaContractUpsertWithoutYongchaRateDetailInput = {
    update: XOR<YongchaContractUpdateWithoutYongchaRateDetailInput, YongchaContractUncheckedUpdateWithoutYongchaRateDetailInput>
    create: XOR<YongchaContractCreateWithoutYongchaRateDetailInput, YongchaContractUncheckedCreateWithoutYongchaRateDetailInput>
    where?: YongchaContractWhereInput
  }

  export type YongchaContractUpdateToOneWithWhereWithoutYongchaRateDetailInput = {
    where?: YongchaContractWhereInput
    data: XOR<YongchaContractUpdateWithoutYongchaRateDetailInput, YongchaContractUncheckedUpdateWithoutYongchaRateDetailInput>
  }

  export type YongchaContractUpdateWithoutYongchaRateDetailInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementHistory?: SettlementHistoryUpdateManyWithoutYongchaContractNestedInput
    Affiliation?: AffiliationUpdateOneRequiredWithoutYongchaContractNestedInput
  }

  export type YongchaContractUncheckedUpdateWithoutYongchaRateDetailInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    affiliationId?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementHistory?: SettlementHistoryUncheckedUpdateManyWithoutYongchaContractNestedInput
  }

  export type DriverCreateManyAffiliationInput = {
    id?: number
    oldId?: string | null
    name: string
    carNo?: string | null
    tonnage?: string | null
    phone?: string | null
    regDate?: Date | string | null
    address?: string | null
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type YongchaContractCreateManyAffiliationInput = {
    id?: number
    oldId?: string | null
    year: number
    startDate: Date | string
    endDate: Date | string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    memo?: string | null
  }

  export type UserCreateManyAffiliationInput = {
    id?: number
    oldId?: string | null
    loginId: string
    password: string
    name: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateWithoutAffiliationInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    carNo?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    regDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateWithoutAffiliationInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    carNo?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    regDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyWithoutAffiliationInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    carNo?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    regDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YongchaContractUpdateWithoutAffiliationInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementHistory?: SettlementHistoryUpdateManyWithoutYongchaContractNestedInput
    YongchaRateDetail?: YongchaRateDetailUpdateManyWithoutYongchaContractNestedInput
  }

  export type YongchaContractUncheckedUpdateWithoutAffiliationInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    SettlementHistory?: SettlementHistoryUncheckedUpdateManyWithoutYongchaContractNestedInput
    YongchaRateDetail?: YongchaRateDetailUncheckedUpdateManyWithoutYongchaContractNestedInput
  }

  export type YongchaContractUncheckedUpdateManyWithoutAffiliationInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    memo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutAffiliationInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutAffiliationInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutAffiliationInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    loginId?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettlementHistoryCreateManyYongchaContractInput = {
    id?: number
    oldId?: string | null
    date: Date | string
    driverName: string
    affiliation?: string | null
    tonnage?: string | null
    destCount: number
    totalWeight: number
    fee: number
    memo?: string | null
    status?: string
    isPbox?: boolean
    isReturn?: boolean
    so?: string | null
    nap?: string | null
    ton?: number | null
    createdAt?: Date | string
    appliedTonnage?: string | null
    gwon?: number | null
    originalFee?: number
  }

  export type YongchaRateDetailCreateManyYongchaContractInput = {
    id?: number
    oldId?: string | null
    region: string
    price: number
    memo?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SettlementHistoryUpdateWithoutYongchaContractInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    driverName?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    destCount?: IntFieldUpdateOperationsInput | number
    totalWeight?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isPbox?: BoolFieldUpdateOperationsInput | boolean
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    so?: NullableStringFieldUpdateOperationsInput | string | null
    nap?: NullableStringFieldUpdateOperationsInput | string | null
    ton?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedTonnage?: NullableStringFieldUpdateOperationsInput | string | null
    gwon?: NullableIntFieldUpdateOperationsInput | number | null
    originalFee?: IntFieldUpdateOperationsInput | number
  }

  export type SettlementHistoryUncheckedUpdateWithoutYongchaContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    driverName?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    destCount?: IntFieldUpdateOperationsInput | number
    totalWeight?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isPbox?: BoolFieldUpdateOperationsInput | boolean
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    so?: NullableStringFieldUpdateOperationsInput | string | null
    nap?: NullableStringFieldUpdateOperationsInput | string | null
    ton?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedTonnage?: NullableStringFieldUpdateOperationsInput | string | null
    gwon?: NullableIntFieldUpdateOperationsInput | number | null
    originalFee?: IntFieldUpdateOperationsInput | number
  }

  export type SettlementHistoryUncheckedUpdateManyWithoutYongchaContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    driverName?: StringFieldUpdateOperationsInput | string
    affiliation?: NullableStringFieldUpdateOperationsInput | string | null
    tonnage?: NullableStringFieldUpdateOperationsInput | string | null
    destCount?: IntFieldUpdateOperationsInput | number
    totalWeight?: IntFieldUpdateOperationsInput | number
    fee?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    isPbox?: BoolFieldUpdateOperationsInput | boolean
    isReturn?: BoolFieldUpdateOperationsInput | boolean
    so?: NullableStringFieldUpdateOperationsInput | string | null
    nap?: NullableStringFieldUpdateOperationsInput | string | null
    ton?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    appliedTonnage?: NullableStringFieldUpdateOperationsInput | string | null
    gwon?: NullableIntFieldUpdateOperationsInput | number | null
    originalFee?: IntFieldUpdateOperationsInput | number
  }

  export type YongchaRateDetailUpdateWithoutYongchaContractInput = {
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YongchaRateDetailUncheckedUpdateWithoutYongchaContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type YongchaRateDetailUncheckedUpdateManyWithoutYongchaContractInput = {
    id?: IntFieldUpdateOperationsInput | number
    oldId?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    memo?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AffiliationCountOutputTypeDefaultArgs instead
     */
    export type AffiliationCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AffiliationCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use YongchaContractCountOutputTypeDefaultArgs instead
     */
    export type YongchaContractCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = YongchaContractCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DriverDefaultArgs instead
     */
    export type DriverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DriverDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SettlementHistoryDefaultArgs instead
     */
    export type SettlementHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SettlementHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AffiliationDefaultArgs instead
     */
    export type AffiliationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AffiliationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use YongchaContractDefaultArgs instead
     */
    export type YongchaContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = YongchaContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use YongchaRateDetailDefaultArgs instead
     */
    export type YongchaRateDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = YongchaRateDetailDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}