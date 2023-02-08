const express = require("express");

const teamsRouter = require("./teams.router")
const usersRouter = require("./users.router")

const router = express.Router();

function routerApi(app){
  app.use("/api", router)
  router.use("/teams", teamsRouter)
  router.use("/users", usersRouter)
}

module.exports = routerApi;