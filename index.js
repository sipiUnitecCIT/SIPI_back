const express = require("express")
const routerApi = require("./routes")
const config = require("./config/config")

const app = express()

const PORT = config.port;

routerApi(app)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})