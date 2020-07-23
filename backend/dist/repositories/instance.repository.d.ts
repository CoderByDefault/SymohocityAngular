import { DefaultCrudRepository, Options, Filter, BelongsToAccessor, HasManyRepositoryFactory } from '@loopback/repository';
import { Instance, InstanceRelations, InstanceWithRelations, Workspace } from '../models';
import { CouchDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { WorkspaceRepository } from './workspace.repository';
import { DeviceRepository } from "./device.repository";
import { Device } from '../models/device.model';
export declare class InstanceRepository extends DefaultCrudRepository<Instance, typeof Instance.prototype.id, InstanceRelations> {
    protected workspaceRepositoryGetter: Getter<WorkspaceRepository>;
    protected deviceRepositoryGetter: Getter<DeviceRepository>;
    readonly workspace: BelongsToAccessor<Workspace, typeof Instance.prototype.id>;
    readonly devices: HasManyRepositoryFactory<Device, typeof Instance.prototype.id>;
    constructor(dataSource: CouchDataSource, workspaceRepositoryGetter: Getter<WorkspaceRepository>, deviceRepositoryGetter: Getter<DeviceRepository>);
    find(filter?: Filter<Instance>, options?: Options): Promise<Instance[]>;
    findById(id: typeof Instance.prototype.id, filter?: Filter<Instance>, options?: Options): Promise<InstanceWithRelations>;
}
