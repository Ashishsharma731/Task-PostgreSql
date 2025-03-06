const Joi = require("joi");

const userSchema = Joi.object({
  name: Joi.string().min(3).max(50).required(),
  email: Joi.string().email().required(), 
  password: Joi.string().min(6).max(100).required(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(), 
  password: Joi.string().min(6).max(100).required(), 
});

module.exports = { userSchema, loginSchema };
