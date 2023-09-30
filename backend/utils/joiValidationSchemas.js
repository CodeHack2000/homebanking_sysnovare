const Joi = require('joi');

const authSchema = Joi.object({
    email: Joi.string().email().required().description('Email address in the format <email@gmail.com>'),
    password: Joi.string().min(6).required().description('Password in the format <123abc>')
});

const fundsSchema = Joi.object({
    amount: Joi.number().min(0).required().description('Amount in the format <10>'),
});

const tokenSchema =
    Joi.object({
        authorization: Joi.string().required().description('JWT token in the form "Bearer <token>"'),
    }).options({ allowUnknown: true })
    ;

module.exports = {
    authSchema,
    fundsSchema,
    tokenSchema
};