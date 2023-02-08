const express = require("express")
const StudentsService = require("../services/students.service")

const service = new StudentsService()

const router = express.Router()

router.get("/", async (request, response, next) => {
  try {
    
    const students = await service.findAll()
    response.json({ ...students })

  } catch (error) {
    next(error)
  }
})

module.exports = router;