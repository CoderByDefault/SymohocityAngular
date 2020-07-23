import { DefaultCrudRepository, BelongsToAccessor, Filter, Options } from '@loopback/repository';
import { Task, TaskRelations, Instance, TaskWithRelations } from '../models';
import { CouchDataSource } from '../datasources';
import { Getter } from '@loopback/core';
import { InstanceRepository } from './instance.repository';
export declare class TaskRepository extends DefaultCrudRepository<Task, typeof Task.prototype.id, TaskRelations> {
    protected instanceRepositoryGetter: Getter<InstanceRepository>;
    readonly instanceId: BelongsToAccessor<Instance, typeof Task.prototype.id>;
    constructor(dataSource: CouchDataSource, instanceRepositoryGetter: Getter<InstanceRepository>);
    find(filter?: Filter<Task>, options?: Options): Promise<Task[]>;
    findById(id: typeof Task.prototype.id, filter?: Filter<Task>, options?: Options): Promise<TaskWithRelations>;
}
