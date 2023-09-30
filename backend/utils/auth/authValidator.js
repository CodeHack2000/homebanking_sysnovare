/**
 * Validates a decoded JWT token
 * @param {object} decoded - The decoded JWT token
 * @param {object} request - The Hapi.js request object
 * @param {object} h - The Hapi.js response toolkit
 * @returns {object} An object indicating whether the token is valid and containing user credentials if valid
 */
const validate = async (decoded, request, h) => {
    try {
        if (decoded.exp && Date.now() >= decoded.exp * 1000) {
            return { isValid: false };
        }

        if (!decoded.email) {
            return { isValid: false };
        }

        return { isValid: true, credentials: { email: decoded.email } };
    } catch (err) {
        return { isValid: false };
    }
};

module.exports = validate;