// @generated by protobuf-ts 2.9.4 with parameter output_javascript
// @generated from protobuf file "pbf/wallet/create.proto" (package "wallet", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// @generated message type with reflection information, may provide speed optimized methods
class CreateI$Type extends MessageType {
    constructor() {
        super("wallet.CreateI", [
            { no: 100, name: "filter", kind: "message", T: () => CreateI_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CreateI_Object }
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
                case /* wallet.CreateI_Filter filter */ 100:
                    message.filter = CreateI_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated wallet.CreateI_Object object */ 200:
                    message.object.push(CreateI_Object.internalBinaryRead(reader, reader.uint32(), options));
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
        /* wallet.CreateI_Filter filter = 100; */
        if (message.filter)
            CreateI_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated wallet.CreateI_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            CreateI_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message wallet.CreateI
 */
export const CreateI = new CreateI$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateI_Filter$Type extends MessageType {
    constructor() {
        super("wallet.CreateI_Filter", []);
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
 * @generated MessageType for protobuf message wallet.CreateI_Filter
 */
export const CreateI_Filter = new CreateI_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateI_Object$Type extends MessageType {
    constructor() {
        super("wallet.CreateI_Object", [
            { no: 100, name: "intern", kind: "message", T: () => CreateI_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => CreateI_Object_Public }
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
                case /* wallet.CreateI_Object_Intern intern */ 100:
                    message.intern = CreateI_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* wallet.CreateI_Object_Public public */ 200:
                    message.public = CreateI_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
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
        /* wallet.CreateI_Object_Intern intern = 100; */
        if (message.intern)
            CreateI_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* wallet.CreateI_Object_Public public = 200; */
        if (message.public)
            CreateI_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message wallet.CreateI_Object
 */
export const CreateI_Object = new CreateI_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateI_Object_Intern$Type extends MessageType {
    constructor() {
        super("wallet.CreateI_Object_Intern", []);
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
 * @generated MessageType for protobuf message wallet.CreateI_Object_Intern
 */
export const CreateI_Object_Intern = new CreateI_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateI_Object_Public$Type extends MessageType {
    constructor() {
        super("wallet.CreateI_Object_Public", [
            { no: 100, name: "active", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 300, name: "description", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 400, name: "kind", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.active = "";
        message.address = "";
        message.description = "";
        message.kind = "";
        if (value !== undefined)
            reflectionMergePartial(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string active */ 100:
                    message.active = reader.string();
                    break;
                case /* string address */ 200:
                    message.address = reader.string();
                    break;
                case /* string description */ 300:
                    message.description = reader.string();
                    break;
                case /* string kind */ 400:
                    message.kind = reader.string();
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
        /* string active = 100; */
        if (message.active !== "")
            writer.tag(100, WireType.LengthDelimited).string(message.active);
        /* string address = 200; */
        if (message.address !== "")
            writer.tag(200, WireType.LengthDelimited).string(message.address);
        /* string description = 300; */
        if (message.description !== "")
            writer.tag(300, WireType.LengthDelimited).string(message.description);
        /* string kind = 400; */
        if (message.kind !== "")
            writer.tag(400, WireType.LengthDelimited).string(message.kind);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message wallet.CreateI_Object_Public
 */
export const CreateI_Object_Public = new CreateI_Object_Public$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateO$Type extends MessageType {
    constructor() {
        super("wallet.CreateO", [
            { no: 100, name: "filter", kind: "message", T: () => CreateO_Filter },
            { no: 200, name: "object", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CreateO_Object }
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
                case /* wallet.CreateO_Filter filter */ 100:
                    message.filter = CreateO_Filter.internalBinaryRead(reader, reader.uint32(), options, message.filter);
                    break;
                case /* repeated wallet.CreateO_Object object */ 200:
                    message.object.push(CreateO_Object.internalBinaryRead(reader, reader.uint32(), options));
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
        /* wallet.CreateO_Filter filter = 100; */
        if (message.filter)
            CreateO_Filter.internalBinaryWrite(message.filter, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* repeated wallet.CreateO_Object object = 200; */
        for (let i = 0; i < message.object.length; i++)
            CreateO_Object.internalBinaryWrite(message.object[i], writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message wallet.CreateO
 */
export const CreateO = new CreateO$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateO_Filter$Type extends MessageType {
    constructor() {
        super("wallet.CreateO_Filter", []);
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
 * @generated MessageType for protobuf message wallet.CreateO_Filter
 */
export const CreateO_Filter = new CreateO_Filter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateO_Object$Type extends MessageType {
    constructor() {
        super("wallet.CreateO_Object", [
            { no: 100, name: "intern", kind: "message", T: () => CreateO_Object_Intern },
            { no: 200, name: "public", kind: "message", T: () => CreateO_Object_Public }
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
                case /* wallet.CreateO_Object_Intern intern */ 100:
                    message.intern = CreateO_Object_Intern.internalBinaryRead(reader, reader.uint32(), options, message.intern);
                    break;
                case /* wallet.CreateO_Object_Public public */ 200:
                    message.public = CreateO_Object_Public.internalBinaryRead(reader, reader.uint32(), options, message.public);
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
        /* wallet.CreateO_Object_Intern intern = 100; */
        if (message.intern)
            CreateO_Object_Intern.internalBinaryWrite(message.intern, writer.tag(100, WireType.LengthDelimited).fork(), options).join();
        /* wallet.CreateO_Object_Public public = 200; */
        if (message.public)
            CreateO_Object_Public.internalBinaryWrite(message.public, writer.tag(200, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message wallet.CreateO_Object
 */
export const CreateO_Object = new CreateO_Object$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateO_Object_Intern$Type extends MessageType {
    constructor() {
        super("wallet.CreateO_Object_Intern", [
            { no: 100, name: "created", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 200, name: "id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = globalThis.Object.create((this.messagePrototype));
        message.created = "";
        message.id = "";
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message wallet.CreateO_Object_Intern
 */
export const CreateO_Object_Intern = new CreateO_Object_Intern$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CreateO_Object_Public$Type extends MessageType {
    constructor() {
        super("wallet.CreateO_Object_Public", []);
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
 * @generated MessageType for protobuf message wallet.CreateO_Object_Public
 */
export const CreateO_Object_Public = new CreateO_Object_Public$Type();
