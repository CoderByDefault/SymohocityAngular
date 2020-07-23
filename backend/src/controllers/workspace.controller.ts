import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import { Workspace } from '../models';
import { WorkspaceRepository } from '../repositories';
import { authenticate } from '@loopback/authentication';

export class WorkspaceController {
  constructor(
    @repository(WorkspaceRepository)
    public workspaceRepository: WorkspaceRepository,
  ) { }

  @post('/workspaces', {
    responses: {
      '200': {
        description: 'Workspace model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Workspace } } },
      },
    },
  })
  @authenticate('jwt')
  async create(@requestBody() workspace: Workspace): Promise<Workspace> {
    return await this.workspaceRepository.create(workspace);
  }

  @get('/workspaces/count', {
    responses: {
      '200': {
        description: 'Workspace model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Workspace)) where?: Where<Workspace>,
  ): Promise<Count> {
    return await this.workspaceRepository.count(where);
  }

  @get('/workspaces', {
    responses: {
      '200': {
        description: 'Array of Workspace model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Workspace, { includeRelations: true }),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Workspace)) filter?: Filter<Workspace>,
  ): Promise<Workspace[]> {
    return await this.workspaceRepository.find(filter);
  }

  @patch('/workspaces', {
    responses: {
      '200': {
        description: 'Workspace PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt')
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Workspace, { partial: true }),
        },
      },
    })
    workspace: Workspace,
    @param.query.object('where', getWhereSchemaFor(Workspace)) where?: Where<Workspace>,
  ): Promise<Count> {
    return await this.workspaceRepository.updateAll(workspace, where);
  }

  @get('/workspaces/{id}', {
    responses: {
      '200': {
        description: 'Workspace model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Workspace, { includeRelations: true }),
          },
        },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Workspace> {
    return await this.workspaceRepository.findById(id);
  }

  @patch('/workspaces/{id}', {
    responses: {
      '204': {
        description: 'Workspace PATCH success',
      },
    },
  })
  @authenticate('jwt')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Workspace, { partial: true }),
        },
      },
    })
    workspace: Workspace,
  ): Promise<void> {
    await this.workspaceRepository.updateById(id, workspace);
  }

  @put('/workspaces/{id}', {
    responses: {
      '204': {
        description: 'Workspace PUT success',
      },
    },
  })
  @authenticate('jwt')
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() workspace: Workspace,
  ): Promise<void> {
    await this.workspaceRepository.replaceById(id, workspace);
  }

  @del('/workspaces/{id}', {
    responses: {
      '204': {
        description: 'Workspace DELETE success',
      },
    },
  })
  @authenticate('jwt')
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.workspaceRepository.deleteById(id);
  }
}
