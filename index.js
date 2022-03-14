const express = require("express")
const pool = require("./libs/postgres")

const app = express()

const PORT = 3000

app.get("/", async (request, response) => {
  try {
    const dbResponse = await pool.query("SELECT * FROM public.teams")
    response.json({
      teams: dbResponse.rows
    })

  } catch (error) {
    response.json({ error })
  }
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})