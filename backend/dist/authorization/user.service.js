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
const rest_1 = require("@loopback/rest");
const context_1 = require("@loopback/context");
const repository_1 = require("@loopback/repository");
const user_repository_1 = require("../repositories/user.repository");
const keys_1 = require("../keys");
let SympholightUserService = class SympholightUserService {
    constructor(userReppo, passwordHasher) {
        this.userReppo = userReppo;
        this.passwordHasher = passwordHasher;
    }
    async verifyCredentials(credentials) {
        const foundUser = await this.userReppo.findOne({
            where: { name: credentials.name }
        });
        if (!foundUser)
            throw new rest_1.HttpErrors.NotFound(`User with name ${credentials.name} not found`);
        let passMatch = await this.passwordHasher.comparePassword(credentials.password, foundUser.password);
        if (!passMatch)
            throw new rest_1.HttpErrors.Unauthorized(`Credentials are not Correct`);
        return foundUser;
    }
    convertToUserProfile(user) {
        let id1 = user.id || '';
        let name1 = user.name || '';
        return { id: id1, name: name1 };
    }
};
SympholightUserService = __decorate([
    __param(0, repository_1.repository(user_repository_1.UserRepository)),
    __param(1, context_1.inject(keys_1.PasswordHasherBindings.PASSWORD_HASHER)),
    __metadata("design:paramtypes", [user_repository_1.UserRepository, Object])
], SympholightUserService);
exports.SympholightUserService = SympholightUserService;
//# sourceMappingURL=user.service.js.map