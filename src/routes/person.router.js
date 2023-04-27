import express from "express"
import { PersonIdSchema, CreatePersonSchema, UpdatePersonSchema } from "../schemas/person.schema"
import { SUCCESSFUL_STATUS } from "../utils/statusCodes"

import PersonService from "../services/person.service"

const router = express.Router()
const service = new PersonService()

const { CREATED } = SUCCESSFUL_STATUS

router.get("/", async (request, response, next) => {
  try {

    const personList = await service.getAll()
    response.json(personList)

  } catch (error) {
    next(error)
  }
})

router.get("/:id", async (request, response, next) => {
  try {

    const validatedId = PersonIdSchema.parse(request.params.id)
    const person = await service.findOne(validatedId)
    response.json(person)

  } catch (error) {
    next(error)
  }
})

router.post("/", async (request, response, next) => {
  try {

    const validatedPerson = CreatePersonSchema.parse(request.body)
    const createdPerson = await service.create(validatedPerson)
    response.status(CREATED.CODE).json(createdPerson)

  } catch (error) {
    next(error)
  }
})

router.put("/:id", async (request, response, next) => {
  try {

    const validatedId = PersonIdSchema.parse(request.params.id)
    const validatedInfo = UpdatePersonSchema.parse(request.body)

    const modifiedPerson = await service.update(validatedId, validatedInfo)
    response.json(modifiedPerson)

  } catch (error) {
    next(error)
  }
})

router.delete("/:id", async () => {
  try {

    const validatedId = PersonIdSchema.parse(request.params.id)
    const deleledItemId = await service.delete(validatedId)
    response.json({ id: deleledItemId })

  } catch (error) {
    next(error)
  }
})

export default router;