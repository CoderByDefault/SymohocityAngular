"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@loopback/core");
const keys_1 = require("../keys");
function authorize(permissons) {
    return core_1.MethodDecoratorFactory.createDecorator(keys_1.AUTHRIZATION_METADATA_ACCESSOR, {
        permissons: permissons || []
    });
}
exports.authorize = authorize;
//# sourceMappingURL=authorize.decorator.js.map