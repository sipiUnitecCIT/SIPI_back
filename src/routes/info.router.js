import express from"express"
import { CreateInfoSchema, UpdateInfoSchema, InfoSchemaId } from"../schemas/info.schema"
import { SUCCESSFUL_STATUS } from"../utils/statusCodes"

import InfoService from "../services/info.service"
import { z } from "zod"

const router = express.Router()
const service = new InfoService()

const { CREATED } = SUCCESSFUL_STATUS

router.get("/", async (request, response, next) => {
  try {

    const info = await service.getAll()
    response.json(info)

  } catch (error) {
    next(error)
  }
})

router.get("/types", async (request, response, next)=>{
  try {
    
    const infoTypes = await service.getAllTypes()
    response.json(infoTypes)
    
  } catch (error) {
    next(error)
  }
})

router.get("/types/:id", async (request, response, next)=>{
  try {
    
    const validatedIdFormat = z.number().parse(parseInt(request.params.id))
    const infoType = await service.findType(validatedIdFormat)
    response.json(infoType)
    
  } catch (error) {
    next(error)
  }
})

router.get("/:id", async (request, response, next) => {
  try {
    
    const validatedIdFormat = InfoSchemaId.parse(request.params.id)
    const info = await service.findOne(validatedIdFormat)
    response.json(info)

  } catch (error) {
    next(error)
  }
})

router.post("/", async (request, response, next) => {
  try {

    const validatedInfo = CreateInfoSchema.parse(request.body)
    const createdInfo = await service.create(validatedInfo)
    response.status(CREATED.CODE).json(createdInfo)

  } catch (error) {
    next(error)
  }
})

router.put("/:id", async (request, response, next) => {
  try {
    
    const validatedIdFormat = InfoSchemaId.parse(request.params.id)
    const validatedInfo = UpdateInfoSchema.parse(request.body)
    
    const updatedInfo = await service.update(validatedIdFormat, validatedInfo)
    response.json(updatedInfo)

  } catch (error) {
    next(error)
  }
})

router.delete("/:id", async (request, response, next) => {
  try {
    
    const validatedIdFormat = InfoSchemaId.parse(request.params.id)
    const deletedItemID = await service.delete(validatedIdFormat)
    response.json({ id: deletedItemID })

  } catch (error) {
    next(error)
  }
})

export default router;