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
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const authentication_1 = require("@loopback/authentication");
let InstanceController = class InstanceController {
    constructor(instanceRepository) {
        this.instanceRepository = instanceRepository;
    }
    async create(instance) {
        return await this.instanceRepository.create(instance);
    }
    async count(where) {
        return await this.instanceRepository.count(where);
    }
    async find(filter) {
        return await this.instanceRepository.find(filter);
    }
    async updateAll(instance, where) {
        return await this.instanceRepository.updateAll(instance, where);
    }
    async findById(id) {
        return await this.instanceRepository.findById(id);
    }
    async updateById(id, instance) {
        await this.instanceRepository.updateById(id, instance);
    }
    async replaceById(id, instance) {
        await this.instanceRepository.replaceById(id, instance);
    }
    async deleteById(id) {
        await this.instanceRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/instances', {
        responses: {
            '200': {
                description: 'Instance model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Instance } } },
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Instance]),
    __metadata("design:returntype", Promise)
], InstanceController.prototype, "create", null);
__decorate([
    rest_1.get('/instances/count', {
        responses: {
            '200': {
                description: 'Instance model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Instance))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstanceController.prototype, "count", null);
__decorate([
    rest_1.get('/instances', {
        responses: {
            '200': {
                description: 'Array of Instance model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Instance } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Instance))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], InstanceController.prototype, "find", null);
__decorate([
    rest_1.patch('/instances', {
        responses: {
            '200': {
                description: 'Instance PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Instance, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Instance))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Instance, Object]),
    __metadata("design:returntype", Promise)
], InstanceController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/instances/{id}', {
        responses: {
            '200': {
                description: 'Instance model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Instance } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstanceController.prototype, "findById", null);
__decorate([
    rest_1.patch('/instances/{id}', {
        responses: {
            '204': {
                description: 'Instance PATCH success',
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Instance, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Instance]),
    __metadata("design:returntype", Promise)
], InstanceController.prototype, "updateById", null);
__decorate([
    rest_1.put('/instances/{id}', {
        responses: {
            '204': {
                description: 'Instance PUT success',
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Instance]),
    __metadata("design:returntype", Promise)
], InstanceController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/instances/{id}', {
        responses: {
            '204': {
                description: 'Instance DELETE success',
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstanceController.prototype, "deleteById", null);
InstanceController = __decorate([
    __param(0, repository_1.repository(repositories_1.InstanceRepository)),
    __metadata("design:paramtypes", [repositories_1.InstanceRepository])
], InstanceController);
exports.InstanceController = InstanceController;
//# sourceMappingURL=instance.controller.js.map