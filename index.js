const express = require("express")
const cors = require("cors")
const routerApi = require("./routes")
const config = require("./config/config")
const { logErrors, boomErrorHandler, errorHandler } = require("./middlewares/error.handler")
const app = express()

const PORT = config.port;

app.use(express.json())

// const whiteList = [`http://localhost:${PORT}`]

// const options = {
//   origin: (origin, callback)=>{
//     if(whiteList.includes(origin)){
//       callback(null, true)
//     }else{
//       callback(new Error("Origin not allowed!!!"))
//     }
//   }  
// }

app.use(cors())

routerApi(app)


//No cambiar el orden de los middlewares
app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})