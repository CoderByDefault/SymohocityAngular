import { DefaultCrudRepository, HasManyRepository, HasManyRepositoryFactory, repository, Filter, Options } from '@loopback/repository';
import { Workspace, WorkspaceRelations, Instance, WorkspaceWithRelations } from '../models';
import { CouchDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { InstanceRepository } from './instance.repository';

export class WorkspaceRepository extends DefaultCrudRepository<
  Workspace,
  typeof Workspace.prototype.id,
  WorkspaceRelations
  > {
  public readonly instances: HasManyRepositoryFactory<Instance, typeof Workspace.prototype.id>

  constructor(
    @inject('datasources.couch') dataSource: CouchDataSource,
    @repository.getter('InstanceRepository')
    protected instanceRepositoryGetter: Getter<InstanceRepository>

  ) {
    super(Workspace, dataSource);
    this.instances = this.createHasManyRepositoryFactoryFor('instances', instanceRepositoryGetter);
  }

  async find(
    filter?: Filter<Workspace>,
    options?: Options,
  ): Promise<WorkspaceWithRelations[]> {
    // Prevent juggler for applying "include" filter
    // Juggler is not aware of LB4 relations
    const include = filter && filter.include;
    filter = { ...filter, include: undefined };
    const result = await super.find(filter, options);

    // poor-mans inclusion resolver, this should be handled by DefaultCrudRepo
    // and use `inq` operator to fetch related todos in fewer DB queries
    // this is a temporary implementation, please see
    // https://github.com/strongloop/loopback-next/issues/3195
    if (include && include.length && include[0].relation === 'instances') {
      await Promise.all(
        result.map(async r => {
          r.instances = await this.instances(r.id).find();
        }),
      );
    }

    return result;
  }

  async findById(
    id: typeof Workspace.prototype.id,
    filter?: Filter<Workspace>,
    options?: Options,
  ): Promise<WorkspaceWithRelations> {
    // Prevent juggler for applying "include" filter
    // Juggler is not aware of LB4 relations
    const include = filter && filter.include;
    filter = { ...filter, include: undefined };

    const result = await super.findById(id, filter, options);

    // poor-mans inclusion resolver, this should be handled by DefaultCrudRepo
    // and use `inq` operator to fetch related todos in fewer DB queries
    // this is a temporary implementation, please see
    // https://github.com/strongloop/loopback-next/issues/3195
    if (include && include.length && include[0].relation === 'instances') {
      result.instances = await this.instances(result.id).find();
    }

    return result;
  }
}
