import { DefaultCrudRepository, Filter, Options, BelongsToAccessor, repository } from '@loopback/repository';
import { CouchDataSource } from '../datasources';
import { inject, Getter } from '@loopback/core';
import { Device, DeviceWithRelations, DeviceRelations } from '../models/device.model';
import { Instance } from '../models/instance.model';
import { InstanceRepository } from './instance.repository';

export class DeviceRepository extends DefaultCrudRepository<
  Device,
  typeof Device.prototype.id,
  DeviceRelations
  > {
  public readonly instanceId: BelongsToAccessor<Instance, typeof Device.prototype.id>
  constructor(
    @inject('datasources.couch') dataSource: CouchDataSource,
    @repository.getter('InstanceRepository') protected instanceRepositoryGetter: Getter<InstanceRepository>

  ) {
    super(Device, dataSource);
    this.instanceId = this.createBelongsToAccessorFor('instance', instanceRepositoryGetter)
  }
  async find(
    filter?: Filter<Device>,
    options?: Options,
  ): Promise<Device[]> {

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
    id: typeof Device.prototype.id,
    filter?: Filter<Device>,
    options?: Options,
  ): Promise<DeviceWithRelations> {
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
