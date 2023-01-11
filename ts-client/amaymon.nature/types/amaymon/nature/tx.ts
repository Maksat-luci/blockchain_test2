/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "amaymon.nature";

export interface MsgAddAccount {
  creator: string;
  amount: string;
  toAccount: string;
}

export interface MsgAddAccountResponse {
}

function createBaseMsgAddAccount(): MsgAddAccount {
  return { creator: "", amount: "", toAccount: "" };
}

export const MsgAddAccount = {
  encode(message: MsgAddAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== "") {
      writer.uint32(18).string(message.amount);
    }
    if (message.toAccount !== "") {
      writer.uint32(26).string(message.toAccount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccount {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAccount();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.string();
          break;
        case 3:
          message.toAccount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddAccount {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      toAccount: isSet(object.toAccount) ? String(object.toAccount) : "",
    };
  },

  toJSON(message: MsgAddAccount): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = message.amount);
    message.toAccount !== undefined && (obj.toAccount = message.toAccount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddAccount>, I>>(object: I): MsgAddAccount {
    const message = createBaseMsgAddAccount();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? "";
    message.toAccount = object.toAccount ?? "";
    return message;
  },
};

function createBaseMsgAddAccountResponse(): MsgAddAccountResponse {
  return {};
}

export const MsgAddAccountResponse = {
  encode(_: MsgAddAccountResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddAccountResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgAddAccountResponse {
    return {};
  },

  toJSON(_: MsgAddAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddAccountResponse>, I>>(_: I): MsgAddAccountResponse {
    const message = createBaseMsgAddAccountResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AddAccount(request: MsgAddAccount): Promise<MsgAddAccountResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddAccount = this.AddAccount.bind(this);
  }
  AddAccount(request: MsgAddAccount): Promise<MsgAddAccountResponse> {
    const data = MsgAddAccount.encode(request).finish();
    const promise = this.rpc.request("amaymon.nature.Msg", "AddAccount", data);
    return promise.then((data) => MsgAddAccountResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
