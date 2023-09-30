const { format, createLogger, transports } = require("winston");
const { timestamp, combine, errors, json } = format;

function buildProdLogger() {
    return createLogger({
        format: combine(
            timestamp(),
            errors({ stack: false }),
            json(),
        ),
        defaultMeta: { service: 'homebanking_backend-service' },
        transports: [
            new transports.Console(),
            new transports.File({ filename: 'service_homebanking_backend.log' })
        ],
    });
};

module.exports = buildProdLogger;