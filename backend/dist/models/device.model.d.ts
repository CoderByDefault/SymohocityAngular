import { Entity } from '@loopback/repository';
import { InstanceWithRelations } from "./instance.model";
export declare class Device extends Entity {
    id?: string;
    name?: string;
    type?: string;
    created_at: string;
    instanceId: number;
    constructor(data?: Partial<Device>);
}
export interface DeviceRelations {
    instance?: InstanceWithRelations;
}
export declare type DeviceWithRelations = Device & DeviceRelations;
