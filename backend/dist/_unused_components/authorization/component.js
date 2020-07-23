"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const keys_1 = require("./keys");
const providers_1 = require("./providers");
class AuthorizationComponent {
    constructor() {
        this.providers = {
            [keys_1.AuthorizationBinding.AUTHORIZE_ACTION.key]: providers_1.AuthorizationActionProvider,
            [keys_1.AuthorizationBinding.METADATA.key]: providers_1.AuthorizationMetadataProvider,
            [keys_1.AuthorizationBinding.USER_PERMISSIONS.key]: providers_1.UserPermissionsProvider,
        };
    }
}
exports.AuthorizationComponent = AuthorizationComponent;
//# sourceMappingURL=component.js.map