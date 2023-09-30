const Inert = require("@hapi/inert");
const Vision = require("@hapi/vision");
const HapiSwagger = require("hapi-swagger");
require("dotenv").config();

const swaggerOptions = {
    info: {
        title: 'Homebanking API Documentation',
        version: process.env.API_VERSION
    }
};

const plugin = [
    Inert,
    Vision,
    {
        plugin: HapiSwagger,
        options: swaggerOptions
    }
];

module.exports = plugin;