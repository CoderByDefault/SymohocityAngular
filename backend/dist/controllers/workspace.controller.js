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
let WorkspaceController = class WorkspaceController {
    constructor(workspaceRepository) {
        this.workspaceRepository = workspaceRepository;
    }
    async create(workspace) {
        return await this.workspaceRepository.create(workspace);
    }
    async count(where) {
        return await this.workspaceRepository.count(where);
    }
    async find(filter) {
        return await this.workspaceRepository.find(filter);
    }
    async updateAll(workspace, where) {
        return await this.workspaceRepository.updateAll(workspace, where);
    }
    async findById(id) {
        return await this.workspaceRepository.findById(id);
    }
    async updateById(id, workspace) {
        await this.workspaceRepository.updateById(id, workspace);
    }
    async replaceById(id, workspace) {
        await this.workspaceRepository.replaceById(id, workspace);
    }
    async deleteById(id) {
        await this.workspaceRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/workspaces', {
        responses: {
            '200': {
                description: 'Workspace model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Workspace } } },
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Workspace]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "create", null);
__decorate([
    rest_1.get('/workspaces/count', {
        responses: {
            '200': {
                description: 'Workspace model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Workspace))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "count", null);
__decorate([
    rest_1.get('/workspaces', {
        responses: {
            '200': {
                description: 'Array of Workspace model instances',
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: rest_1.getModelSchemaRef(models_1.Workspace, { includeRelations: true }),
                        },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Workspace))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "find", null);
__decorate([
    rest_1.patch('/workspaces', {
        responses: {
            '200': {
                description: 'Workspace PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Workspace, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Workspace))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Workspace, Object]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/workspaces/{id}', {
        responses: {
            '200': {
                description: 'Workspace model instance',
                content: {
                    'application/json': {
                        schema: rest_1.getModelSchemaRef(models_1.Workspace, { includeRelations: true }),
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "findById", null);
__decorate([
    rest_1.patch('/workspaces/{id}', {
        responses: {
            '204': {
                description: 'Workspace PATCH success',
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Workspace, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Workspace]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "updateById", null);
__decorate([
    rest_1.put('/workspaces/{id}', {
        responses: {
            '204': {
                description: 'Workspace PUT success',
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Workspace]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/workspaces/{id}', {
        responses: {
            '204': {
                description: 'Workspace DELETE success',
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], WorkspaceController.prototype, "deleteById", null);
WorkspaceController = __decorate([
    __param(0, repository_1.repository(repositories_1.WorkspaceRepository)),
    __metadata("design:paramtypes", [repositories_1.WorkspaceRepository])
], WorkspaceController);
exports.WorkspaceController = WorkspaceController;
//# sourceMappingURL=workspace.controller.js.map