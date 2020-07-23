import { Entity } from '@loopback/repository';
import { PermissionKey } from '../_unused_components/authorization';
export declare class Role extends Entity {
    permissions: PermissionKey[];
    constructor(data?: Partial<Role>);
}
export interface RoleRelations {
}
export declare type RoleWithRelations = Role & RoleRelations;
