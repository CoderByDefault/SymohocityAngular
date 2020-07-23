import { Provider } from "@loopback/context";
import { PermissionKey } from "../permission-key";
import { UserPermission, UserPermissionsFn } from "../types";
export declare class UserPermissionsProvider implements Provider<UserPermissionsFn> {
    constructor();
    value(): UserPermissionsFn;
    action(userPermissons: UserPermission[], rolePermissons: PermissionKey[]): PermissionKey[];
}
