const fs = require("fs/promises");

const usersFilePath = "data\\users.json";

/**
 * Reads users from the JSON file
 * @returns {Promise<Array>} An array of user objects
 */
const getUsersFromFile = async () => {
    try {
        const data = await fs.readFile(usersFilePath, 'utf8');

        if (!data.trim()) {
            return [];
        }

        return JSON.parse(data);
    } catch (err) {
        // If the file doesn't exist, return an empty array
        if (err.code === 'ENOENT') {
            return [];
        }
        throw err;
    }
};

/**
 * Saves a new user to the JSON file
 * @param {object} newUser - The user object to be saved
 * @returns {Promise<void>} A Promise that resolves when the user is saved
 */
const saveUsersToFile = async (newUser) => {
    const users = await getUsersFromFile();
    users.push(newUser);
    await fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
};

/**
 * Gets a user by email from the JSON data
 * @param {string} email - The email of the user to retrieve
 * @returns {Promise<object|null>} The user object if found, or null if not found
 */
const getUser = async (email) => {
    const users = await getUsersFromFile();
    return users.find((user) => user.email === email) || null;
}

module.exports = {
    saveUsersToFile,
    getUser,
};