const express = require("express")
const InfoService = require("../services/info.service")

const router = express.Router()
const service = new InfoService()

router.get("/", async (request, response, next) => {
  try {
    
    const info = await service.getAll()
    response.json(info)
    
  } catch (error) {
    next(error)
  }
})

module.exports = router;