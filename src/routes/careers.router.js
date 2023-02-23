const express = require("express")
const CareersService = require("../services/careers.service")

const service = new CareersService()

const router = express.Router()

router.get("/", async (request, response, next) => {
  try {
    
    const careers = await service.findAll()
    response.json({ ...careers })

  } catch (error) {
    next(error)
  }
})

module.exports = router;