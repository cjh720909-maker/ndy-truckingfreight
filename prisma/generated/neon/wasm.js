
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.NDY_BillingItemScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  billingRecipient: 'billingRecipient',
  type: 'type',
  mergeCriteria: 'mergeCriteria',
  note: 'note',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NDY_BillingRateScalarFieldEnum = {
  id: 'id',
  itemId: 'itemId',
  validFrom: 'validFrom',
  validTo: 'validTo',
  amount: 'amount',
  note: 'note',
  createdAt: 'createdAt'
};

exports.Prisma.NDY_ConfigScalarFieldEnum = {
  key: 'key',
  data: 'data',
  updatedAt: 'updatedAt'
};

exports.Prisma.NDY_DailySummaryScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NDY_DailySummaryItemScalarFieldEnum = {
  id: 'id',
  summaryId: 'summaryId',
  placeName: 'placeName',
  deliveryDays: 'deliveryDays',
  totalAmount: 'totalAmount',
  deliveryDates: 'deliveryDates'
};

exports.Prisma.NDY_EmergencyRateScalarFieldEnum = {
  name: 'name',
  rate: 'rate',
  chung: 'chung',
  updatedAt: 'updatedAt'
};

exports.Prisma.NDY_EmergencySettlementScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  name: 'name',
  chung: 'chung',
  count: 'count',
  rate: 'rate',
  total: 'total',
  dates: 'dates',
  createdAt: 'createdAt'
};

exports.Prisma.NDY_FixedSettlementScalarFieldEnum = {
  id: 'id',
  name: 'name',
  billingRecipient: 'billingRecipient',
  amount: 'amount',
  count: 'count',
  rate: 'rate',
  note: 'note',
  createdAt: 'createdAt'
};

exports.Prisma.NDY_GSSettlementScalarFieldEnum = {
  id: 'id',
  date: 'date',
  code: 'code',
  name: 'name',
  qty: 'qty',
  weight: 'weight',
  amount: 'amount',
  remarks: 'remarks',
  modDate: 'modDate'
};

exports.Prisma.NDY_GSSummaryScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  weekday: 'weekday',
  saturday: 'saturday',
  sunday: 'sunday',
  extraTrucks: 'extraTrucks',
  totalAmount: 'totalAmount',
  dates: 'dates',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NDY_InquirySettlementScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  date: 'date',
  name: 'name',
  so: 'so',
  nap: 'nap',
  ton: 'ton',
  kum: 'kum',
  yo: 'yo',
  chung: 'chung',
  un: 'un',
  memo: 'memo',
  createdAt: 'createdAt'
};

exports.Prisma.NDY_MonthlyClosingScalarFieldEnum = {
  id: 'id',
  startDate: 'startDate',
  endDate: 'endDate',
  data: 'data',
  closedAt: 'closedAt'
};

exports.Prisma.DriverScalarFieldEnum = {
  id: 'id',
  name: 'name',
  affiliationId: 'affiliationId',
  carNo: 'carNo',
  tonnage: 'tonnage',
  phone: 'phone',
  regDate: 'regDate',
  address: 'address',
  memo: 'memo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  oldId: 'oldId'
};

exports.Prisma.SettlementHistoryScalarFieldEnum = {
  id: 'id',
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
  appliedTonnage: 'appliedTonnage',
  createdAt: 'createdAt',
  oldId: 'oldId',
  originalFee: 'originalFee'
};

exports.Prisma.AffiliationScalarFieldEnum = {
  id: 'id',
  name: 'name',
  bizNo: 'bizNo',
  ceo: 'ceo',
  address: 'address',
  manager: 'manager',
  contact: 'contact',
  email: 'email',
  memo: 'memo',
  createdAt: 'createdAt',
  oldId: 'oldId'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  loginId: 'loginId',
  password: 'password',
  name: 'name',
  role: 'role',
  affiliationId: 'affiliationId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  oldId: 'oldId'
};

exports.Prisma.YongchaContractScalarFieldEnum = {
  id: 'id',
  year: 'year',
  affiliationId: 'affiliationId',
  startDate: 'startDate',
  endDate: 'endDate',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  memo: 'memo',
  oldId: 'oldId'
};

exports.Prisma.YongchaRateDetailScalarFieldEnum = {
  id: 'id',
  contractId: 'contractId',
  tonnage: 'tonnage',
  region: 'region',
  price: 'price',
  memo: 'memo',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  oldId: 'oldId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.JsonNullValueInput = {
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  NDY_BillingItem: 'NDY_BillingItem',
  NDY_BillingRate: 'NDY_BillingRate',
  NDY_Config: 'NDY_Config',
  NDY_DailySummary: 'NDY_DailySummary',
  NDY_DailySummaryItem: 'NDY_DailySummaryItem',
  NDY_EmergencyRate: 'NDY_EmergencyRate',
  NDY_EmergencySettlement: 'NDY_EmergencySettlement',
  NDY_FixedSettlement: 'NDY_FixedSettlement',
  NDY_GSSettlement: 'NDY_GSSettlement',
  NDY_GSSummary: 'NDY_GSSummary',
  NDY_InquirySettlement: 'NDY_InquirySettlement',
  NDY_MonthlyClosing: 'NDY_MonthlyClosing',
  Driver: 'Driver',
  SettlementHistory: 'SettlementHistory',
  Affiliation: 'Affiliation',
  User: 'User',
  YongchaContract: 'YongchaContract',
  YongchaRateDetail: 'YongchaRateDetail'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
