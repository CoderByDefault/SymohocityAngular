import { DefaultCrudRepository, Options, Filter, BelongsToRepository, BelongsToAccessor, repository, HasManyRepositoryFactory } from '@loopback/repository';
import { Instance, InstanceRelations, InstanceWithRelations, Workspace } from '../models';
import { CouchDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { WorkspaceRepository } from './workspace.repository';
import { DeviceRepository } from "./device.repository";
import { Device } from '../models/device.model';

export class InstanceRepository extends DefaultCrudRepository<
  Instance,
  typeof Instance.prototype.id,
  InstanceRelations
  > {
  public readonly workspace: BelongsToAccessor<Workspace, typeof Instance.prototype.id>
  public readonly devices: HasManyRepositoryFactory<Device, typeof Instance.prototype.id>

  constructor(
    @inject('datasources.couch') dataSource: CouchDataSource,
    @repository.getter('WorkspaceRepository') protected workspaceRepositoryGetter: Getter<WorkspaceRepository>,
    @repository.getter('DeviceRepository') protected deviceRepositoryGetter: Getter<DeviceRepository>

  ) {
    super(Instance, dataSource);
    this.workspace = this.createBelongsToAccessorFor('workspace', workspaceRepositoryGetter);
    this.devices = this.createHasManyRepositoryFactoryFor('devices', deviceRepositoryGetter)
  }
  async find(
    filter?: Filter<Instance>,
    options?: Options,
  ): Promise<Instance[]> {

    const include = filter && filter.include;
    filter = { ...filter, include: undefined };
    const result = await super.find(filter, options);
    
    if (include && include.length && include[0].relation === 'instances') {
      await Promise.all(
        result.map(async r => {
          r.workspace = await this.workspace(r.id);
          r.devices = await this.devices(r.id).find()
        }),
      );
    }
    return result;
  }

  async findById(
    id: typeof Instance.prototype.id,
    filter?: Filter<Instance>,
    options?: Options,
  ): Promise<InstanceWithRelations> {
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
      result.workspace = await this.workspace(result.id);
      result.devices = await this.devices(result.id).find()
    }

    return result;
  }
}
