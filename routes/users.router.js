const express = require("express")
const UsersService = require("../services/users.service")

const service = new UsersService()

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