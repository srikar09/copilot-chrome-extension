export interface TransactionLocation {
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  lat: number;
  lon: number;
  storeNumber: string;
}

export interface PaymentMeta {
  byOrderOf: string;
  payee: string;
  payer: string;
  paymentMethod: string;
  paymentProcessor: string;
  ppdId: string;
  reason: string;
  referenceNumber: string;
}

export interface Transaction {
  accountId: string;
  amount: number;
  isoCurrencyCode: string;
  unofficialCurrencyCode: string;
  category: string[];
  categoryId: string;
  checkNumber: string;
  date: string;
  datetime: Date | undefined;
  authorizedDate: string;
  authorizedDatetime: Date | undefined;
  location: TransactionLocation | undefined;
  name: string;
  merchantName: string;
  paymentMeta: PaymentMeta | undefined;
  paymentChannel: string;
  pending: boolean;
  pendingTransactionId: string;
  accountOwner: string;
  transactionId: string;
  transactionCode: string;
}

function createBaseTransactionLocation(): TransactionLocation {
  return {
    address: '',
    city: '',
    region: '',
    postalCode: '',
    country: '',
    lat: 0,
    lon: 0,
    storeNumber: '',
  };
}

export const TransactionLocation = {
  create<I extends Exact<DeepPartial<TransactionLocation>, I>>(base?: I): TransactionLocation {
    return TransactionLocation.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<TransactionLocation>, I>>(
    object: I
  ): TransactionLocation {
    const message = createBaseTransactionLocation();
    message.address = object.address ?? '';
    message.city = object.city ?? '';
    message.region = object.region ?? '';
    message.postalCode = object.postalCode ?? '';
    message.country = object.country ?? '';
    message.lat = object.lat ?? 0;
    message.lon = object.lon ?? 0;
    message.storeNumber = object.storeNumber ?? '';
    return message;
  },
};

function createBasePaymentMeta(): PaymentMeta {
  return {
    byOrderOf: '',
    payee: '',
    payer: '',
    paymentMethod: '',
    paymentProcessor: '',
    ppdId: '',
    reason: '',
    referenceNumber: '',
  };
}

export const PaymentMeta = {
  create<I extends Exact<DeepPartial<PaymentMeta>, I>>(base?: I): PaymentMeta {
    return PaymentMeta.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<PaymentMeta>, I>>(object: I): PaymentMeta {
    const message = createBasePaymentMeta();
    message.byOrderOf = object.byOrderOf ?? '';
    message.payee = object.payee ?? '';
    message.payer = object.payer ?? '';
    message.paymentMethod = object.paymentMethod ?? '';
    message.paymentProcessor = object.paymentProcessor ?? '';
    message.ppdId = object.ppdId ?? '';
    message.reason = object.reason ?? '';
    message.referenceNumber = object.referenceNumber ?? '';
    return message;
  },
};

function createBaseTransaction(): Transaction {
  return {
    accountId: '',
    amount: 0,
    isoCurrencyCode: '',
    unofficialCurrencyCode: '',
    category: [],
    categoryId: '',
    checkNumber: '',
    date: '',
    datetime: undefined,
    authorizedDate: '',
    authorizedDatetime: undefined,
    location: undefined,
    name: '',
    merchantName: '',
    paymentMeta: undefined,
    paymentChannel: '',
    pending: false,
    pendingTransactionId: '',
    accountOwner: '',
    transactionId: '',
    transactionCode: '',
  };
}

export const Transaction = {
  create<I extends Exact<DeepPartial<Transaction>, I>>(base?: I): Transaction {
    return Transaction.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Transaction>, I>>(object: I): Transaction {
    const message = createBaseTransaction();
    message.accountId = object.accountId ?? '';
    message.amount = object.amount ?? 0;
    message.isoCurrencyCode = object.isoCurrencyCode ?? '';
    message.unofficialCurrencyCode = object.unofficialCurrencyCode ?? '';
    message.category = object.category?.map((e) => e) || [];
    message.categoryId = object.categoryId ?? '';
    message.checkNumber = object.checkNumber ?? '';
    message.date = object.date ?? '';
    message.datetime = object.datetime ?? undefined;
    message.authorizedDate = object.authorizedDate ?? '';
    message.authorizedDatetime = object.authorizedDatetime ?? undefined;
    message.location =
      object.location !== undefined && object.location !== null
        ? TransactionLocation.fromPartial(object.location)
        : undefined;
    message.name = object.name ?? '';
    message.merchantName = object.merchantName ?? '';
    message.paymentMeta =
      object.paymentMeta !== undefined && object.paymentMeta !== null
        ? PaymentMeta.fromPartial(object.paymentMeta)
        : undefined;
    message.paymentChannel = object.paymentChannel ?? '';
    message.pending = object.pending ?? false;
    message.pendingTransactionId = object.pendingTransactionId ?? '';
    message.accountOwner = object.accountOwner ?? '';
    message.transactionId = object.transactionId ?? '';
    message.transactionCode = object.transactionCode ?? '';
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
