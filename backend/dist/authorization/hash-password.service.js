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
const bcryptjs_1 = require("bcryptjs");
const core_1 = require("@loopback/core");
const keys_1 = require("../keys");
async function hashPassword(password, rounds) {
    const salt = await bcryptjs_1.genSalt(rounds);
    return await bcryptjs_1.hash(password, salt);
}
exports.hashPassword = hashPassword;
let BcryptHasherService = class BcryptHasherService {
    constructor(rounds) {
        this.rounds = rounds;
    }
    async hashPassword(password) {
        const salt = await bcryptjs_1.genSalt(this.rounds);
        return bcryptjs_1.hash(password, salt);
    }
    async comparePassword(providePass, storedPass) {
        //let passIsMatched = await (providePass === storedPass) ? true : false; //klartext pw test
        let passIsMatched = await bcryptjs_1.compare(providePass, storedPass);
        return passIsMatched;
    }
};
BcryptHasherService = __decorate([
    __param(0, core_1.inject(keys_1.PasswordHasherBindings.ROUNDS)),
    __metadata("design:paramtypes", [Number])
], BcryptHasherService);
exports.BcryptHasherService = BcryptHasherService;
//# sourceMappingURL=hash-password.service.js.map