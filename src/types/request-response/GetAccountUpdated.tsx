import { GetPollsRequest } from "../social/request_response";

export interface GetAccountUpdated{
    userId: number
}
  
function createBaseGetAccountUpdated(): GetAccountUpdated {
    return { userId: 0 };
  }
  
  export const GetAccountUpdatedRequest = {
    fromJSON(object: any): GetAccountUpdated {
      return { userId: isSet(object.userId) ? Number(object.userId) : 0 };
    },
  
    toJSON(message: GetAccountUpdated): unknown {
      const obj: any = {};
      message.userId !== undefined && (obj.userId = Math.round(message.userId));
      return obj;
    },
  
    create<I extends Exact<DeepPartial<GetAccountUpdated>, I>>(base?: I): GetAccountUpdated {
      return GetPollsRequest.fromPartial(base ?? {});
    },
  
    fromPartial<I extends Exact<DeepPartial<GetAccountUpdated>, I>>(object: I): GetAccountUpdated {
      const message = createBaseGetAccountUpdated();
      message.userId = object.userId ?? 0;
      return message;
    },
  };


function isSet(value: any): boolean {
    return value !== null && value !== undefined;
}
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
    : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
        [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
      };