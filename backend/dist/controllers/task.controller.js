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
let TaskController = class TaskController {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async create(task) {
        return await this.taskRepository.create(task);
    }
    async count(where) {
        return await this.taskRepository.count(where);
    }
    async find(filter) {
        return await this.taskRepository.find(filter);
    }
    async updateAll(task, where) {
        return await this.taskRepository.updateAll(task, where);
    }
    async findById(id) {
        return await this.taskRepository.findById(id);
    }
    async updateById(id, task) {
        await this.taskRepository.updateById(id, task);
    }
    async replaceById(id, task) {
        await this.taskRepository.replaceById(id, task);
    }
    async deleteById(id) {
        await this.taskRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/tasks', {
        responses: {
            '200': {
                description: 'Task model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Task } } },
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Task]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "create", null);
__decorate([
    rest_1.get('/tasks/count', {
        responses: {
            '200': {
                description: 'Task model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Task))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "count", null);
__decorate([
    rest_1.get('/tasks', {
        responses: {
            '200': {
                description: 'Array of Task model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Task } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Task))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "find", null);
__decorate([
    rest_1.patch('/tasks', {
        responses: {
            '200': {
                description: 'Task PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Task, { partial: true }),
            },
        },
    })),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Task))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Task, Object]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/tasks/{id}', {
        responses: {
            '200': {
                description: 'Task model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Task } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "findById", null);
__decorate([
    rest_1.patch('/tasks/{id}', {
        responses: {
            '204': {
                description: 'Task PATCH success',
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody({
        content: {
            'application/json': {
                schema: rest_1.getModelSchemaRef(models_1.Task, { partial: true }),
            },
        },
    })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Task]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "updateById", null);
__decorate([
    rest_1.put('/tasks/{id}', {
        responses: {
            '204': {
                description: 'Task PUT success',
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Task]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/tasks/{id}', {
        responses: {
            '204': {
                description: 'Task DELETE success',
            },
        },
    }),
    authentication_1.authenticate('jwt'),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TaskController.prototype, "deleteById", null);
TaskController = __decorate([
    __param(0, repository_1.repository(repositories_1.TaskRepository)),
    __metadata("design:paramtypes", [repositories_1.TaskRepository])
], TaskController);
exports.TaskController = TaskController;
//# sourceMappingURL=task.controller.js.map