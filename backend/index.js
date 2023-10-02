'use strict'

const Hapi = require("@hapi/hapi");
const AuthRoutes = require("./routes/auth_routes");
const FundsRoutes = require("./routes/funds_routes");
const geoLocatePlugin = require("./plugins/geoLocate_plugin");
const authJwtPlugin = require("./plugins/authJwt_plugin");
const rateLimitPlugin = require("./plugins/rateLimit_plugin");
const swaggerPlugin = require("./plugins/swagger_plugin");
const logger = require("./logger");

const init = async () => {
    const server = Hapi.server({
        host: 'localhost',
        port: 8000,
        "routes": {
            "cors": {
                "origin": ["http://localhost:4200"],
                "headers": ["Accept", "Content-Type", "Authorization"],
                "additionalHeaders": ["X-Requested-With"],
                "credentials": true
            }
        }
    });

    // Register the geoLocatePlugin plugin for geolocation
    await server.register(geoLocatePlugin);
    // Register the authJwtPlugin plugin for JWT authentication
    await server.register(authJwtPlugin);
    // Register the rateLimitPlugin plugin to avoid brute force
    await server.register(rateLimitPlugin);
    // Register the swaggerPlugin plugin to generate API documentation
    await server.register(swaggerPlugin);

    // Authentication routes
    server.route(AuthRoutes);

    // Funds-related routes
    server.route(FundsRoutes);

    // Generic route for unmatched URLs
    server.route({
        method: 'GET',
        path: '/{any*}',
        handler: (req, h) => {
            return "Page not found"
        },
        options: {
            auth: false
        }
    });

    await server.start();
    logger.info(`Server started on: ${server.info.uri}`);
}

process.on('unhandledRejection', (err) => {
    console.error(new Error(err));
    process.exit(1);
})

init();