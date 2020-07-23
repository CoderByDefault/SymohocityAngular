"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("@loopback/context");
const core_1 = require("@loopback/core");
const keys_1 = require("../keys");
let AuthorizationMetadataProvider = class AuthorizationMetadataProvider {
    constructor(controllerClass, methodName) {
        this.controllerClass = controllerClass;
        this.methodName = methodName;
    }
    value() {
        return this.getAuthorizeMetadata(this.controllerClass, this.methodName);
    }
    getAuthorizeMetadata(controllerClass, methodName) {
        return context_1.MetadataInspector.getMethodMetadata(keys_1.AUTHRIZATION_METADATA_ACCESSOR, controllerClass.prototype, methodName);
    }
};
AuthorizationMetadataProvider = __decorate([
    __param(0, context_1.inject(core_1.CoreBindings.CONTROLLER_CLASS)),
    __param(1, context_1.inject(core_1.CoreBindings.CONTROLLER_METHOD_NAME)),
    __metadata("design:paramtypes", [Object, String])
], AuthorizationMetadataProvider);
exports.AuthorizationMetadataProvider = AuthorizationMetadataProvider;
//# sourceMappingURL=authorization-metadata.provider.js.map