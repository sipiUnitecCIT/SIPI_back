const express = require("express")
const routerApi = require("./routes")
const config = require("./config/config")
const { logErrors, boomErrorHandler, errorHandler } = require("./middlewares/error.handler")
const app = express()

const PORT = config.port;

app.use(express.json())

routerApi(app)

//No cambiar el orden de los middlewares
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})