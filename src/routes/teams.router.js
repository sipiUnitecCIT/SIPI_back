import express from "express"
import { TeamIdSchema } from "../schemas/teams.schema"
import TeamsService from "../services/teams.service"
import { SUCCESSFUL_STATUS } from "../utils/statusCodes"

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

router.get("/:id/members", async (request, response, next) => {
  try {
    
    const validatedId = TeamIdSchema.parse(parseInt(request.params.id))
    const teamMembers = await service.findMembers(validatedId)
    response.json(teamMembers)

  } catch (error) {
    next(error)
  }
})

export default router;