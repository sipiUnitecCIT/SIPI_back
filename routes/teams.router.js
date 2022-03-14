const express = require("express");
const pool = require("../libs/postgres")
const TeamsService = require("../services/teams.service")

const router = express.Router();
const service = new TeamsService();

router.get("/", async (request, response) => {
  try {
    
    const teams = await service.find()
    
    response.json({
      teams,
      greeting: "hello world!",
    })

  } catch (error) {
    response.json({ error })
  }
})

module.exports = router;