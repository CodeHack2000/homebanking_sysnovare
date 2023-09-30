const FundsController = require("../controllers/funds_controller");
const {fundsSchema, tokenSchema} = require("../utils/joiValidationSchemas");

module.exports = [
    {
        method: 'GET',
        path: '/funds',
        handler: FundsController.getFunds,
        options: {
            auth: 'jwt',
            description: 'Retrieve the current funds balance of the authenticated user',
            notes: "A response containing the user's funds or an error message",
            tags: ['api'],
            validate: {
                headers: tokenSchema
            }
        }
    },
    {
        method: 'PUT',
        path: '/funds',
        handler: FundsController.addFunds,
        options: {
            auth: 'jwt',
            description: "Adds funds to authenticated user's balance",
            notes: 'A response indicating success or an error message',
            tags: ['api'],
            validate: {
                headers: tokenSchema,
                payload: fundsSchema
            },
        }
    },
    {
        method: 'DELETE',
        path: '/funds',
        handler: FundsController.withdrawFunds,
        options: {
            auth: 'jwt',
            description: "Withdraws funds from authenticated user's balance",
            notes: 'A response indicating success or an error message',
            tags: ['api'],
            validate: {
                headers: tokenSchema,
                payload: fundsSchema
            },
        }
    },
    {
        method: 'GET',
        path: '/funds/movements',
        handler: FundsController.getFundsMovements,
        options: {
            auth: 'jwt',
            description: 'Retrieves funds movements of an authenticated user',
            notes: "A response containing the user's funds movements",
            tags: ['api'],
            validate: {
                headers: tokenSchema
            }
        }
    },
];