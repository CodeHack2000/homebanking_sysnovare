const { format, createLogger, transports } = require("winston");
const { timestamp, combine, printf, colorize } = format;

function buildDevLogger() {
    const logFormat = printf(({ level, message, timestamp, stack }) => {
        return `${timestamp} ${level}: ${stack || message}`;
    });

    return createLogger({
        format: combine(
            colorize(),
            timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
            format.errors({ stack: true }),
            logFormat
        ),
        transports: [
            new transports.Console(),
        ],
    });
};

module.exports = buildDevLogger;