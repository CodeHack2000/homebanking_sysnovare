const fs = require("fs/promises");

const fundsFilePath = "data\\funds.json";

/**
 * Reads user funds from the JSON file
 * @returns {Promise<Array>} An array of user funds objects
 */
const getUsersFundsFromFile = async () => {
    try {
        const readData = await fs.readFile(fundsFilePath, 'utf8');

        return readData.trim() ? JSON.parse(readData) : [];
    } catch (err) {
        // If the file doesn't exist, return null
        if (err.code === 'ENOENT') {
            return [];
        }
        throw err;
    }
};

/**
 * Gets a user's funds by email from the JSON data
 * @param {string} email - The email of the user whose funds to retrieve
 * @returns {Promise<object|null>} The user's funds object if found, or null if not found
 */
const getUserFunds = async (email) => {
    const usersFunds = await getUsersFundsFromFile();

    const userFunds = usersFunds.find((element) => element.email === email);

    return userFunds !== undefined ? userFunds : null;
};

/**
 * Saves user funds to the JSON file
 * @param {object} newUserFund - The user's funds object to be saved
 * @returns {Promise<void>} A Promise that resolves when the user's funds are saved
 */
const saveUserFundsToFile = async (newUserFund) => {
    try {
        const usersFunds = await getUsersFundsFromFile();

        if (usersFunds != null) {
            const userIndex = usersFunds.findIndex((userFunds) => userFunds.email === newUserFund.email);

            if (userIndex !== -1) {
                usersFunds[userIndex] = newUserFund;
            } else {
                usersFunds.push(newUserFund);
            }

            await fs.writeFile(fundsFilePath, JSON.stringify(usersFunds, null, 2), 'utf8');
        }
    } catch (err) {
        console.error('Error saving user funds: ', err);
    }
};

module.exports = {
    getUserFunds,
    saveUserFundsToFile,
};