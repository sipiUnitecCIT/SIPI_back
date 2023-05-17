import express from "express"
import StudentsService from "../services/students.service"
import { PersonIdSchema } from "../schemas/person.schema"

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


router.get("/:id", async (request, response, next)=>{
  try {
    
    const validatedIdFormat = PersonIdSchema.parse(request.params.id)
    const student = await service.findOne(validatedIdFormat)
    response.json(student)
    
  } catch (error) {
    next(error)
  }
})

export default router;