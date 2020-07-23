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
const rest_1 = require("@loopback/rest");
const keys_1 = require("../../keys");
let JWTAuthenticationStrategy = class JWTAuthenticationStrategy {
    constructor(tokenService) {
        this.tokenService = tokenService;
        this.name = "jwt";
    }
    async authenticate(request) {
        const token = this.extractCredentials(request);
        const UserProfile = await this.tokenService.verifyToken(token);
        return UserProfile;
    }
    extractCredentials(request) {
        if (!request.headers.authorization)
            throw new rest_1.HttpErrors.Unauthorized(`Authorization not found`);
        const authHeaderValue = request.headers.authorization;
        if (!authHeaderValue.startsWith('Bearer'))
            throw new rest_1.HttpErrors.Unauthorized(`Authoriation Header is not of type Bearer`);
        const parts = authHeaderValue.split(' ');
        if (parts.length !== 2)
            throw new rest_1.HttpErrors.Unauthorized(`Authorization Headers has to many Parts`);
        return parts[1];
    }
};
JWTAuthenticationStrategy = __decorate([
    __param(0, context_1.inject(keys_1.ToKenServiceBindings.TOKEN_SERVICE)),
    __metadata("design:paramtypes", [Object])
], JWTAuthenticationStrategy);
exports.JWTAuthenticationStrategy = JWTAuthenticationStrategy;
//# sourceMappingURL=jwt-strategy.js.map