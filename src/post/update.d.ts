// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/post/update.proto" (package "post", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * UpdateI is the input for updating posts.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "id": "778237"
 *                 },
 *                 "public": {
 *                     "hash": "0x1234"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message post.UpdateI
 */
export interface UpdateI {
  /**
   * @generated from protobuf field: post.UpdateI_Filter filter = 100;
   */
  filter?: UpdateI_Filter;
  /**
   * @generated from protobuf field: repeated post.UpdateI_Object object = 200;
   */
  object: UpdateI_Object[];
}
/**
 * @generated from protobuf message post.UpdateI_Filter
 */
export interface UpdateI_Filter {}
/**
 * @generated from protobuf message post.UpdateI_Object
 */
export interface UpdateI_Object {
  /**
   * @generated from protobuf field: post.UpdateI_Object_Intern intern = 100;
   */
  intern?: UpdateI_Object_Intern;
  /**
   * @generated from protobuf field: post.UpdateI_Object_Public public = 200;
   */
  public?: UpdateI_Object_Public;
  /**
   * @generated from protobuf field: post.UpdateI_Object_Symbol symbol = 300;
   */
  symbol?: UpdateI_Object_Symbol;
}
/**
 * @generated from protobuf message post.UpdateI_Object_Intern
 */
export interface UpdateI_Object_Intern {
  /**
   * id is the ID of the post object being updated.
   *
   * @generated from protobuf field: string id = 100;
   */
  id: string;
}
/**
 * @generated from protobuf message post.UpdateI_Object_Public
 */
export interface UpdateI_Object_Public {
  /**
   * hash is a claim's confirmed onchain transaction hash. hash must not be
   * updated for comments. hash can only be updated once, if its prior value was
   * empty. Updating hash implies that the given claim got confirmed onchain,
   * and with it the claim's interim lifecycle phase will not be "pending"
   * anymore, but instead switch to the provided desired lifecycle phase.
   *
   * @generated from protobuf field: string hash = 100;
   */
  hash: string;
  /**
   * meta may contain onchain arbitrary meta data.
   *
   * @generated from protobuf field: string meta = 200;
   */
  meta: string;
}
/**
 * @generated from protobuf message post.UpdateI_Object_Symbol
 */
export interface UpdateI_Object_Symbol {}
/**
 * UpdateO is the output for updating posts.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "status": "updated"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message post.UpdateO
 */
export interface UpdateO {
  /**
   * @generated from protobuf field: post.UpdateO_Filter filter = 100;
   */
  filter?: UpdateO_Filter;
  /**
   * @generated from protobuf field: repeated post.UpdateO_Object object = 200;
   */
  object: UpdateO_Object[];
}
/**
 * @generated from protobuf message post.UpdateO_Filter
 */
export interface UpdateO_Filter {}
/**
 * @generated from protobuf message post.UpdateO_Object
 */
export interface UpdateO_Object {
  /**
   * @generated from protobuf field: post.UpdateO_Object_Intern intern = 100;
   */
  intern?: UpdateO_Object_Intern;
  /**
   * @generated from protobuf field: post.UpdateO_Object_Public public = 200;
   */
  public?: UpdateO_Object_Public;
}
/**
 * @generated from protobuf message post.UpdateO_Object_Intern
 */
export interface UpdateO_Object_Intern {
  /**
   * status is the resource status upon successful post modification.
   *
   * @generated from protobuf field: string status = 100;
   */
  status: string;
}
/**
 * @generated from protobuf message post.UpdateO_Object_Public
 */
export interface UpdateO_Object_Public {}
declare class UpdateI$Type extends MessageType<UpdateI> {
  constructor();
  create(value?: PartialMessage<UpdateI>): UpdateI;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI,
  ): UpdateI;
  internalBinaryWrite(
    message: UpdateI,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateI
 */
export declare const UpdateI: UpdateI$Type;
declare class UpdateI_Filter$Type extends MessageType<UpdateI_Filter> {
  constructor();
  create(value?: PartialMessage<UpdateI_Filter>): UpdateI_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Filter,
  ): UpdateI_Filter;
  internalBinaryWrite(
    message: UpdateI_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateI_Filter
 */
export declare const UpdateI_Filter: UpdateI_Filter$Type;
declare class UpdateI_Object$Type extends MessageType<UpdateI_Object> {
  constructor();
  create(value?: PartialMessage<UpdateI_Object>): UpdateI_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Object,
  ): UpdateI_Object;
  internalBinaryWrite(
    message: UpdateI_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateI_Object
 */
export declare const UpdateI_Object: UpdateI_Object$Type;
declare class UpdateI_Object_Intern$Type extends MessageType<UpdateI_Object_Intern> {
  constructor();
  create(value?: PartialMessage<UpdateI_Object_Intern>): UpdateI_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Object_Intern,
  ): UpdateI_Object_Intern;
  internalBinaryWrite(
    message: UpdateI_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateI_Object_Intern
 */
export declare const UpdateI_Object_Intern: UpdateI_Object_Intern$Type;
declare class UpdateI_Object_Public$Type extends MessageType<UpdateI_Object_Public> {
  constructor();
  create(value?: PartialMessage<UpdateI_Object_Public>): UpdateI_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Object_Public,
  ): UpdateI_Object_Public;
  internalBinaryWrite(
    message: UpdateI_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateI_Object_Public
 */
export declare const UpdateI_Object_Public: UpdateI_Object_Public$Type;
declare class UpdateI_Object_Symbol$Type extends MessageType<UpdateI_Object_Symbol> {
  constructor();
  create(value?: PartialMessage<UpdateI_Object_Symbol>): UpdateI_Object_Symbol;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateI_Object_Symbol,
  ): UpdateI_Object_Symbol;
  internalBinaryWrite(
    message: UpdateI_Object_Symbol,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateI_Object_Symbol
 */
export declare const UpdateI_Object_Symbol: UpdateI_Object_Symbol$Type;
declare class UpdateO$Type extends MessageType<UpdateO> {
  constructor();
  create(value?: PartialMessage<UpdateO>): UpdateO;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO,
  ): UpdateO;
  internalBinaryWrite(
    message: UpdateO,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateO
 */
export declare const UpdateO: UpdateO$Type;
declare class UpdateO_Filter$Type extends MessageType<UpdateO_Filter> {
  constructor();
  create(value?: PartialMessage<UpdateO_Filter>): UpdateO_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO_Filter,
  ): UpdateO_Filter;
  internalBinaryWrite(
    message: UpdateO_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateO_Filter
 */
export declare const UpdateO_Filter: UpdateO_Filter$Type;
declare class UpdateO_Object$Type extends MessageType<UpdateO_Object> {
  constructor();
  create(value?: PartialMessage<UpdateO_Object>): UpdateO_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO_Object,
  ): UpdateO_Object;
  internalBinaryWrite(
    message: UpdateO_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateO_Object
 */
export declare const UpdateO_Object: UpdateO_Object$Type;
declare class UpdateO_Object_Intern$Type extends MessageType<UpdateO_Object_Intern> {
  constructor();
  create(value?: PartialMessage<UpdateO_Object_Intern>): UpdateO_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO_Object_Intern,
  ): UpdateO_Object_Intern;
  internalBinaryWrite(
    message: UpdateO_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateO_Object_Intern
 */
export declare const UpdateO_Object_Intern: UpdateO_Object_Intern$Type;
declare class UpdateO_Object_Public$Type extends MessageType<UpdateO_Object_Public> {
  constructor();
  create(value?: PartialMessage<UpdateO_Object_Public>): UpdateO_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: UpdateO_Object_Public,
  ): UpdateO_Object_Public;
  internalBinaryWrite(
    message: UpdateO_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message post.UpdateO_Object_Public
 */
export declare const UpdateO_Object_Public: UpdateO_Object_Public$Type;
export {};
