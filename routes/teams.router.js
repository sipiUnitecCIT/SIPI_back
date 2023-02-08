const express = require("express");
const { validationHandler } = require("../middlewares/validation.handler");

const { createTeamSchema } = require("../schemas/team.schema");
const TeamsService = require("../services/teams.service")

const router = express.Router();
const service = new TeamsService();

router.get("/", async (request, response, next) => {
  try {
    // const teams = await service.findAll()

    response.json({
      // teams,
      greeting: "hello world!",
    })

  } catch (error) {
    next(error)
  }
})

router.post("/",
  validationHandler(createTeamSchema, "body"),
  async (request, response, next) => {
    try {
      
      const team = await service.create(request.body)
      response.status(201).json(team)
      
    } catch (error) {
      next(error)
    }
  }
)



module.exports = router;