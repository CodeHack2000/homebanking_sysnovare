const bcrypt = require("bcrypt");
const logger = require("../../logger");

// Number of hashing rounds
const saltRounds = 10;

/**
 * Hashes a plain text password with a salt
 * @param {string} password - The plain text password to be hashed
 * @returns {Promise<string>} A promise that resolves to the hashed password
 */
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    return hash;
};

/**
 * Compares a user-provided password with a stored hashed password
 * @param {string} userPassword - The plain text password provided by the user
 * @param {string} hashedPassword - The stored hashed password
 * @returns {Promise<boolean>} A promise that resolves to true if the passwords match, or false otherwise
 */
const comparePasswords = async (userPassword, hashedPassword) => {
    try {
        const match = await bcrypt.compare(userPassword, hashedPassword);
        return match;
    } catch (err) {
        logger.error('Error comparing password: ', err);
        return false;
    }
};

module.exports = {
    hashPassword,
    comparePasswords
};