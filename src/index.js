import express from "express"
import cors from "cors"
import routerApi from "./routes"
import config from "./config"
import { logErrors, zodErrorHandler, httpErrorHandler, errorHandler } from "./middlewares/error.handler"

const app = express()

const PORT = config.port;

app.use(cors())
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

app.get("/", (request, response) => {
  response.json({
    message: "Hello World 😎!. Let me introduce you all 'The SIPI API Rest', deployed from VERCEL! 💚"
  })
})

routerApi(app)

//No cambiar el orden de los middlewares
app.use(logErrors)
app.use(zodErrorHandler)
app.use(httpErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
})