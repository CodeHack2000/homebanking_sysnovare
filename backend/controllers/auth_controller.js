const { saveUsersToFile, getUser } = require("../utils/auth/userUtils");
const { saveUserFundsToFile } = require("../utils/funds/fundsUtils");
const { hashPassword, comparePasswords } = require("../utils/auth/passwordUtils");
const jwt = require("jsonwebtoken");
const logger = require("../logger");
require("dotenv").config();

/**
 * Registers a new user based on the provided request payload
 *
 * @param {Object} req - The Hapi.js request object
 * @param {Object} h - The Hapi.js response toolkit
 * @returns {Object} A response indicating success or failure
 */
const register = async (req, h) => {
    try {
        // Check if the user already exists in the JSON file
        const { email, password } = req.payload;
        const findUser = await getUser(email);

        if (findUser != null) {
            return h.response({ message: 'User already exists' }).code(400);
        }

        // Create the new user and add them to the JSON file
        const hashedPassword = await hashPassword(password);
        const newUser = { email, hashedPassword };
        await saveUsersToFile(newUser);

        // Create new funds to the user and add them to the JSON file
        const newUserFunds = {
            email: email,
            funds: 0
        };
        await saveUserFundsToFile(newUserFunds);

        logger.info(`User registered successfully - (${req.location.ip})`);
        logger.debug('New user registered: ', newUserFunds);
        return h.response({ message: 'User registered successfully' }).code(201);
    } catch (err) {
        logger.error('Error registering user: ', err);
        return h.response({ message: 'Internal server error' }).code(500);
    }
};

/**
 * Authenticates a user based on the provided request payload and issues a JWT token upon successful login
 *
 * @param {Object} req - The Hapi.js request object
 * @param {Object} h - The Hapi.js response toolkit
 * @returns {Object} A response containing a JWT token or an error message
 */
const login = async (req, h) => {
    try {
        // Check if user exists in JSON file
        const { email, password } = req.payload;
        const findUser = await getUser(email);

        if (findUser === null) {
            return h.response({ message: 'The email or password is incorrect' }).code(400);
        }

        // Verify that the user's password matches the stored hashed password
        const verifyUserPassword = await comparePasswords(password, findUser.hashedPassword);

        if (!verifyUserPassword) {
            return h.response({ message: 'The email or password is incorrect' }).code(400);
        } else {
            const token = jwt.sign(
                { email: findUser.email },
                process.env.JWT_KEY,
                { expiresIn: '1h' }
            );

            logger.info(`User logged in successfully - (${req.location.ip})`);
            logger.debug('User logged in: ', findUser.email);
            return h.response({ token }).code(200);
        }
    } catch (err) {
        logger.error('Error during login: ', err);
        return h.response({ message: 'Internal server error' }).code(500);
    }
};

module.exports = {
    register,
    login,
};