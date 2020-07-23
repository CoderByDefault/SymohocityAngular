import {DefaultCrudRepository, repository, BelongsToAccessor, Filter, Options} from '@loopback/repository';
import {Task, TaskRelations, Instance, TaskWithRelations} from '../models';
import {CouchDataSource} from '../datasources';
import {inject, Getter} from '@loopback/core';
import { InstanceRepository } from './instance.repository';

export class TaskRepository extends DefaultCrudRepository<
  Task,
  typeof Task.prototype.id,
  TaskRelations
> {
  public readonly instanceId: BelongsToAccessor<Instance, typeof Task.prototype.id>

  constructor(
    @inject('datasources.couch') dataSource: CouchDataSource,
    @repository.getter('InstanceRepository') protected instanceRepositoryGetter: Getter<InstanceRepository>

  ) {
    super(Task, dataSource);
    this.instanceId = this.createBelongsToAccessorFor('instance', instanceRepositoryGetter)

  }
  async find(
    filter?: Filter<Task>,
    options?: Options,
  ): Promise<Task[]> {

    const include = filter && filter.include;
    filter = { ...filter, include: undefined };
    const result = await super.find(filter, options);


    if (include && include.length && include[0].relation === 'instance') {
      await Promise.all(
        result.map(async r => {
          r.instance = await this.instanceId(r.id);
        }),
      );
    }

    return result;
  }

  async findById(
    id: typeof Task.prototype.id,
    filter?: Filter<Task>,
    options?: Options,
  ): Promise<TaskWithRelations> {
    // Prevent juggler for applying "include" filter
    // Juggler is not aware of LB4 relations
    const include = filter && filter.include;
    filter = { ...filter, include: undefined };

    const result = await super.findById(id, filter, options);

    // poor-mans inclusion resolver, this should be handled by DefaultCrudRepo
    // and use `inq` operator to fetch related todos in fewer DB queries
    // this is a temporary implementation, please see
    // https://github.com/strongloop/loopback-next/issues/3195
    if (include && include.length && include[0].relation === 'instance') {
      result.instance = await this.instanceId(result.id);
    }

    return result;
  }
}
