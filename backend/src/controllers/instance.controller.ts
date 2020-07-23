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
import { Instance } from '../models';
import { InstanceRepository } from '../repositories';
import { authenticate } from '@loopback/authentication';


export class InstanceController {
  constructor(
    @repository(InstanceRepository)
    public instanceRepository: InstanceRepository,
  ) { }

  @post('/instances', {
    responses: {
      '200': {
        description: 'Instance model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Instance } } },
      },
    },
  })
  @authenticate('jwt')
  async create(@requestBody() instance: Instance): Promise<Instance> {
    return await this.instanceRepository.create(instance);
  }

  @get('/instances/count', {
    responses: {
      '200': {
        description: 'Instance model count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Instance)) where?: Where<Instance>,
  ): Promise<Count> {
    return await this.instanceRepository.count(where);
  }

  @get('/instances', {
    responses: {
      '200': {
        description: 'Array of Instance model instances',
        content: {
          'application/json': {
            schema: { type: 'array', items: { 'x-ts-type': Instance } },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Instance)) filter?: Filter<Instance>,
  ): Promise<Instance[]> {
    return await this.instanceRepository.find(filter);
  }

  @patch('/instances', {
    responses: {
      '200': {
        description: 'Instance PATCH success count',
        content: { 'application/json': { schema: CountSchema } },
      },
    },
  })
  @authenticate('jwt')
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Instance, { partial: true }),
        },
      },
    })
    instance: Instance,
    @param.query.object('where', getWhereSchemaFor(Instance)) where?: Where<Instance>,
  ): Promise<Count> {
    return await this.instanceRepository.updateAll(instance, where);
  }

  @get('/instances/{id}', {
    responses: {
      '200': {
        description: 'Instance model instance',
        content: { 'application/json': { schema: { 'x-ts-type': Instance } } },
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Instance> {
    return await this.instanceRepository.findById(id);
  }

  @patch('/instances/{id}', {
    responses: {
      '204': {
        description: 'Instance PATCH success',
      },
    },
  })
  @authenticate('jwt')
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Instance, { partial: true }),
        },
      },
    })
    instance: Instance,
  ): Promise<void> {
    await this.instanceRepository.updateById(id, instance);
  }

  @put('/instances/{id}', {
    responses: {
      '204': {
        description: 'Instance PUT success',
      },
    },
  })
  @authenticate('jwt')
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() instance: Instance,
  ): Promise<void> {
    await this.instanceRepository.replaceById(id, instance);
  }

  @del('/instances/{id}', {
    responses: {
      '204': {
        description: 'Instance DELETE success',
      },
    },
  })
  @authenticate('jwt')
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.instanceRepository.deleteById(id);
  }
}
