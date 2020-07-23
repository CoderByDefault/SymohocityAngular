"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserPermissionsProvider {
    constructor() { }
    value() {
        return (userPermissons, rolePermissons) => this.action(userPermissons, rolePermissons);
    }
    action(userPermissons, rolePermissons) {
        let perms = [];
        perms = perms.concat(rolePermissons);
        userPermissons.forEach((userPerm) => {
            if (userPerm.allowed && perms.indexOf(userPerm.permission) >= 0) {
                perms.splice(perms.indexOf(userPerm.permission), 1);
            }
        });
        return perms;
    }
}
exports.UserPermissionsProvider = UserPermissionsProvider;
//# sourceMappingURL=user-permissions.provider.js.map