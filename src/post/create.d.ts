// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/post/create.proto" (package "post", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * CreateI is the input for creating posts.
 *
 *     {
 *         "object": [
 *             {
 *                 "public": {
 *                     "expiry": "1689001255",
 *                     "kind": "claim",
 *                     "labels": "economy,inflation",
 *                     "lifecycle": "propose",
 *                     "option": "true",
 *                     "stake": "1.5",
 *                     "text": "foo bar lorem ipsum",
 *                     "token": "WETH"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message post.CreateI
 */
export interface CreateI {
  /**
   * @generated from protobuf field: post.CreateI_Filter filter = 100;
   */
  filter?: CreateI_Filter;
  /**
   * @generated from protobuf field: repeated post.CreateI_Object object = 200;
   */
  object: CreateI_Object[];
}
/**
 * @generated from protobuf message post.CreateI_Filter
 */
export interface CreateI_Filter {}
/**
 * @generated from protobuf message post.CreateI_Object
 */
export interface CreateI_Object {
  /**
   * @generated from protobuf field: post.CreateI_Object_Intern intern = 100;
   */
  intern?: CreateI_Object_Intern;
  /**
   * @generated from protobuf field: post.CreateI_Object_Public public = 200;
   */
  public?: CreateI_Object_Public;
}
/**
 * @generated from protobuf message post.CreateI_Object_Intern
 */
export interface CreateI_Object_Intern {}
/**
 * @generated from protobuf message post.CreateI_Object_Public
 */
export interface CreateI_Object_Public {
  /**
   * expiry is the unix timestamp in seconds at which the post expires. Every
   * expiry marks the point in time at which a claim may transition into a new
   * lifecycle phase.
   *
   * @generated from protobuf field: string expiry = 100;
   */
  expiry: string;
  /**
   * kind is the type of post, e.g. "claim" or "comment" on which reputation is
   * staked.
   *
   * @generated from protobuf field: string kind = 200;
   */
  kind: string;
  /**
   * labels is a comma separated list of category labels that this claim is
   * related to.
   *
   * @generated from protobuf field: string labels = 300;
   */
  labels: string;
  /**
   * lifecycle describes the evolutionary stage of a claim within its own tree.
   * Only posts of kind "claim" will have a lifecycle set.
   *
   *     "adjourn" describes claims that defer claim resolution.
   *
   *     "propose" describes claims that make any initial statement.
   *
   *     "resolve" describes claims that allow to verify the truth.
   *
   *     "dispute" describes claims that challenge any prior resolution.
   *
   *     "nullify" describes claims that question the verifiability of truth.
   *
   *
   * @generated from protobuf field: string lifecycle = 400;
   */
  lifecycle: string;
  /**
   * option is the side of the bet taken with this post, e.g. "true" or "false".
   * If option is "true", then the staked reputation agrees with the given
   * statement. If option is "false", then the staked reputation disagrees with
   * the given statement.
   *
   * @generated from protobuf field: string option = 500;
   */
  option: string;
  /**
   * parent is the post ID of any claim that references another claim within its
   * own tree. The first claim within a tree does not have a parent. If a post
   * is for instance of kind "claim" and has lifecycle "dispute", then parent
   * will reference the prior claim of kind "resolve" within their common tree,
   * because any dispute does always try to challange any prior resolution.
   *
   * @generated from protobuf field: string parent = 600;
   */
  parent: string;
  /**
   * stake is the amount of reputation staked.
   *
   * @generated from protobuf field: string stake = 700;
   */
  stake: string;
  /**
   * text is the human readable description the user provides in order to make a
   * statement, whether the post kind is "claim" or "comment". This text may be
   * provided in markdown format. This text might as be long as a common blog
   * post. This text might contain external links.
   *
   * @generated from protobuf field: string text = 800;
   */
  text: string;
  /**
   * token is the token in which the staked reputation is denominated.
   *
   * @generated from protobuf field: string token = 900;
   */
  token: string;
}
/**
 * CreateO is the output for creating posts.
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
 * @generated from protobuf message post.CreateO
 */
export interface CreateO {
  /**
   * @generated from protobuf field: post.CreateO_Filter filter = 100;
   */
  filter?: CreateO_Filter;
  /**
   * @generated from protobuf field: repeated post.CreateO_Object object = 200;
   */
  object: CreateO_Object[];
}
/**
 * @generated from protobuf message post.CreateO_Filter
 */
export interface CreateO_Filter {}
/**
 * @generated from protobuf message post.CreateO_Object
 */
export interface CreateO_Object {
  /**
   * @generated from protobuf field: post.CreateO_Object_Intern intern = 100;
   */
  intern?: CreateO_Object_Intern;
  /**
   * @generated from protobuf field: post.CreateO_Object_Public public = 200;
   */
  public?: CreateO_Object_Public;
}
/**
 * @generated from protobuf message post.CreateO_Object_Intern
 */
export interface CreateO_Object_Intern {
  /**
   * created is the unix timestamp in seconds at which the post got created.
   *
   * @generated from protobuf field: string created = 100;
   */
  created: string;
  /**
   * id is the ID of the post object being created.
   *
   * @generated from protobuf field: string id = 200;
   */
  id: string;
}
/**
 * @generated from protobuf message post.CreateO_Object_Public
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
 * @generated MessageType for protobuf message post.CreateI
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
 * @generated MessageType for protobuf message post.CreateI_Filter
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
 * @generated MessageType for protobuf message post.CreateI_Object
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
 * @generated MessageType for protobuf message post.CreateI_Object_Intern
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
 * @generated MessageType for protobuf message post.CreateI_Object_Public
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
 * @generated MessageType for protobuf message post.CreateO
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
 * @generated MessageType for protobuf message post.CreateO_Filter
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
 * @generated MessageType for protobuf message post.CreateO_Object
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
 * @generated MessageType for protobuf message post.CreateO_Object_Intern
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
 * @generated MessageType for protobuf message post.CreateO_Object_Public
 */
export declare const CreateO_Object_Public: CreateO_Object_Public$Type;
export {};
