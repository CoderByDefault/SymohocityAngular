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
const repository_1 = require("@loopback/repository");
const models_1 = require("../models");
const datasources_1 = require("../datasources");
const core_1 = require("@loopback/core");
let InstanceRepository = class InstanceRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, workspaceRepositoryGetter, deviceRepositoryGetter) {
        super(models_1.Instance, dataSource);
        this.workspaceRepositoryGetter = workspaceRepositoryGetter;
        this.deviceRepositoryGetter = deviceRepositoryGetter;
        this.workspace = this.createBelongsToAccessorFor('workspace', workspaceRepositoryGetter);
        this.devices = this.createHasManyRepositoryFactoryFor('devices', deviceRepositoryGetter);
    }
    async find(filter, options) {
        const include = filter && filter.include;
        filter = Object.assign({}, filter, { include: undefined });
        const result = await super.find(filter, options);
        if (include && include.length && include[0].relation === 'instances') {
            await Promise.all(result.map(async (r) => {
                r.workspace = await this.workspace(r.id);
                r.devices = await this.devices(r.id).find();
            }));
        }
        return result;
    }
    async findById(id, filter, options) {
        // Prevent juggler for applying "include" filter
        // Juggler is not aware of LB4 relations
        const include = filter && filter.include;
        filter = Object.assign({}, filter, { include: undefined });
        const result = await super.findById(id, filter, options);
        // poor-mans inclusion resolver, this should be handled by DefaultCrudRepo
        // and use `inq` operator to fetch related todos in fewer DB queries
        // this is a temporary implementation, please see
        // https://github.com/strongloop/loopback-next/issues/3195
        if (include && include.length && include[0].relation === 'instances') {
            result.workspace = await this.workspace(result.id);
            result.devices = await this.devices(result.id).find();
        }
        return result;
    }
};
InstanceRepository = __decorate([
    __param(0, core_1.inject('datasources.couch')),
    __param(1, repository_1.repository.getter('WorkspaceRepository')),
    __param(2, repository_1.repository.getter('DeviceRepository')),
    __metadata("design:paramtypes", [datasources_1.CouchDataSource, Function, Function])
], InstanceRepository);
exports.InstanceRepository = InstanceRepository;
//# sourceMappingURL=instance.repository.js.map