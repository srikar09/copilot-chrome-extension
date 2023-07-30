/** UserAccount: represents a user account in the context of simfinni */
export interface UserAccount {
  /** account id */
  id: number;
  /**
   * account email
   * Validations:
   * - must be an email and required
   */
  email: string;
  /**
   * the address associated with the user
   * Validations:
   * - can be empty
   */
  address: Address | undefined;
  /**
   * simple description specific to account should be less than 200 characters
   * Validations:
   * - can be empty
   */
  bio: string;
  /**
   * profile headline
   * Validations:
   * - can be empty
   */
  headline: string;
  /**
   * account phone number
   * Validations:
   * - mcan be empty
   */
  phoneNumber: string;
  /**
   * sample tags easily associable to account
   * account first name
   * Validations:
   * - must be at provide between 1 and 10 tags
   */
  tags: Tags[];
  /** authentication service account id */
  authnAccountId: number;
  /** infers wether the account is active */
  isActive: boolean;
  /**
   * account first name
   * Validations:
   * - can be empty
   */
  firstname: string;
  /**
   * account last name
   * Validations:
   * - can be empty
   */
  lastname: string;
  /**
   * account user name
   * Validations:
   * - must be at least 10 character
   */
  username: string;
  /** account is private */
  isPrivate: boolean;
  /**
   * isEmailVerified is a field denoting wether or not the user account has
   * indeed verified their email address
   */
  isEmailVerified: boolean;
  createdAt: Date | undefined;
  verifiedAt: Date | undefined;
}

/** Address: represents an account's address */
export interface Address {
  /** address id */
  id: number;
  /**
   * the address field
   * Validations:
   * - must be at least 5 character long (meaning cannot be empty)
   */
  address: string;
  /**
   * the unit if the address is an apartment
   * Validations:
   * - must be at least 1 character long (meaning cannot be empty)
   */
  unit: string;
  /**
   * the address zipcode
   * Validations:
   * - must be exactly 5 characters
   */
  zipcode: string;
  /**
   * the city
   * Validations:
   * - must be at least 3 characters long (meaning cannot be empty)
   */
  city: string;
  /**
   * the state/municipality
   * Validations
   * - must be at least 2 characters long
   */
  state: string;
  /**
   * longitude
   * Validations: None - can be empty
   */
  longitude: string;
  /**
   * latittude
   * Validations: None - can be empty
   */
  lattitude: string;
}

/** Tags: represents metadata tags associated to an account */
export interface Tags {
  /** tag id */
  id: number;
  /**
   * name of tag
   * validations:
   * - cannot be empty
   * - must be at least 3 characters long
   */
  tagName: string;
  /**
   * description of tag
   * validations:
   * - cannot be empty
   * - must be at least 10 characters long
   */
  tagDescription: string;
  /**
   * metadata associated with tag
   * validations:
   * - must provide between 1 and 10 metadata tags
   */
  metadata: string[];
}

function createBaseUserAccount(): UserAccount {
  return {
    id: 0,
    email: '',
    address: undefined,
    bio: '',
    headline: '',
    phoneNumber: '',
    tags: [],
    authnAccountId: 0,
    isActive: false,
    firstname: '',
    lastname: '',
    username: '',
    isPrivate: false,
    isEmailVerified: false,
    createdAt: undefined,
    verifiedAt: undefined,
  };
}

export const UserAccount = {
  fromJSON(object: any): UserAccount {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      email: isSet(object.email) ? String(object.email) : '',
      address: isSet(object.address) ? Address.fromJSON(object.address) : undefined,
      bio: isSet(object.bio) ? String(object.bio) : '',
      headline: isSet(object.headline) ? String(object.headline) : '',
      phoneNumber: isSet(object.phoneNumber) ? String(object.phoneNumber) : '',
      tags: Array.isArray(object?.tags) ? object.tags.map((e: any) => Tags.fromJSON(e)) : [],
      authnAccountId: isSet(object.authnAccountId) ? Number(object.authnAccountId) : 0,
      isActive: isSet(object.isActive) ? Boolean(object.isActive) : false,
      firstname: isSet(object.firstname) ? String(object.firstname) : '',
      lastname: isSet(object.lastname) ? String(object.lastname) : '',
      username: isSet(object.username) ? String(object.username) : '',
      isPrivate: isSet(object.isPrivate) ? Boolean(object.isPrivate) : false,
      isEmailVerified: isSet(object.isEmailVerified) ? Boolean(object.isEmailVerified) : false,
      createdAt: undefined,
      verifiedAt: undefined,
    };
  },

  toJSON(message: UserAccount): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.email !== undefined && (obj.email = message.email);
    message.address !== undefined &&
      (obj.address = message.address ? Address.toJSON(message.address) : undefined);
    message.bio !== undefined && (obj.bio = message.bio);
    message.headline !== undefined && (obj.headline = message.headline);
    message.phoneNumber !== undefined && (obj.phoneNumber = message.phoneNumber);
    if (message.tags) {
      obj.tags = message.tags.map((e) => (e ? Tags.toJSON(e) : undefined));
    } else {
      obj.tags = [];
    }
    message.authnAccountId !== undefined &&
      (obj.authnAccountId = Math.round(message.authnAccountId));
    message.isActive !== undefined && (obj.isActive = message.isActive);
    message.firstname !== undefined && (obj.firstname = message.firstname);
    message.lastname !== undefined && (obj.lastname = message.lastname);
    message.username !== undefined && (obj.username = message.username);
    message.isPrivate !== undefined && (obj.isPrivate = message.isPrivate);
    message.isEmailVerified !== undefined && (obj.isEmailVerified = message.isEmailVerified);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
    message.verifiedAt !== undefined && (obj.verifiedAt = message.verifiedAt.toISOString());
    return obj;
  },

  create<I extends Exact<DeepPartial<UserAccount>, I>>(base?: I): UserAccount {
    return UserAccount.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<UserAccount>, I>>(object: I): UserAccount {
    const message = createBaseUserAccount();
    message.id = object.id ?? 0;
    message.email = object.email ?? '';
    message.address =
      object.address !== undefined && object.address !== null
        ? Address.fromPartial(object.address)
        : undefined;
    message.bio = object.bio ?? '';
    message.headline = object.headline ?? '';
    message.phoneNumber = object.phoneNumber ?? '';
    message.tags = object.tags?.map((e) => Tags.fromPartial(e)) || [];
    message.authnAccountId = object.authnAccountId ?? 0;
    message.isActive = object.isActive ?? false;
    message.firstname = object.firstname ?? '';
    message.lastname = object.lastname ?? '';
    message.username = object.username ?? '';
    message.isPrivate = object.isPrivate ?? false;
    message.isEmailVerified = object.isEmailVerified ?? false;
    message.createdAt = object.createdAt ?? undefined;
    message.verifiedAt = object.verifiedAt ?? undefined;
    return message;
  },
};

function createBaseAddress(): Address {
  return {
    id: 0,
    address: '',
    unit: '',
    zipcode: '',
    city: '',
    state: '',
    longitude: '',
    lattitude: '',
  };
}

export const Address = {
  fromJSON(object: any): Address {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      address: isSet(object.address) ? String(object.address) : '',
      unit: isSet(object.unit) ? String(object.unit) : '',
      zipcode: isSet(object.zipcode) ? String(object.zipcode) : '',
      city: isSet(object.city) ? String(object.city) : '',
      state: isSet(object.state) ? String(object.state) : '',
      longitude: isSet(object.longitude) ? String(object.longitude) : '',
      lattitude: isSet(object.lattitude) ? String(object.lattitude) : '',
    };
  },

  toJSON(message: Address): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.address !== undefined && (obj.address = message.address);
    message.unit !== undefined && (obj.unit = message.unit);
    message.zipcode !== undefined && (obj.zipcode = message.zipcode);
    message.city !== undefined && (obj.city = message.city);
    message.state !== undefined && (obj.state = message.state);
    message.longitude !== undefined && (obj.longitude = message.longitude);
    message.lattitude !== undefined && (obj.lattitude = message.lattitude);
    return obj;
  },

  create<I extends Exact<DeepPartial<Address>, I>>(base?: I): Address {
    return Address.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Address>, I>>(object: I): Address {
    const message = createBaseAddress();
    message.id = object.id ?? 0;
    message.address = object.address ?? '';
    message.unit = object.unit ?? '';
    message.zipcode = object.zipcode ?? '';
    message.city = object.city ?? '';
    message.state = object.state ?? '';
    message.longitude = object.longitude ?? '';
    message.lattitude = object.lattitude ?? '';
    return message;
  },
};

function createBaseTags(): Tags {
  return { id: 0, tagName: '', tagDescription: '', metadata: [] };
}

export const Tags = {
  fromJSON(object: any): Tags {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      tagName: isSet(object.tagName) ? String(object.tagName) : '',
      tagDescription: isSet(object.tagDescription) ? String(object.tagDescription) : '',
      metadata: Array.isArray(object?.metadata) ? object.metadata.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: Tags): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = Math.round(message.id));
    message.tagName !== undefined && (obj.tagName = message.tagName);
    message.tagDescription !== undefined && (obj.tagDescription = message.tagDescription);
    if (message.metadata) {
      obj.metadata = message.metadata.map((e) => e);
    } else {
      obj.metadata = [];
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Tags>, I>>(base?: I): Tags {
    return Tags.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<Tags>, I>>(object: I): Tags {
    const message = createBaseTags();
    message.id = object.id ?? 0;
    message.tagName = object.tagName ?? '';
    message.tagDescription = object.tagDescription ?? '';
    message.metadata = object.metadata?.map((e) => e) || [];
    return message;
  },
};

declare let self: any | undefined;
declare let window: any | undefined;
declare let global: any | undefined;
const tsProtoGlobalThis: any = (() => {
  if (typeof globalThis !== 'undefined') {
    return globalThis;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof global !== 'undefined') {
    return global;
  }
  throw 'Unable to locate global object';
})();

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
