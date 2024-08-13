// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/post/search.proto" (package "post", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * SearchI is the input for searching posts.
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
 *                     "id": "778237"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message post.SearchI
 */
export interface SearchI {
  /**
   * @generated from protobuf field: post.SearchI_Filter filter = 100;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated post.SearchI_Object object = 200;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message post.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: post.SearchI_Filter_Paging paging = 100;
   */
  paging?: SearchI_Filter_Paging;
}
/**
 * @generated from protobuf message post.SearchI_Filter_Paging
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
 * @generated from protobuf message post.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: post.SearchI_Object_Intern intern = 100;
   */
  intern?: SearchI_Object_Intern;
  /**
   * @generated from protobuf field: post.SearchI_Object_Public public = 200;
   */
  public?: SearchI_Object_Public;
  /**
   * @generated from protobuf field: post.SearchI_Object_Symbol symbol = 300;
   */
  symbol?: SearchI_Object_Symbol;
}
/**
 * @generated from protobuf message post.SearchI_Object_Intern
 */
export interface SearchI_Object_Intern {
  /**
   * id is the ID of the post object being searched. If searching for a
   * particular ID, the search query object must not contain any other fields.
   *
   * @generated from protobuf field: string id = 100;
   */
  id: string;
  /**
   * owner is the ID of the user having created the posts being searched. If
   * searching for posts created by a particular owner, the search query object
   * must not contain any other fields.
   *
   * @generated from protobuf field: string owner = 200;
   */
  owner: string;
  /**
   * tree set to any valid ID referring to a tree of claims returns all those
   * claims belonging to the same tree. There is no paging support since the
   * number of claims that any given tree may have is rather limited.
   *
   * @generated from protobuf field: string tree = 300;
   */
  tree: string;
}
/**
 * @generated from protobuf message post.SearchI_Object_Public
 */
export interface SearchI_Object_Public {
  /**
   * labels is the comma separated list of categories for which claims are being
   * searched. Providing multiple labels implies to search for the intersection
   * of all the given labels. That is, searching for { A, B, C } will only
   * return claim objects that are associated to A, B and C. In other words,
   * claims that are associated to A and B, but not to C, will not be returned
   * in the example above.
   *
   * @generated from protobuf field: string labels = 100;
   */
  labels: string;
}
/**
 * @generated from protobuf message post.SearchI_Object_Symbol
 */
export interface SearchI_Object_Symbol {
  /**
   * list set to any valid list ID returns all of the posts belonging to this
   * list. Paging is available for paging kind "page" and "unix".
   *
   * @generated from protobuf field: string list = 100;
   */
  list: string;
  /**
   * time set to "latest" returns all posts in reverse chronological order.
   * Paging is available for paging kind "page" and "unix".
   *
   * @generated from protobuf field: string time = 200;
   */
  time: string;
}
/**
 * SearchO is the output for searching posts.
 *
 *     {
 *         "object": [
 *             {
 *                 "extern": [
 *                     {
 *                         "kind": "list",
 *                         "user": true
 *                     }
 *                 ],
 *                 "intern": {
 *                     "created": "1689001255",
 *                     "id": "778237",
 *                     "owner": "551265",
 *                     "tree": "487465725612222"
 *                 },
 *                 "public": {
 *                     "chain": "421614",
 *                     "expiry": "1689001255",
 *                     "kind": "claim",
 *                     "labels": "economy,inflation",
 *                     "lifecycle": "propose",
 *                     "meta": "9,0",
 *                     "text": "foo bar lorem ipsum",
 *                     "token": "WETH",
 *                     "votes": "10,2,1,4.843"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message post.SearchO
 */
export interface SearchO {
  /**
   * @generated from protobuf field: post.SearchO_Filter filter = 100;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated post.SearchO_Object object = 200;
   */
  object: SearchO_Object[];
}
/**
 * @generated from protobuf message post.SearchO_Filter
 */
export interface SearchO_Filter {}
/**
 * @generated from protobuf message post.SearchO_Object
 */
export interface SearchO_Object {
  /**
   * @generated from protobuf field: repeated post.SearchO_Object_Extern extern = 100;
   */
  extern: SearchO_Object_Extern[];
  /**
   * @generated from protobuf field: post.SearchO_Object_Intern intern = 200;
   */
  intern?: SearchO_Object_Intern;
  /**
   * @generated from protobuf field: post.SearchO_Object_Public public = 300;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message post.SearchO_Object_Extern
 */
export interface SearchO_Object_Extern {
  /**
   * kind is the type of external action being tracked, e.g. "list" for users
   * adding this post of kind "claim" to one of their own lists.
   *
   * @generated from protobuf field: string kind = 100;
   */
  kind: string;
  /**
   * user expresses whether the calling user did the given external action
   * themselves. For instance, if kind equals "list" and user equals "true",
   * then the calling user added this post of kind "claim" to on of their own
   * lists.
   *
   * @generated from protobuf field: bool user = 200;
   */
  user: boolean;
}
/**
 * @generated from protobuf message post.SearchO_Object_Intern
 */
export interface SearchO_Object_Intern {
  /**
   * created is the unix timestamp in seconds at which this post got created.
   *
   * @generated from protobuf field: string created = 100;
   */
  created: string;
  /**
   * id is the ID of the post object being searched.
   *
   * @generated from protobuf field: string id = 200;
   */
  id: string;
  /**
   * owner is the ID of the user who created this post.
   *
   * @generated from protobuf field: string owner = 300;
   */
  owner: string;
  /**
   * tree is the internal list ID within which all referenced claims are grouped
   * together. Using this tree ID it is possible to search for all claims
   * belonging to the same lifecycle.
   *
   * @generated from protobuf field: string tree = 400;
   */
  tree: string;
}
/**
 * @generated from protobuf message post.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * chain is the chain ID on which a claim got proposed. This field must be
   * empty for posts of kind "comment".
   *
   * @generated from protobuf field: string chain = 100;
   */
  chain: string;
  /**
   * expiry is the unix timestamp in seconds at which the post expires. Every
   * expiry marks the point in time at which a claim may transition into a new
   * lifecycle phase.
   *
   * @generated from protobuf field: string expiry = 200;
   */
  expiry: string;
  /**
   * kind is the type of post, e.g. "claim" or "comment" on which reputation is
   * staked.
   *
   * @generated from protobuf field: string kind = 300;
   */
  kind: string;
  /**
   * labels is a comma separated list of category labels that this claim is
   * related to.
   *
   * @generated from protobuf field: string labels = 400;
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
   * @generated from protobuf field: string lifecycle = 500;
   */
  lifecycle: string;
  /**
   * meta may contain onchain specific meta data like tree ID and claim ID as
   * tracked by a smart contract. meta should be empty for comments.
   *
   * @generated from protobuf field: string meta = 600;
   */
  meta: string;
  /**
   * parent is the post ID of any claim that references another claim within its
   * own tree. The first claim within a tree does not have a parent. If a post
   * is for instance of kind "claim" and has lifecycle "dispute", then parent
   * will reference the prior claim of kind "resolve" within their common tree,
   * because any dispute does always try to challange any prior resolution.
   *
   * @generated from protobuf field: string parent = 700;
   */
  parent: string;
  /**
   * text is the human readable description the user provides in order to make a
   * statement whether kind equals "claim" or "comment". This text may be
   * provided in markdown format. This text might be as long as a common blog
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
  /**
   * votes is the summary of votes cast in relation to the referenced claim. If
   * kind equals "claim" and lifecycle is one of "adjourn", "dispute", "nullify"
   * or "propose", then votes may be a comma separated string of information
   * about staked reputation in the following format.
   *
   *     "agreement,disagreement,minimum,creator"
   *
   * If kind equals "claim" and lifecycle is "resolve", then votes may be a
   * comma separated string of information about verified events in the
   * following format. Any permutation of votes may be possible, e.g. "10,0",
   * "0,8", "8,4", "9,9" etc.
   *
   *     "agreement,disagreement"
   *
   * If kind equals "comment" and the lifecycle of the parent claim is one of
   * "adjourn", "dispute", "nullify" or "propose", then votes may be a comma
   * separated string of information about the reputation that the commenting
   * user staked on the parent claim, in the following format. While most
   * reputation staked may only take one side, any permutation of tokens may be
   * possible, e.g. "0.5,0", "0,3", "2,0.02".
   *
   *     "agreement,disagreement"
   *
   * If kind equals "comment" and the lifecycle of the parent claim is
   * "resolve", then votes may be a comma separated string of information about
   * the events that the commenting user verified on the parent claim, in the
   * following format. Comments must only have a single voice on either side,
   * e.g. "1,0", "0,1".
   *
   *     "agreement,disagreement"
   *
   * Further, the votes summary provides contextual information for the claim or
   * comment at hand. The following definitions may apply respectively.
   *
   *     "agreement" represents all votes cast in agreement with the given
   *     statement. The values here may be the amount of tokens or the amount of
   *     voices that either expressed opinions or verified the truth.
   *
   *     "disagreement" represents all votes cast in disagreement with the given
   *     statement. The values here may be the amount of tokens or the amount of
   *     voices that either expressed opinions or verified the truth.
   *
   *     "minimum" represents the minimum amount of reputation that must be
   *     staked when participating in this market. This value does neither apply
   *     to comments nor to resolutions.
   *
   *     "creator" represents the amount of staked reputation belonging to the
   *     user who created the claim on which opinions have to be expressed.
   *     This value does neither apply to comments nor to claims of lifecycle
   *     "resolve".
   *
   *
   * @generated from protobuf field: string votes = 1000;
   */
  votes: string;
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
 * @generated MessageType for protobuf message post.SearchI
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
 * @generated MessageType for protobuf message post.SearchI_Filter
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
 * @generated MessageType for protobuf message post.SearchI_Filter_Paging
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
 * @generated MessageType for protobuf message post.SearchI_Object
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
 * @generated MessageType for protobuf message post.SearchI_Object_Intern
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
 * @generated MessageType for protobuf message post.SearchI_Object_Public
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
 * @generated MessageType for protobuf message post.SearchI_Object_Symbol
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
 * @generated MessageType for protobuf message post.SearchO
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
 * @generated MessageType for protobuf message post.SearchO_Filter
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
 * @generated MessageType for protobuf message post.SearchO_Object
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
 * @generated MessageType for protobuf message post.SearchO_Object_Extern
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
 * @generated MessageType for protobuf message post.SearchO_Object_Intern
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
 * @generated MessageType for protobuf message post.SearchO_Object_Public
 */
export declare const SearchO_Object_Public: SearchO_Object_Public$Type;
export {};
