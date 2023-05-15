import express from "express"

import studentsRouter from "./students.router"
import teamsRouter from "./teams.router"
import careersRouter from "./careers.router"
import infoRouter from "./info.router"
import personRouter from "./person.router"
import emailRouter from "./email.router"

const router = express.Router();

function routerApi(app){
  app.use("/api", router)
  router.use("/students", studentsRouter)
  router.use("/teams", teamsRouter)
  router.use("/careers", careersRouter)
  router.use("/info", infoRouter)
  router.use("/person", personRouter)
  router.use("/sendEmail", emailRouter)
}

export default routerApi;