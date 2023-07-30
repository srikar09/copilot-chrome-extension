/* eslint-disable */
import { UserAccount } from './message';

/**
 * CreateUserRequest: Represents the request object invoked against the user
 * service to create a user account
 */
export interface CreateUserRequest {
  /**
   * User account to create
   * Validations:
   * - cannot be nil hence required
   */
  account: UserAccount | undefined;
  /**
   * set of community IDs to follow
   * Validations:
   * - at least 0 and at most 20 community ids supported at one time
   */
  communityIdsToFollow: number[];
  /**
   * The profile image of the user
   * Validations:
   * - must be a valid URI
   */
  profileImage: string;
  /**
   * The password  of the user
   * Validations:
   * - must be a at least 10 characters long
   */
  password: string;
}

/**
 * CreateUserResponse: Represents the response object returned as a response to
 * the `create-user` request
 */
export interface CreateUserResponse {
  userId: number;
}

function createBaseCreateUserRequest(): CreateUserRequest {
  return { account: undefined, communityIdsToFollow: [], profileImage: '', password: '' };
}

export const CreateUserRequest = {
  fromJSON(object: any): CreateUserRequest {
    return {
      account: isSet(object.account) ? UserAccount.fromJSON(object.account) : undefined,
      communityIdsToFollow: Array.isArray(object?.communityIdsToFollow)
        ? object.communityIdsToFollow.map((e: any) => Number(e))
        : [],
      profileImage: isSet(object.profileImage) ? String(object.profileImage) : '',
      password: isSet(object.password) ? String(object.password) : '',
    };
  },

  toJSON(message: CreateUserRequest): unknown {
    const obj: any = {};
    message.account !== undefined &&
      (obj.account = message.account ? UserAccount.toJSON(message.account) : undefined);
    if (message.communityIdsToFollow) {
      obj.communityIdsToFollow = message.communityIdsToFollow.map((e) => Math.round(e));
    } else {
      obj.communityIdsToFollow = [];
    }
    message.profileImage !== undefined && (obj.profileImage = message.profileImage);
    message.password !== undefined && (obj.password = message.password);
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserRequest>, I>>(base?: I): CreateUserRequest {
    return CreateUserRequest.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserRequest>, I>>(object: I): CreateUserRequest {
    const message = createBaseCreateUserRequest();
    message.account =
      object.account !== undefined && object.account !== null
        ? UserAccount.fromPartial(object.account)
        : undefined;
    message.communityIdsToFollow = object.communityIdsToFollow?.map((e) => e) || [];
    message.profileImage = object.profileImage ?? '';
    message.password = object.password ?? '';
    return message;
  },
};

function createBaseCreateUserResponse(): CreateUserResponse {
  return { userId: 0 };
}

export const CreateUserResponse = {
  fromJSON(object: any): CreateUserResponse {
    return { userId: isSet(object.userId) ? Number(object.userId) : 0 };
  },

  toJSON(message: CreateUserResponse): unknown {
    const obj: any = {};
    message.userId !== undefined && (obj.userId = Math.round(message.userId));
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateUserResponse>, I>>(base?: I): CreateUserResponse {
    return CreateUserResponse.fromPartial(base ?? {});
  },

  fromPartial<I extends Exact<DeepPartial<CreateUserResponse>, I>>(object: I): CreateUserResponse {
    const message = createBaseCreateUserResponse();
    message.userId = object.userId ?? 0;
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var tsProtoGlobalThis: any = (() => {
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
