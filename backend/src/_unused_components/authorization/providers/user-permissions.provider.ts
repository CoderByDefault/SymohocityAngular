import { Provider } from "@loopback/context";

import { PermissionKey } from "../permission-key";
import { UserPermission, UserPermissionsFn } from "../types";

export class UserPermissionsProvider implements Provider<UserPermissionsFn>{
  constructor() { }
  value(): UserPermissionsFn {
    return (userPermissons, rolePermissons) => this.action(userPermissons, rolePermissons);
  }

  action(userPermissons: UserPermission[], rolePermissons: PermissionKey[]): PermissionKey[] {
    let perms: PermissionKey[] = [];
    perms = perms.concat(rolePermissons);
    userPermissons.forEach((userPerm: UserPermission) => {
      if (userPerm.allowed && perms.indexOf(userPerm.permission) >= 0) {
        perms.splice(perms.indexOf(userPerm.permission), 1);
      }
    })
    return perms;
  }
}
