// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/vote/api.proto" (package "vote", syntax proto3)
// tslint:disable
// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/vote/api.proto" (package "vote", syntax proto3)
// tslint:disable
import { UpdateO } from "./update";
import { UpdateI } from "./update";
import { SearchO } from "./search";
import { SearchI } from "./search";
import { DeleteO } from "./delete";
import { DeleteI } from "./delete";
import { CreateO } from "./create";
import { CreateI } from "./create";
import { ServiceType } from "@protobuf-ts/runtime-rpc";
/**
 * @generated ServiceType for protobuf service vote.API
 */
export const API = new ServiceType("vote.API", [
    { name: "Create", options: {}, I: CreateI, O: CreateO },
    { name: "Delete", options: {}, I: DeleteI, O: DeleteO },
    { name: "Search", options: {}, I: SearchI, O: SearchO },
    { name: "Update", options: {}, I: UpdateI, O: UpdateO }
]);
