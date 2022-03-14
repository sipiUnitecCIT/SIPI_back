const express = require("express");
const teamsRouter = require("./teams.router")

const router = express.Router();

function routerApi(app){
  app.use("/api/v1", router)
  router.use("/teams", teamsRouter)
}

module.exports = routerApi;