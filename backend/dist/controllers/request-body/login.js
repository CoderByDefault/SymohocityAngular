"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CredentialsSchema = {
    type: 'object',
    required: ['name', 'password'],
    properties: {
        name: {
            type: 'string'
        },
        password: {
            type: 'string',
            minLength: 8,
        },
    },
};
exports.CredentialsRequestBody = {
    description: 'The input of login function',
    required: true,
    content: {
        'application/json': { schema: CredentialsSchema },
    },
};
//# sourceMappingURL=login.js.map