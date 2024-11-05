// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/note/api.proto" (package "note", syntax proto3)
// tslint:disable
import { API } from "./api";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service note.API
 */
export class APIClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = API.typeName;
        this.methods = API.methods;
        this.options = API.options;
    }
    /**
     * @generated from protobuf rpc: Create(note.CreateI) returns (note.CreateO);
     */
    create(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(note.DeleteI) returns (note.DeleteO);
     */
    delete(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Search(note.SearchI) returns (note.SearchO);
     */
    search(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Update(note.UpdateI) returns (note.UpdateO);
     */
    update(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
