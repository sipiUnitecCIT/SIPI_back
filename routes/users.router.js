const express = require("express")
const UsersService = require("../services/users.service")
const service = new UsersService()
const router = express.Router()

router.get("/", async (request, response)=>{
  try {
    const users = await service.findAll()
    
    response.json({
      users
    })
    
  } catch (error) {
    next(error)    
  }
})

module.exports = router;