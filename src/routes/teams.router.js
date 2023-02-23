const express = require("express");
const TeamsService = require("../services/teams.service")

const router = express.Router();
const service = new TeamsService();

router.get("/", async (request, response, next) => {
  try {
    
    const teams = await service.findAll()
    response.json({ ...teams })

  } catch (error) {
    next(error)
  }
})

// router.post("/",
//   async (request, response, next) => {
//     try {

//       const team = await service.create(request.body)
//       response.status(201).json(team)

//     } catch (error) {
//       next(error)
//     }
//   }
// )



module.exports = router;