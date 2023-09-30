const HapiAuthJwt = require("hapi-auth-jwt2");
const validate = require("../utils/auth/authValidator");
require("dotenv").config();

const plugin = {
    name: 'auth-jwt-plugin',
    version: '1.0.0',
    register: async (server, options) => {
        await server.register(HapiAuthJwt);

        server.auth.strategy('jwt', 'jwt', {
            key: process.env.JWT_KEY,
            verifyOptions: { algorithms: ['HS256'] },
            validate
        });

        server.auth.default('jwt');
    }
}

module.exports = plugin;