import { Count, Filter, Where } from '@loopback/repository';
import { Workspace } from '../models';
import { WorkspaceRepository } from '../repositories';
export declare class WorkspaceController {
    workspaceRepository: WorkspaceRepository;
    constructor(workspaceRepository: WorkspaceRepository);
    create(workspace: Workspace): Promise<Workspace>;
    count(where?: Where<Workspace>): Promise<Count>;
    find(filter?: Filter<Workspace>): Promise<Workspace[]>;
    updateAll(workspace: Workspace, where?: Where<Workspace>): Promise<Count>;
    findById(id: string): Promise<Workspace>;
    updateById(id: string, workspace: Workspace): Promise<void>;
    replaceById(id: string, workspace: Workspace): Promise<void>;
    deleteById(id: string): Promise<void>;
}
