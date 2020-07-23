"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const context_1 = require("@loopback/context");
const metadata_1 = require("@loopback/metadata");
var AuthorizationBinding;
(function (AuthorizationBinding) {
    AuthorizationBinding.AUTHORIZE_ACTION = context_1.BindingKey.create('userAuthorization.actions.authorize');
    AuthorizationBinding.METADATA = context_1.BindingKey.create('userAuthorization.operationMetadata');
    AuthorizationBinding.USER_PERMISSIONS = context_1.BindingKey.create('userAuthorization.actions.userPermissions');
})(AuthorizationBinding = exports.AuthorizationBinding || (exports.AuthorizationBinding = {}));
exports.AUTHRIZATION_METADATA_ACCESSOR = metadata_1.MetadataAccessor.create('userAuthorization.accessor.operationMetadata');
//# sourceMappingURL=keys.js.map