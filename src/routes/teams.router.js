const express = require("express");
const { TeamIdSchema } = require("../schemas/teams.schema");
const TeamsService = require("../services/teams.service");
const { SUCCESSFUL_STATUS } = require("../utils/statusCodes");

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

router.get("/:id", async (request, response, next) => {
  try {
    
    const validatedId = TeamIdSchema.parse(parseInt(request.params.id))
    const team = await service.findOne(validatedId)
    response.json(team)

  } catch (error) {
    next(error)
  }
})



module.exports = router;