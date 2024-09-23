// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/vote/search.proto" (package "vote", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * SearchI is the input for searching votes.
 *
 *     {
 *         "filter": {
 *             "paging": {
 *                 "kind": "page",
 *                 "start": "0",
 *                 "stop": "49"
 *             }
 *         },
 *         "object": [
 *             {
 *                 "intern": {
 *                     "owner": "551265"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message vote.SearchI
 */
export interface SearchI {
  /**
   * @generated from protobuf field: vote.SearchI_Filter filter = 100;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated vote.SearchI_Object object = 200;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message vote.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: vote.SearchI_Filter_Paging paging = 100;
   */
  paging?: SearchI_Filter_Paging;
}
/**
 * @generated from protobuf message vote.SearchI_Filter_Paging
 */
export interface SearchI_Filter_Paging {
  /**
   * @generated from protobuf field: string kind = 100;
   */
  kind: string;
  /**
   * @generated from protobuf field: string start = 200;
   */
  start: string;
  /**
   * @generated from protobuf field: string stop = 300;
   */
  stop: string;
}
/**
 * @generated from protobuf message vote.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: vote.SearchI_Object_Intern intern = 100;
   */
  intern?: SearchI_Object_Intern;
  /**
   * @generated from protobuf field: vote.SearchI_Object_Public public = 200;
   */
  public?: SearchI_Object_Public;
  /**
   * @generated from protobuf field: vote.SearchI_Object_Symbol symbol = 300;
   */
  symbol?: SearchI_Object_Symbol;
}
/**
 * @generated from protobuf message vote.SearchI_Object_Intern
 */
export interface SearchI_Object_Intern {
  /**
   * id is the ID of the vote object being searched. If searching for a
   * particular ID, the search query object must not contain any other fields.
   *
   * @generated from protobuf field: string id = 100;
   */
  id: string;
  /**
   * owner is the ID of the user having created the votes being searched. If
   * searching for votes created by a particular owner, the search query object
   * may also define public.claim in order to search for votes a user has cast
   * on a specific claim. Note that owner may be set to "self" in order to set
   * the internal user ID by reference of the caller's access token.
   *
   * @generated from protobuf field: string owner = 200;
   */
  owner: string;
}
/**
 * @generated from protobuf message vote.SearchI_Object_Public
 */
export interface SearchI_Object_Public {
  /**
   * claim is the ID of the claim that votes can be searched for. In other
   * words, providing a claim ID allows to search for all votes cast on the
   * specified claim. This search query can be further restricted by setting
   * intern.owner, which will then only return the votes that have been cast on
   * the given claim by that specific user.
   *
   * @generated from protobuf field: string claim = 100;
   */
  claim: string;
}
/**
 * @generated from protobuf message vote.SearchI_Object_Symbol
 */
export interface SearchI_Object_Symbol {}
/**
 * SearchO is the output for searching votes.
 *
 *     {
 *         "object": [
 *             {
 *                 "intern": {
 *                     "created": "1689001255",
 *                     "id": "778237",
 *                     "owner": "551265"
 *                 },
 *                 "public": {
 *                     "claim": "778237",
 *                     "hash": "0x1234",
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
 * @generated from protobuf message vote.SearchO
 */
export interface SearchO {
  /**
   * @generated from protobuf field: vote.SearchO_Filter filter = 100;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated vote.SearchO_Object object = 200;
   */
  object: SearchO_Object[];
}
/**
 * @generated from protobuf message vote.SearchO_Filter
 */
export interface SearchO_Filter {}
/**
 * @generated from protobuf message vote.SearchO_Object
 */
export interface SearchO_Object {
  /**
   * @generated from protobuf field: vote.SearchO_Object_Extern extern = 100;
   */
  extern?: SearchO_Object_Extern;
  /**
   * @generated from protobuf field: vote.SearchO_Object_Intern intern = 200;
   */
  intern?: SearchO_Object_Intern;
  /**
   * @generated from protobuf field: vote.SearchO_Object_Public public = 300;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message vote.SearchO_Object_Extern
 */
export interface SearchO_Object_Extern {}
/**
 * @generated from protobuf message vote.SearchO_Object_Intern
 */
export interface SearchO_Object_Intern {
  /**
   * created is the unix timestamp in seconds at which this vote got created.
   *
   * @generated from protobuf field: string created = 100;
   */
  created: string;
  /**
   * id is the ID of the vote object being searched.
   *
   * @generated from protobuf field: string id = 200;
   */
  id: string;
  /**
   * owner is the ID of the user who created this vote.
   *
   * @generated from protobuf field: string owner = 300;
   */
  owner: string;
}
/**
 * @generated from protobuf message vote.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * claim is the ID of the referenced claim being voted on. Note that the
   * lifecycle of the referenced claim must be compliant with the vote kind
   * provided.
   *
   * @generated from protobuf field: string claim = 100;
   */
  claim: string;
  /**
   * hash is the onchain transaction hash for this vote. Setting hash implies
   * that the vote got confirmed onchain, and with it the lifecycle phase
   * "onchain" will be inferred automatically.
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
declare class SearchI$Type extends MessageType<SearchI> {
  constructor();
  create(value?: PartialMessage<SearchI>): SearchI;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI,
  ): SearchI;
  internalBinaryWrite(
    message: SearchI,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchI
 */
export declare const SearchI: SearchI$Type;
declare class SearchI_Filter$Type extends MessageType<SearchI_Filter> {
  constructor();
  create(value?: PartialMessage<SearchI_Filter>): SearchI_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Filter,
  ): SearchI_Filter;
  internalBinaryWrite(
    message: SearchI_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchI_Filter
 */
export declare const SearchI_Filter: SearchI_Filter$Type;
declare class SearchI_Filter_Paging$Type extends MessageType<SearchI_Filter_Paging> {
  constructor();
  create(value?: PartialMessage<SearchI_Filter_Paging>): SearchI_Filter_Paging;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Filter_Paging,
  ): SearchI_Filter_Paging;
  internalBinaryWrite(
    message: SearchI_Filter_Paging,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchI_Filter_Paging
 */
export declare const SearchI_Filter_Paging: SearchI_Filter_Paging$Type;
declare class SearchI_Object$Type extends MessageType<SearchI_Object> {
  constructor();
  create(value?: PartialMessage<SearchI_Object>): SearchI_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object,
  ): SearchI_Object;
  internalBinaryWrite(
    message: SearchI_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchI_Object
 */
export declare const SearchI_Object: SearchI_Object$Type;
declare class SearchI_Object_Intern$Type extends MessageType<SearchI_Object_Intern> {
  constructor();
  create(value?: PartialMessage<SearchI_Object_Intern>): SearchI_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object_Intern,
  ): SearchI_Object_Intern;
  internalBinaryWrite(
    message: SearchI_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchI_Object_Intern
 */
export declare const SearchI_Object_Intern: SearchI_Object_Intern$Type;
declare class SearchI_Object_Public$Type extends MessageType<SearchI_Object_Public> {
  constructor();
  create(value?: PartialMessage<SearchI_Object_Public>): SearchI_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object_Public,
  ): SearchI_Object_Public;
  internalBinaryWrite(
    message: SearchI_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchI_Object_Public
 */
export declare const SearchI_Object_Public: SearchI_Object_Public$Type;
declare class SearchI_Object_Symbol$Type extends MessageType<SearchI_Object_Symbol> {
  constructor();
  create(value?: PartialMessage<SearchI_Object_Symbol>): SearchI_Object_Symbol;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchI_Object_Symbol,
  ): SearchI_Object_Symbol;
  internalBinaryWrite(
    message: SearchI_Object_Symbol,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchI_Object_Symbol
 */
export declare const SearchI_Object_Symbol: SearchI_Object_Symbol$Type;
declare class SearchO$Type extends MessageType<SearchO> {
  constructor();
  create(value?: PartialMessage<SearchO>): SearchO;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO,
  ): SearchO;
  internalBinaryWrite(
    message: SearchO,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchO
 */
export declare const SearchO: SearchO$Type;
declare class SearchO_Filter$Type extends MessageType<SearchO_Filter> {
  constructor();
  create(value?: PartialMessage<SearchO_Filter>): SearchO_Filter;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Filter,
  ): SearchO_Filter;
  internalBinaryWrite(
    message: SearchO_Filter,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchO_Filter
 */
export declare const SearchO_Filter: SearchO_Filter$Type;
declare class SearchO_Object$Type extends MessageType<SearchO_Object> {
  constructor();
  create(value?: PartialMessage<SearchO_Object>): SearchO_Object;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Object,
  ): SearchO_Object;
  internalBinaryWrite(
    message: SearchO_Object,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchO_Object
 */
export declare const SearchO_Object: SearchO_Object$Type;
declare class SearchO_Object_Extern$Type extends MessageType<SearchO_Object_Extern> {
  constructor();
  create(value?: PartialMessage<SearchO_Object_Extern>): SearchO_Object_Extern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Object_Extern,
  ): SearchO_Object_Extern;
  internalBinaryWrite(
    message: SearchO_Object_Extern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchO_Object_Extern
 */
export declare const SearchO_Object_Extern: SearchO_Object_Extern$Type;
declare class SearchO_Object_Intern$Type extends MessageType<SearchO_Object_Intern> {
  constructor();
  create(value?: PartialMessage<SearchO_Object_Intern>): SearchO_Object_Intern;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Object_Intern,
  ): SearchO_Object_Intern;
  internalBinaryWrite(
    message: SearchO_Object_Intern,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchO_Object_Intern
 */
export declare const SearchO_Object_Intern: SearchO_Object_Intern$Type;
declare class SearchO_Object_Public$Type extends MessageType<SearchO_Object_Public> {
  constructor();
  create(value?: PartialMessage<SearchO_Object_Public>): SearchO_Object_Public;
  internalBinaryRead(
    reader: IBinaryReader,
    length: number,
    options: BinaryReadOptions,
    target?: SearchO_Object_Public,
  ): SearchO_Object_Public;
  internalBinaryWrite(
    message: SearchO_Object_Public,
    writer: IBinaryWriter,
    options: BinaryWriteOptions,
  ): IBinaryWriter;
}
/**
 * @generated MessageType for protobuf message vote.SearchO_Object_Public
 */
export declare const SearchO_Object_Public: SearchO_Object_Public$Type;
export {};
