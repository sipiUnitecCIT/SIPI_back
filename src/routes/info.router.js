const express = require("express");
const { CreateInfoSchema, UpdateInfoSchema, InfoSchemaId } = require("../schemas/info.schema");
const { SUCCESSFUL_STATUS } = require("../utils/statusCodes");

const InfoService = require("../services/info.service");

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

module.exports = router;