const buildDevLogger = require("./dev_logger");
const buildProdLogger = require("./prod_logger");
require("dotenv").config();

let logger = null;
if (process.env.NODE_ENV_LOGGER === 'development') {
    logger = buildDevLogger();
} else {
    logger = buildProdLogger();
}

module.exports = logger;