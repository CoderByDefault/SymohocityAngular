import { Entity } from '@loopback/repository';
import { Instance, InstanceWithRelations } from './instance.model';
export declare class Workspace extends Entity {
    id?: string;
    name?: string;
    map?: string;
    center_coords?: string[];
    created_at: string;
    instances: Instance[];
    constructor(data?: Partial<Workspace>);
}
export interface WorkspaceRelations {
    instances?: InstanceWithRelations[];
}
export declare type WorkspaceWithRelations = Workspace & WorkspaceRelations;
