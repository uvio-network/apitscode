// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/vote/create.proto" (package "vote", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * CreateI is the input for creating votes.
 *
 *     {
 *         "object": [
 *             {
 *                 "public": {
 *                     "claim": "778237",
 *                     "kind": "stake",
 *                     "lifecycle": "onchain",
 *                     "option": "true",
 *                     "value": "1.5"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message vote.CreateI
 */
export interface CreateI {
  /**
   * @generated from protobuf field: vote.CreateI_Filter filter = 100;
   */
  filter?: CreateI_Filter;
  /**
   * @generated from protobuf field: repeated vote.CreateI_Object object = 200;
   */
  object: CreateI_Object[];
}
/**
 * @generated from protobuf message vote.CreateI_Filter
 */
export interface CreateI_Filter {}
/**
 * @generated from protobuf message vote.CreateI_Object
 */
export interface CreateI_Object {
  /**
   * @generated from protobuf field: vote.CreateI_Object_Intern intern = 100;
   */
  intern?: CreateI_Object_Intern;
  /**
   * @generated from protobuf field: vote.CreateI_Object_Public public = 200;
   */
  public?: CreateI_Object_Public;
}
/**
 * @generated from protobuf message vote.CreateI_Object_Intern
 */
export interface CreateI_Object_Intern {}
/**
 * @generated from protobuf message vote.CreateI_Object_Public
 */
export interface CreateI_Object_Public {
  /**
   * claim is the ID of the referenced claim being voted on. Note that the
   * lifecycle of the referenced claim must be compliant with the vote kind
   * provided.
   *
   * @generated from protobuf field: string claim = 100;
   */
  claim: string;
  /**
   * hash is a votes's confirmed onchain transaction hash. hash left empty
   * implies an interim lifecycle phase "pending". Setting hash implies that the
   * given vote got confirmed onchain, and with it the vote's interim lifecycle
   * phase will not be "pending" anymore, but instead switch to the provided
   * desired lifecycle phase.
   *
   * @generated from protobuf field: string hash = 200;
   */
  hash: string;
  /**
   * kind is the type of vote, e.g. "stake" or "truth" on which a vote is cast.
   * Note that kind must be compliant with the lifecycle of the referenced
   * claim.
   *
   *     "stake" defines votes for users expressing their own opinions. A vote
   *     may have set kind "stake" to express opinions on claims of either kind
   *     "dispute" or "propose".
   *
   *     "truth" defines votes for users verifying real world events. A vote may
   *     have set kind "stake" to verify real events on claims of kind
   *     "resolve".
   *
   *
   * @generated from protobuf field: string kind = 300;
   */
  kind: string;
  /**
   * lifecycle describes the vote's status within the system. This field may
   * look like one of the examples below.
   *
   *     pending
   *     onchain
   *
   * All votes start with the interim system status "pending". Those pending
   * votes were posted offchain, but have not yet been confirmed onchain.
   *
   *     "pending" describes votes that have only been posted offchain
   *
   *     "onchain" describes votes that have been confirmed onchain
   *
   *
   * @generated from protobuf field: string lifecycle = 400;
   */
  lifecycle: string;
  /**
   * meta may contain onchain arbitrary meta data.
   *
   * @generated from protobuf field: string meta = 500;
   */
  meta: string;
  /**
   * option is the side of the vote being cast, e.g. "true" or "false". If
   * option is "true", then the vote is in agreement. If option is "false", then
   * the vote is in disagreement.
   *
   * @generated from protobuf field: string option = 600;
   */
  option: string;
  /**
   * value is the weight of the vote being cast. If kind is "stake", then value
   * might be any positive number. If kind is "truth", then value must be 1.
   *
   * @generated from protobuf field: string value = 700;
   */
  value: string;
}
/**
 * CreateO is the output for creating votes.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "created": "1689001255",
 *                     "id": "778237"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message vote.CreateO
 */
export interface CreateO {
  /**
   * @generated from protobuf field: vote.CreateO_Filter filter = 100;
   */
  filter?: CreateO_Filter;
  /**
   * @generated from protobuf field: repeated vote.CreateO_Object object = 200;
   */
  object: CreateO_Object[];
}
/**
 * @generated from protobuf message vote.CreateO_Filter
 */
export interface CreateO_Filter {}
/**
 * @generated from protobuf message vote.CreateO_Object
 */
export interface CreateO_Object {
  /**
   * @generated from protobuf field: vote.CreateO_Object_Intern intern = 100;
   */
  intern?: CreateO_Object_Intern;
  /**
   * @generated from protobuf field: vote.CreateO_Object_Public public = 200;
   */
  public?: CreateO_Object_Public;
}
/**
 * @generated from protobuf message vote.CreateO_Object_Intern
 */
export interface CreateO_Object_Intern {
  /**
   * created is the unix timestamp in seconds at which the vote got created.
   *
   * @generated from protobuf field: string created = 100;
   */
  created: string;
  /**
   * id is the ID of the vote object being created.
   *
   * @generated from protobuf field: string id = 200;
   */
  id: string;
}
/**
 * @generated from protobuf message vote.CreateO_Object_Public
 */
export interface CreateO_Object_Public {}
declare class CreateI$Type extends MessageType<CreateI> {
  constructor();
  create(value?: PartialMessage<CreateI>): CreateI;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI,
  ): CreateI;
  internalBinaryWrite(
    message: CreateI,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.CreateI
 */
export declare const CreateI: CreateI$Type;
declare class CreateI_Filter$Type extends MessageType<CreateI_Filter> {
  constructor();
  create(value?: PartialMessage<CreateI_Filter>): CreateI_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Filter,
  ): CreateI_Filter;
  internalBinaryWrite(
    message: CreateI_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.CreateI_Filter
 */
export declare const CreateI_Filter: CreateI_Filter$Type;
declare class CreateI_Object$Type extends MessageType<CreateI_Object> {
  constructor();
  create(value?: PartialMessage<CreateI_Object>): CreateI_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Object,
  ): CreateI_Object;
  internalBinaryWrite(
    message: CreateI_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.CreateI_Object
 */
export declare const CreateI_Object: CreateI_Object$Type;
declare class CreateI_Object_Intern$Type extends MessageType<CreateI_Object_Intern> {
  constructor();
  create(value?: PartialMessage<CreateI_Object_Intern>): CreateI_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Object_Intern,
  ): CreateI_Object_Intern;
  internalBinaryWrite(
    message: CreateI_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.CreateI_Object_Intern
 */
export declare const CreateI_Object_Intern: CreateI_Object_Intern$Type;
declare class CreateI_Object_Public$Type extends MessageType<CreateI_Object_Public> {
  constructor();
  create(value?: PartialMessage<CreateI_Object_Public>): CreateI_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateI_Object_Public,
  ): CreateI_Object_Public;
  internalBinaryWrite(
    message: CreateI_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.CreateI_Object_Public
 */
export declare const CreateI_Object_Public: CreateI_Object_Public$Type;
declare class CreateO$Type extends MessageType<CreateO> {
  constructor();
  create(value?: PartialMessage<CreateO>): CreateO;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO,
  ): CreateO;
  internalBinaryWrite(
    message: CreateO,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.CreateO
 */
export declare const CreateO: CreateO$Type;
declare class CreateO_Filter$Type extends MessageType<CreateO_Filter> {
  constructor();
  create(value?: PartialMessage<CreateO_Filter>): CreateO_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Filter,
  ): CreateO_Filter;
  internalBinaryWrite(
    message: CreateO_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.CreateO_Filter
 */
export declare const CreateO_Filter: CreateO_Filter$Type;
declare class CreateO_Object$Type extends MessageType<CreateO_Object> {
  constructor();
  create(value?: PartialMessage<CreateO_Object>): CreateO_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Object,
  ): CreateO_Object;
  internalBinaryWrite(
    message: CreateO_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.CreateO_Object
 */
export declare const CreateO_Object: CreateO_Object$Type;
declare class CreateO_Object_Intern$Type extends MessageType<CreateO_Object_Intern> {
  constructor();
  create(value?: PartialMessage<CreateO_Object_Intern>): CreateO_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Object_Intern,
  ): CreateO_Object_Intern;
  internalBinaryWrite(
    message: CreateO_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.CreateO_Object_Intern
 */
export declare const CreateO_Object_Intern: CreateO_Object_Intern$Type;
declare class CreateO_Object_Public$Type extends MessageType<CreateO_Object_Public> {
  constructor();
  create(value?: PartialMessage<CreateO_Object_Public>): CreateO_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: CreateO_Object_Public,
  ): CreateO_Object_Public;
  internalBinaryWrite(
    message: CreateO_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.CreateO_Object_Public
 */
export declare const CreateO_Object_Public: CreateO_Object_Public$Type;
export {};
