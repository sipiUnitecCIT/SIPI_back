const express = require("express")
const UsersService = require("../services/users.service")
const service = new UsersService()
const router = express.Router()

router.get("/", async (request, response)=>{
  
  const users = await service.findAll()
  
  response.json({
    users
  })
})

module.exports = router;