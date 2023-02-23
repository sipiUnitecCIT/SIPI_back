const express = require("express");

const studentsRouter = require("./students.router");
const teamsRouter = require("./teams.router");
const careersRouter = require("./careers.router");

const router = express.Router();

function routerApi(app){
  app.use("/api", router)
  router.use("/students", studentsRouter)
  router.use("/teams", teamsRouter)
  router.use("/careers", careersRouter)
}

module.exports = routerApi;