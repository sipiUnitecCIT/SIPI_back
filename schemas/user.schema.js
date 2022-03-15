const Joi = require("joi")

const id = Joi.string()
const name = Joi.string()
const email = Joi.string()
const password = Joi.string()

const createUserSchema = Joi.object({
  name,
  email: email.required(),
  password: password.required()
})

const updateUserSchema = Joi.object({
  name, email, password
})

const getUserSchema = Joi.object({
  id: id.required(),
})

module.exports = { createUserSchema, updateUserSchema, getUserSchema }