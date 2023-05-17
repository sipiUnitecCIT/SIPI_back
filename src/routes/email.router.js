import express from "express"
import EmailSchema from "../schemas/email.schema"
import EmailService from "../services/email.service"

const router = express.Router()
const service = new EmailService()

router.post("/notification", async (request, response, next) => {
  try {
    
    const validatedInfo = EmailSchema.parse(request.body)
    
    const message = await service.sendNotification(validatedInfo)
    
    response.json({ message })
    
  } catch (error) {
    next(error);
    console.log("MENSAJE FALLIDO!!! :(")
  }
})

export default router;