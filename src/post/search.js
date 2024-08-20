// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/post/search.proto" (package "post", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class SearchI$Type extends MessageType {
    constructor() {
        super("post.SearchI", [
            { no: 100, name: "filter", kind: "message", T: () => SearchI_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SearchI_Object }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.object = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* post.SearchI_Filter filter */ 100:
                    message.filter = SearchI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated post.SearchI_Object object */ 200:
                    message.object.push(SearchI_Object.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* post.SearchI_Filter filter = 100; */
        if (message.filter)
            SearchI_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated post.SearchI_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            SearchI_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchI
 */
export const SearchI = new SearchI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter$Type extends MessageType {
    constructor() {
        super("post.SearchI_Filter", [
            { no: 100, name: "paging", kind: "message", T: () => SearchI_Filter_Paging }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* post.SearchI_Filter_Paging paging */ 100:
                    message.paging = SearchI_Filter_Paging.internalBinaryRead(reader, reader.uint32(), options, message.paging);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* post.SearchI_Filter_Paging paging = 100; */
        if (message.paging)
            SearchI_Filter_Paging.internalBinaryWrite(message.paging, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchI_Filter
 */
export const SearchI_Filter = new SearchI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Filter_Paging$Type extends MessageType {
    constructor() {
        super("post.SearchI_Filter_Paging", [
            { no: 100, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "start", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "stop", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.kind = "";
        message.start = "";
        message.stop = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string kind */ 100:
                    message.kind = reader.string();
                    break;
                case /* string start */ 200:
                    message.start = reader.string();
                    break;
                case /* string stop */ 300:
                    message.stop = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string kind = 100; */
        if (message.kind !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.kind);
        /* string start = 200; */
        if (message.start !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.start);
        /* string stop = 300; */
        if (message.stop !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.stop);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchI_Filter_Paging
 */
export const SearchI_Filter_Paging = new SearchI_Filter_Paging$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object$Type extends MessageType {
    constructor() {
        super("post.SearchI_Object", [
            { no: 100, name: "intern", kind: "message", T: () => SearchI_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => SearchI_Object_Public },
            { no: 300, name: "symbol", kind: "message", T: () => SearchI_Object_Symbol }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* post.SearchI_Object_Intern intern */ 100:
                    message.intern = SearchI_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* post.SearchI_Object_Public public */ 200:
                    message.public = SearchI_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
                    break;
                case /* post.SearchI_Object_Symbol symbol */ 300:
                    message.symbol = SearchI_Object_Symbol.internalBinaryRead(reader, reader.uint32(), options, message.symbol);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* post.SearchI_Object_Intern intern = 100; */
        if (message.intern)
            SearchI_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* post.SearchI_Object_Public public = 200; */
        if (message.public)
            SearchI_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        /* post.SearchI_Object_Symbol symbol = 300; */
        if (message.symbol)
            SearchI_Object_Symbol.internalBinaryWrite(message.symbol, writer.tag(300, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchI_Object
 */
export const SearchI_Object = new SearchI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Intern$Type extends MessageType {
    constructor() {
        super("post.SearchI_Object_Intern", [
            { no: 100, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "owner", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "tree", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.id = "";
        message.owner = "";
        message.tree = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string id */ 100:
                    message.id = reader.string();
                    break;
                case /* string owner */ 200:
                    message.owner = reader.string();
                    break;
                case /* string tree */ 300:
                    message.tree = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string id = 100; */
        if (message.id !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.id);
        /* string owner = 200; */
        if (message.owner !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.owner);
        /* string tree = 300; */
        if (message.tree !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.tree);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchI_Object_Intern
 */
export const SearchI_Object_Intern = new SearchI_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Public$Type extends MessageType {
    constructor() {
        super("post.SearchI_Object_Public", [
            { no: 100, name: "labels", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "lifecycle", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.labels = "";
        message.lifecycle = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string labels */ 100:
                    message.labels = reader.string();
                    break;
                case /* string lifecycle */ 200:
                    message.lifecycle = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string labels = 100; */
        if (message.labels !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.labels);
        /* string lifecycle = 200; */
        if (message.lifecycle !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.lifecycle);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchI_Object_Public
 */
export const SearchI_Object_Public = new SearchI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchI_Object_Symbol$Type extends MessageType {
    constructor() {
        super("post.SearchI_Object_Symbol", [
            { no: 100, name: "list", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "time", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "vote", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.list = "";
        message.time = "";
        message.vote = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string list */ 100:
                    message.list = reader.string();
                    break;
                case /* string time */ 200:
                    message.time = reader.string();
                    break;
                case /* string vote */ 300:
                    message.vote = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string list = 100; */
        if (message.list !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.list);
        /* string time = 200; */
        if (message.time !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.time);
        /* string vote = 300; */
        if (message.vote !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.vote);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchI_Object_Symbol
 */
export const SearchI_Object_Symbol = new SearchI_Object_Symbol$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO$Type extends MessageType {
    constructor() {
        super("post.SearchO", [
            { no: 100, name: "filter", kind: "message", T: () => SearchO_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SearchO_Object }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.object = [];
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* post.SearchO_Filter filter */ 100:
                    message.filter = SearchO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated post.SearchO_Object object */ 200:
                    message.object.push(SearchO_Object.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* post.SearchO_Filter filter = 100; */
        if (message.filter)
            SearchO_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated post.SearchO_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            SearchO_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchO
 */
export const SearchO = new SearchO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Filter$Type extends MessageType {
    constructor() {
        super("post.SearchO_Filter", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchO_Filter
 */
export const SearchO_Filter = new SearchO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object$Type extends MessageType {
    constructor() {
        super("post.SearchO_Object", [
            { no: 100, name: "extern", kind: "message", T: () => SearchO_Object_Extern },
            { no: 200, name: "intern", kind: "message", T: () => SearchO_Object_Intern },
            { no: 300, name: "public", kind: "message", T: () => SearchO_Object_Public }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* post.SearchO_Object_Extern extern */ 100:
                    message.extern = SearchO_Object_Extern.internalBinaryRead(reader, reader.uint32(), options, message.extern);
                    break;
                case /* post.SearchO_Object_Intern intern */ 200:
                    message.intern = SearchO_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* post.SearchO_Object_Public public */ 300:
                    message.public = SearchO_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* post.SearchO_Object_Extern extern = 100; */
        if (message.extern)
            SearchO_Object_Extern.internalBinaryWrite(message.extern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* post.SearchO_Object_Intern intern = 200; */
        if (message.intern)
            SearchO_Object_Intern.internalBinaryWrite(message.intern, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        /* post.SearchO_Object_Public public = 300; */
        if (message.public)
            SearchO_Object_Public.internalBinaryWrite(message.public, writer.tag(300, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchO_Object
 */
export const SearchO_Object = new SearchO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Extern$Type extends MessageType {
    constructor() {
        super("post.SearchO_Object_Extern", []);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchO_Object_Extern
 */
export const SearchO_Object_Extern = new SearchO_Object_Extern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Intern$Type extends MessageType {
    constructor() {
        super("post.SearchO_Object_Intern", [
            { no: 100, name: "created", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "owner", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 400, name: "tree", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.created = "";
        message.id = "";
        message.owner = "";
        message.tree = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string created */ 100:
                    message.created = reader.string();
                    break;
                case /* string id */ 200:
                    message.id = reader.string();
                    break;
                case /* string owner */ 300:
                    message.owner = reader.string();
                    break;
                case /* string tree */ 400:
                    message.tree = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string created = 100; */
        if (message.created !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.created);
        /* string id = 200; */
        if (message.id !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.id);
        /* string owner = 300; */
        if (message.owner !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.owner);
        /* string tree = 400; */
        if (message.tree !== "")
            writer.tag(400, WireType.LengthDelimited).string(message.tree);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchO_Object_Intern
 */
export const SearchO_Object_Intern = new SearchO_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchO_Object_Public$Type extends MessageType {
    constructor() {
        super("post.SearchO_Object_Public", [
            { no: 100, name: "chain", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "expiry", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 400, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 500, name: "labels", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 600, name: "lifecycle", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 700, name: "meta", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 800, name: "parent", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 900, name: "text", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1000, name: "token", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 1100, name: "votes", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.chain = "";
        message.expiry = "";
        message.hash = "";
        message.kind = "";
        message.labels = "";
        message.lifecycle = "";
        message.meta = "";
        message.parent = "";
        message.text = "";
        message.token = "";
        message.votes = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string chain */ 100:
                    message.chain = reader.string();
                    break;
                case /* string expiry */ 200:
                    message.expiry = reader.string();
                    break;
                case /* string hash */ 300:
                    message.hash = reader.string();
                    break;
                case /* string kind */ 400:
                    message.kind = reader.string();
                    break;
                case /* string labels */ 500:
                    message.labels = reader.string();
                    break;
                case /* string lifecycle */ 600:
                    message.lifecycle = reader.string();
                    break;
                case /* string meta */ 700:
                    message.meta = reader.string();
                    break;
                case /* string parent */ 800:
                    message.parent = reader.string();
                    break;
                case /* string text */ 900:
                    message.text = reader.string();
                    break;
                case /* string token */ 1000:
                    message.token = reader.string();
                    break;
                case /* string votes */ 1100:
                    message.votes = reader.string();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* string chain = 100; */
        if (message.chain !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.chain);
        /* string expiry = 200; */
        if (message.expiry !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.expiry);
        /* string hash = 300; */
        if (message.hash !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.hash);
        /* string kind = 400; */
        if (message.kind !== "")
            writer.tag(400, WireType.LengthDelimited).string(message.kind);
        /* string labels = 500; */
        if (message.labels !== "")
            writer.tag(500, WireType.LengthDelimited).string(message.labels);
        /* string lifecycle = 600; */
        if (message.lifecycle !== "")
            writer.tag(600, WireType.LengthDelimited).string(message.lifecycle);
        /* string meta = 700; */
        if (message.meta !== "")
            writer.tag(700, WireType.LengthDelimited).string(message.meta);
        /* string parent = 800; */
        if (message.parent !== "")
            writer.tag(800, WireType.LengthDelimited).string(message.parent);
        /* string text = 900; */
        if (message.text !== "")
            writer.tag(900, WireType.LengthDelimited).string(message.text);
        /* string token = 1000; */
        if (message.token !== "")
            writer.tag(1000, WireType.LengthDelimited).string(message.token);
        /* string votes = 1100; */
        if (message.votes !== "")
            writer.tag(1100, WireType.LengthDelimited).string(message.votes);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message post.SearchO_Object_Public
 */
export const SearchO_Object_Public = new SearchO_Object_Public$Type();
