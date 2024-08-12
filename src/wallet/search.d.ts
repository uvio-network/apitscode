// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/wallet/search.proto" (package "wallet", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * SearchI is the input for searching wallets. Note that searching for wallets
 * is restricted to the respective authenticated users. In order words, wallets
 * are not available to the public, and only the wallet owner can search their
 * own wallets.
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
 * @generated from protobuf message wallet.SearchI
 */
export interface SearchI {
  /**
   * @generated from protobuf field: wallet.SearchI_Filter filter = 100;
   */
  filter?: SearchI_Filter;
  /**
   * @generated from protobuf field: repeated wallet.SearchI_Object object = 200;
   */
  object: SearchI_Object[];
}
/**
 * @generated from protobuf message wallet.SearchI_Filter
 */
export interface SearchI_Filter {
  /**
   * @generated from protobuf field: wallet.SearchI_Filter_Paging paging = 100;
   */
  paging?: SearchI_Filter_Paging;
}
/**
 * @generated from protobuf message wallet.SearchI_Filter_Paging
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
 * @generated from protobuf message wallet.SearchI_Object
 */
export interface SearchI_Object {
  /**
   * @generated from protobuf field: wallet.SearchI_Object_Intern intern = 100;
   */
  intern?: SearchI_Object_Intern;
  /**
   * @generated from protobuf field: wallet.SearchI_Object_Public public = 200;
   */
  public?: SearchI_Object_Public;
  /**
   * @generated from protobuf field: wallet.SearchI_Object_Symbol symbol = 300;
   */
  symbol?: SearchI_Object_Symbol;
}
/**
 * @generated from protobuf message wallet.SearchI_Object_Intern
 */
export interface SearchI_Object_Intern {
  /**
   * id is the ID of the wallet object being searched. If searching for a
   * particular ID, the search query object must not contain any other fields.
   *
   * @generated from protobuf field: string id = 100;
   */
  id: string;
  /**
   * owner is the ID of the user having created the wallets being searched. If
   * searching for wallets created by a particular owner, the search query
   * object may also define public.claim in order to search for wallets a user
   * has cast on a specific claim. Note that owner may be set to "self" in order
   * to set the internal user ID by reference of the caller's access token.
   *
   * @generated from protobuf field: string owner = 200;
   */
  owner: string;
}
/**
 * @generated from protobuf message wallet.SearchI_Object_Public
 */
export interface SearchI_Object_Public {}
/**
 * @generated from protobuf message wallet.SearchI_Object_Symbol
 */
export interface SearchI_Object_Symbol {}
/**
 * SearchO is the output for searching wallets.
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
 *                     "active": "true",
 *                     "address": "0x1234",
 *                     "description": "my first signer, the one with that tang",
 *                     "kind": "signer",
 *                     "provider": "privy"
 *                 }
 *             }
 *         ]
 *     }
 *
 *
 * @generated from protobuf message wallet.SearchO
 */
export interface SearchO {
  /**
   * @generated from protobuf field: wallet.SearchO_Filter filter = 100;
   */
  filter?: SearchO_Filter;
  /**
   * @generated from protobuf field: repeated wallet.SearchO_Object object = 200;
   */
  object: SearchO_Object[];
}
/**
 * @generated from protobuf message wallet.SearchO_Filter
 */
export interface SearchO_Filter {}
/**
 * @generated from protobuf message wallet.SearchO_Object
 */
export interface SearchO_Object {
  /**
   * @generated from protobuf field: repeated wallet.SearchO_Object_Extern extern = 100;
   */
  extern: SearchO_Object_Extern[];
  /**
   * @generated from protobuf field: wallet.SearchO_Object_Intern intern = 200;
   */
  intern?: SearchO_Object_Intern;
  /**
   * @generated from protobuf field: wallet.SearchO_Object_Public public = 300;
   */
  public?: SearchO_Object_Public;
}
/**
 * @generated from protobuf message wallet.SearchO_Object_Extern
 */
export interface SearchO_Object_Extern {}
/**
 * @generated from protobuf message wallet.SearchO_Object_Intern
 */
export interface SearchO_Object_Intern {
  /**
   * created is the unix timestamp in seconds at which this wallet got created.
   *
   * @generated from protobuf field: string created = 100;
   */
  created: string;
  /**
   * id is the ID of the wallet object being searched.
   *
   * @generated from protobuf field: string id = 200;
   */
  id: string;
  /**
   * owner is the ID of the user who created this wallet.
   *
   * @generated from protobuf field: string owner = 300;
   */
  owner: string;
}
/**
 * @generated from protobuf message wallet.SearchO_Object_Public
 */
export interface SearchO_Object_Public {
  /**
   * active is the flag deciding whether this wallet is actively in use.
   *
   * @generated from protobuf field: string active = 100;
   */
  active: string;
  /**
   * address is the hex encoded public address of this wallet.
   *
   * @generated from protobuf field: string address = 200;
   */
  address: string;
  /**
   * description is some human readable hint to help the user identify this
   * wallet.
   *
   * @generated from protobuf field: string description = 300;
   */
  description: string;
  /**
   * kind is the type of wallet describing for what purpose this wallet is used
   * for, e.g. "contract", "signer".
   *
   *     "contract" defines smart contract wallets, or smart accounts according
   *     to ERC-4337. Those smart contract wallets represent the user onchain.
   *     They are controlled by the configured signer. For more information on
   *     smart contract wallets see https://eips.ethereum.org/EIPS/eip-4337.
   *
   *     "signer" defines any wallet that controls the user's smart account, see
   *     "contract". Wallets of kind "signer" can be Privy embedded wallets,
   *     EOA's like hardware wallets, or even multisig Safe's.
   *
   *
   * @generated from protobuf field: string kind = 400;
   */
  kind: string;
  /**
   * provider is the source or vendor of a wallet providing certain services or
   * functionalities, e.g. "biconomy", "external", or "privy".
   *
   *     "biconomy" defines wallets managed by Biconomy, an account abstraction
   *     infrastructure provider.
   *
   *     "external" defines wallets that the user chooses to connect and use as
   *     signer, with or without account abstraction.
   *
   *     "privy" defines wallets managed by Privy, a Web3 Auth provider.
   *
   *
   * @generated from protobuf field: string provider = 500;
   */
  provider: string;
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
 * @generated MessageType for protobuf message wallet.SearchI
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
 * @generated MessageType for protobuf message wallet.SearchI_Filter
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
 * @generated MessageType for protobuf message wallet.SearchI_Filter_Paging
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
 * @generated MessageType for protobuf message wallet.SearchI_Object
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
 * @generated MessageType for protobuf message wallet.SearchI_Object_Intern
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
 * @generated MessageType for protobuf message wallet.SearchI_Object_Public
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
 * @generated MessageType for protobuf message wallet.SearchI_Object_Symbol
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
 * @generated MessageType for protobuf message wallet.SearchO
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
 * @generated MessageType for protobuf message wallet.SearchO_Filter
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
 * @generated MessageType for protobuf message wallet.SearchO_Object
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
 * @generated MessageType for protobuf message wallet.SearchO_Object_Extern
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
 * @generated MessageType for protobuf message wallet.SearchO_Object_Intern
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
 * @generated MessageType for protobuf message wallet.SearchO_Object_Public
 */
export declare const SearchO_Object_Public: SearchO_Object_Public$Type;
export {};