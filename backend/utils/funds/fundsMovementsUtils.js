const fs = require("fs/promises");

const fundsMovementsFilePath = "data\\funds_movements.json";

/**
 * Reads funds movements data from a file and parses it into an array of objects
 *
 * @returns {Promise<Array>} A promise that resolves to an array of funds movements
 */
const getUsersFundsMovementsFromFile = async () => {
    try {
        const fundsMovementsData = await fs.readFile(fundsMovementsFilePath, 'utf8');

        return fundsMovementsData.trim() ? JSON.parse(fundsMovementsData): [];
    } catch (err) {
        if (err.code === 'ENOENT') {
            return [];
        }
        throw err;
    }
};

/**
 * Retrieves funds movements for a user with a given email
 *
 * @param {string} email - The email of the user
 * @returns {Promise<Array>} A promise that resolves to an array of funds movements for the user
 */
const getUserFundsMovements = async (email) => {
    const usersFundsMovements = await getUsersFundsMovementsFromFile();

    return usersFundsMovements.filter((element) => element.email === email);
};

/**
 * Appends a new user funds movement action to the file
 *
 * @param {Object} newUserFundsMovement - The new funds movement action to be saved
 * @returns {Promise<void>} A promise that resolves when the new action is successfully saved
 */
const saveUserFundsMovementActionToFile = async (newUserFundsMovement) => {
    try {
        const usersFundsMovements = await getUsersFundsMovementsFromFile();
        usersFundsMovements.push(newUserFundsMovement);
        await fs.writeFile(fundsMovementsFilePath, JSON.stringify(usersFundsMovements, null, 2), 'utf8');
    } catch (err) {
        console.error('Error saving user funds movement action: ', err);
    }
};

module.exports = {
    getUserFundsMovements,
    saveUserFundsMovementActionToFile
};