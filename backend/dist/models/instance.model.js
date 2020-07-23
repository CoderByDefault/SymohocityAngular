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
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const workspace_model_1 = require("./workspace.model");
const device_model_1 = require("./device.model");
let Instance = class Instance extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
__decorate([
    repository_1.property({
        type: 'string',
        id: true,
        generated: true
    }),
    __metadata("design:type", String)
], Instance.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Instance.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Instance.prototype, "ipaddress", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Instance.prototype, "server_login", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Instance.prototype, "server_password", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Instance.prototype, "lng", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        required: true,
    }),
    __metadata("design:type", String)
], Instance.prototype, "lat", void 0);
__decorate([
    repository_1.property({
        type: 'boolean',
        default: false,
    }),
    __metadata("design:type", Boolean)
], Instance.prototype, "is_online", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        default: new Date(),
        generated: true
    }),
    __metadata("design:type", String)
], Instance.prototype, "created_at", void 0);
__decorate([
    repository_1.hasMany(() => device_model_1.Device),
    __metadata("design:type", Array)
], Instance.prototype, "devices", void 0);
__decorate([
    repository_1.belongsTo(() => workspace_model_1.Workspace),
    __metadata("design:type", Number)
], Instance.prototype, "workspaceId", void 0);
Instance = __decorate([
    repository_1.model({ settings: { hidden: ["id"] } }),
    __metadata("design:paramtypes", [Object])
], Instance);
exports.Instance = Instance;
//# sourceMappingURL=instance.model.js.map