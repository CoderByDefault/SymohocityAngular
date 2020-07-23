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
var Workspace_1;
Object.defineProperty(exports, "__esModule", { value: true });
"use strict";
const repository_1 = require("@loopback/repository");
const instance_model_1 = require("./instance.model");
let Workspace = Workspace_1 = class Workspace extends repository_1.Entity {
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
], Workspace.prototype, "id", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        default: Workspace_1,
    }),
    __metadata("design:type", String)
], Workspace.prototype, "name", void 0);
__decorate([
    repository_1.property({
        type: 'string',
    }),
    __metadata("design:type", String)
], Workspace.prototype, "map", void 0);
__decorate([
    repository_1.property({
        type: 'array',
        itemType: 'string',
    }),
    __metadata("design:type", Array)
], Workspace.prototype, "center_coords", void 0);
__decorate([
    repository_1.property({
        type: 'string',
        default: new Date(),
        generated: true
    }),
    __metadata("design:type", String)
], Workspace.prototype, "created_at", void 0);
__decorate([
    repository_1.hasMany(() => instance_model_1.Instance),
    __metadata("design:type", Array)
], Workspace.prototype, "instances", void 0);
Workspace = Workspace_1 = __decorate([
    repository_1.model({ settings: { hidden: ["id"] } }),
    __metadata("design:paramtypes", [Object])
], Workspace);
exports.Workspace = Workspace;
//# sourceMappingURL=workspace.model.js.map