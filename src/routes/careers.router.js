import express from "express"
import CareersService from "../services/careers.service"

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

export default router;