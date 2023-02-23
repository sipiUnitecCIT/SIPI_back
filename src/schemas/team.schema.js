const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string().min(10)
const logo = Joi.string().uri()
const cover = Joi.string()
const description = Joi.string()

const createTeamSchema = Joi.object({
  name: name.required(),
  logo: logo.required(),
  cover: cover,
  description: description.required(),
})

const updateTeamSchema = Joi.object({
  name,
  logo,
  cover,
  description,
})

const getTeamSchema = Joi.object({
  id: id.required()
})

module.exports = { createTeamSchema, updateTeamSchema, getTeamSchema }