import { Entity } from '@loopback/repository';
import { WorkspaceWithRelations } from './workspace.model';
import { Device, DeviceWithRelations } from "./device.model";
export declare class Instance extends Entity {
    id?: string;
    name: string;
    ipaddress: string;
    server_login: string;
    server_password: string;
    lng: string;
    lat: string;
    is_online: boolean;
    created_at: string;
    devices: Device[];
    workspaceId: number;
    constructor(data?: Partial<Instance>);
}
export interface InstanceRelations {
    workspace?: WorkspaceWithRelations;
    devices?: DeviceWithRelations[];
}
export declare type InstanceWithRelations = Instance & InstanceRelations;
