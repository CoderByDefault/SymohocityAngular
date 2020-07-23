import { PermissionKey } from './permission-key';
export interface AuthorizeFn {
    (userPermissions: PermissionKey[]): Promise<Boolean>;
}
export interface AuthorizationMetaData {
    permissons: string[];
}
export interface UserPermission {
    permission: PermissionKey;
    allowed: boolean;
}
export interface UserPermissionsFn {
    (userPermissions: UserPermission[], rolePermissions: PermissionKey[]): PermissionKey[];
}
