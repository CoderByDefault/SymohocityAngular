import { DefaultCrudRepository, Filter, Options, BelongsToAccessor } from '@loopback/repository';
import { CouchDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { Device, DeviceWithRelations, DeviceRelations } from '../models/device.model';
import { Instance } from '../models/instance.model';
import { InstanceRepository } from './instance.repository';
export declare class DeviceRepository extends DefaultCrudRepository<Device, typeof Device.prototype.id, DeviceRelations> {
    protected instanceRepositoryGetter: Getter<InstanceRepository>;
    readonly instanceId: BelongsToAccessor<Instance, typeof Device.prototype.id>;
    constructor(dataSource: CouchDataSource, instanceRepositoryGetter: Getter<InstanceRepository>);
    find(filter?: Filter<Device>, options?: Options): Promise<Device[]>;
    findById(id: typeof Device.prototype.id, filter?: Filter<Device>, options?: Options): Promise<DeviceWithRelations>;
}
