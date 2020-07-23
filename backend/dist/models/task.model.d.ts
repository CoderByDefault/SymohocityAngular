import { Entity } from '@loopback/repository';
import { InstanceWithRelations } from './instance.model';
export declare class Task extends Entity {
    id?: string;
    name: string;
    desc?: string;
    datetime?: string;
    created_at: string;
    instanceId: number;
    constructor(data?: Partial<Task>);
}
export interface TaskRelations {
    instance?: InstanceWithRelations;
}
export declare type TaskWithRelations = Task & TaskRelations;
