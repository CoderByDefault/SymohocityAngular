


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

export const CredentialsRequestBody = {
  description: 'The input of login function',
  required: true,
  content: {
    'application/json': { schema: CredentialsSchema },
  },
};
