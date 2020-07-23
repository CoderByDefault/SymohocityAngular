import { DefaultCrudRepository, HasManyRepositoryFactory, Filter, Options } from '@loopback/repository';
import { Workspace, WorkspaceRelations, Instance, WorkspaceWithRelations } from '../models';
import { CouchDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { InstanceRepository } from './instance.repository';
export declare class WorkspaceRepository extends DefaultCrudRepository<Workspace, typeof Workspace.prototype.id, WorkspaceRelations> {
    protected instanceRepositoryGetter: Getter<InstanceRepository>;
    readonly instances: HasManyRepositoryFactory<Instance, typeof Workspace.prototype.id>;
    constructor(dataSource: CouchDataSource, instanceRepositoryGetter: Getter<InstanceRepository>);
    find(filter?: Filter<Workspace>, options?: Options): Promise<WorkspaceWithRelations[]>;
    findById(id: typeof Workspace.prototype.id, filter?: Filter<Workspace>, options?: Options): Promise<WorkspaceWithRelations>;
}
