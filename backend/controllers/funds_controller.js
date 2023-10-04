const { saveUserFundsToFile, getUserFunds } = require("../utils/funds/fundsUtils");
const { saveUserFundsMovementActionToFile, getUserFundsMovements } = require("../utils/funds/fundsMovementsUtils");
const getCurrentDate = require("../utils/dateUtils");
const logger = require("../logger");

/**
 * Retrieve the current funds balance of the authenticated user
 * @param {Object} req - The Hapi.js request object
 * @param {Object} h - The Hapi.js response toolkit
 * @returns A response containing the user's funds or an error message
 */
const getFunds = async (req, h) => {
    try {
        const userEmail = req.auth.credentials.email;
        const userFunds = await getUserFunds(userEmail);

        if (userFunds === null) {
            return h.response({ message: 'Internal server error' }).code(500);
        }

        logger.info(`User funds successfully obtained - (${req.location.ip})`);
        logger.debug('User funds obtained: ', userFunds);
        return h.response(userFunds).code(200);
    } catch (err) {
        logger.error('Error getting user funds: ', err);
        return h.response({ message: 'Internal server error' }).code(500);
    }
};

/**
 * Adds funds to authenticated user's balance
 * @param {Object} req - The Hapi.js request object
 * @param {Object} h - The Hapi.js response toolkit
 * @returns A response indicating success or an error message
 */
const addFunds = async (req, h) => {
    try {
        const userEmail = req.auth.credentials.email;
        const userFunds = await getUserFunds(userEmail);

        if (userFunds === null) {
            return h.response({ message: 'Internal server error' }).code(500);
        }

        const { amount } = req.payload;

        if (amount <= 0) {
            return h.response({ message: 'Enter a valid value' }).code(400);
        }

        const newBalance = parseFloat((userFunds.funds + amount).toFixed(2));

        const current_date = getCurrentDate();
        const userFundsMovementAction = {
            email: userEmail,
            amount: amount,
            balance: userFunds.funds,
            newBalance: newBalance,
            date: current_date
        };

        userFunds.funds = newBalance;
        await saveUserFundsToFile(userFunds);

        await saveUserFundsMovementActionToFile(userFundsMovementAction);
        
        logger.info(`Funds successfully added to user - (${req.location.ip})`);
        logger.debug('Updated user funds: ', userFunds);
        return h.response().code(204);
    } catch (err) {
        logger.error('Error adding money to user funds: ', err);
        return h.response({ message: 'Internal server error' }).code(500);
    }
};

/**
 * Withdraws funds from authenticated user's balance
 * @param {Object} req - The Hapi.js request object
 * @param {Object} h - The Hapi.js response toolkit
 * @returns A response indicating success or an error message
 */
const withdrawFunds = async (req, h) => {
    try {
        const userEmail = req.auth.credentials.email;
        const userFunds = await getUserFunds(userEmail);

        if (userFunds === null) {
            return h.response({ message: 'Internal server error' }).code(500);
        }

        const { amount } = req.payload;

        if (amount <= 0) {
            return h.response({ message: 'Enter a valid value' }).code(400);
        }

        const newBalance = parseFloat((userFunds.funds - amount).toFixed(2));

        const current_date = getCurrentDate();
        const userFundsMovementAction = {
            email: userEmail,
            amount: amount,
            balance: userFunds.funds,
            newBalance: newBalance,
            date: current_date
        };

        if (newBalance < 0) {
            return h.response({ message: 'Insufficient funds to withdraw' }).code(400);
        } else {
            userFunds.funds = newBalance;
            await saveUserFundsToFile(userFunds);

            await saveUserFundsMovementActionToFile(userFundsMovementAction);

            logger.info(`User successfully withdrawn funds - (${req.location.ip})`);
            logger.debug('Updated user funds: ', userFunds);
            return h.response().code(204);
        }
    } catch (err) {
        logger.error('Error withdrawing money from user funds: ', err);
        return h.response({ message: 'Internal server error' }).code(500);
    }
};

/**
 * Retrieves funds movements of an authenticated user
 * @param {*} req - The Hapi.js request object
 * @param {*} h - The Hapi.js response toolkit
 * @returns A response containing the user's funds movements
 */
const getFundsMovements = async (req, h) => {
    try {
        const userEmail = req.auth.credentials.email;
        const userFundsMovements = await getUserFundsMovements(userEmail);

        logger.info(`User funds movements successfully obtained - (${req.location.ip})`);
        logger.debug('User funds obtained: ', userFundsMovements);
        return h.response(userFundsMovements).code(200);
    } catch (err) {
        logger.error('Error getting user funds movements: ', err);
        return h.response({message: 'Internal server error'}).code(500);
    }
};

module.exports = {
    getFunds,
    addFunds,
    withdrawFunds,
    getFundsMovements
};