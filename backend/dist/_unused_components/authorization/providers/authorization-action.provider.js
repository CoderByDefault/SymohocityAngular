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
const keys_1 = require("../keys");
const lodash_1 = require("lodash");
let AuthorizationActionProvider = class AuthorizationActionProvider {
    constructor(getMetaData) {
        this.getMetaData = getMetaData;
    }
    value() {
        return response => this.action(response);
    }
    async action(userPermissons) {
        const metadata = await this.getMetaData();
        if (!metadata)
            return false;
        else if (metadata.permissons.indexOf('*') === 0)
            return true;
        const permissionsToCheck = metadata.permissons;
        return lodash_1.intersection(userPermissons, permissionsToCheck).length > 0;
    }
};
AuthorizationActionProvider = __decorate([
    __param(0, context_1.inject.getter(keys_1.AuthorizationBinding.METADATA)),
    __metadata("design:paramtypes", [Function])
], AuthorizationActionProvider);
exports.AuthorizationActionProvider = AuthorizationActionProvider;
//# sourceMappingURL=authorization-action.provider.js.map