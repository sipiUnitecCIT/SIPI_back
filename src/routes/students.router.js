const express = require("express")
const StudentsService = require("../services/students.service")

const router = express.Router()
const service = new StudentsService()

router.get("/", async (request, response, next) => {
  try {
    
    const students = await service.findAll()
    response.json({ ...students })

  } catch (error) {
    next(error)
  }
})

module.exports = router;