const AuthController = require("../controllers/auth_controller");
const {authSchema} = require("../utils/joiValidationSchemas");

module.exports = [
    {
        method: 'POST',
        path: '/subscribe',
        handler: AuthController.register,
        options: {
            auth: false,
            description: 'Registers a new user based on the provided request payload',
            notes: 'A response indicating success or failure',
            tags: ['api'],
            validate: {
                payload: authSchema
            }
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: AuthController.login,
        config: {
            auth: false,
            description: 'Authenticates a user based on the provided request payload and issues a JWT token upon successful login',
            notes: 'A response containing a JWT token or an error message',
            tags: ['api'],
            validate: {
                payload: authSchema
            },
            plugins: {
                'hapi-rate-limit': {
                    enabled: true,
                    userLimit: false,
                    userPathLimit: 5,
                    userPathCache: {
                        segment: 'hapi-rate-limit-user',
                        expiresIn: 60000
                    },
                    pathLimit: false
                }
            }
        },
    },
];