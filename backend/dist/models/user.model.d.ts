import { Entity } from '@loopback/repository';
import { UserPermission } from '../_unused_components/authorization';
export declare class User extends Entity {
    id?: string;
    name: string;
    password: string;
    created_at: string;
    permissions: UserPermission[];
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
