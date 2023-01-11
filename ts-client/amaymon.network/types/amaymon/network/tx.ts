/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "amaymon.network";

export interface MsgAddTokens {
  creator: string;
  amount: number;
  toAddress: string;
}

export interface MsgAddTokensResponse {
}

function createBaseMsgAddTokens(): MsgAddTokens {
  return { creator: "", amount: 0, toAddress: "" };
}

export const MsgAddTokens = {
  encode(message: MsgAddTokens, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.amount !== 0) {
      writer.uint32(16).int32(message.amount);
    }
    if (message.toAddress !== "") {
      writer.uint32(26).string(message.toAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddTokens {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddTokens();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.amount = reader.int32();
          break;
        case 3:
          message.toAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddTokens {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      amount: isSet(object.amount) ? Number(object.amount) : 0,
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
    };
  },

  toJSON(message: MsgAddTokens): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.amount !== undefined && (obj.amount = Math.round(message.amount));
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddTokens>, I>>(object: I): MsgAddTokens {
    const message = createBaseMsgAddTokens();
    message.creator = object.creator ?? "";
    message.amount = object.amount ?? 0;
    message.toAddress = object.toAddress ?? "";
    return message;
  },
};

function createBaseMsgAddTokensResponse(): MsgAddTokensResponse {
  return {};
}

export const MsgAddTokensResponse = {
  encode(_: MsgAddTokensResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddTokensResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddTokensResponse();
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

  fromJSON(_: any): MsgAddTokensResponse {
    return {};
  },

  toJSON(_: MsgAddTokensResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddTokensResponse>, I>>(_: I): MsgAddTokensResponse {
    const message = createBaseMsgAddTokensResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  AddTokens(request: MsgAddTokens): Promise<MsgAddTokensResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.AddTokens = this.AddTokens.bind(this);
  }
  AddTokens(request: MsgAddTokens): Promise<MsgAddTokensResponse> {
    const data = MsgAddTokens.encode(request).finish();
    const promise = this.rpc.request("amaymon.network.Msg", "AddTokens", data);
    return promise.then((data) => MsgAddTokensResponse.decode(new _m0.Reader(data)));
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
