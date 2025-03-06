const Joi = require("joi");

const itemSchema = Joi.object({
//   user_id: Joi.number().integer().required(), 
  title: Joi.string().min(3).max(255).required(), 
  description: Joi.string().max(500), 
});

const deleteItemSchema = Joi.object({
    id: Joi.number().integer().positive().required(), 
  });

module.exports = { itemSchema, deleteItemSchema };
