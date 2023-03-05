const createHttpError = require("http-errors")
const { ZodError } = require("zod")

function logErrors(error, request, response, next) {
  console.log("logErrors")
  console.log("")
  console.error(error)
  console.log("")
  next(error)
}

function zodErrorHandler(error, request, response, next) {
  console.log("ZodError")

  if (error instanceof ZodError) {
    const httpError = new createHttpError.BadRequest()

    const { issues } = error
    const { statusCode, name, message } = httpError

    response.status(statusCode).json({
      name, statusCode, issues, message,
    })
  } else {
    next(error)
  }
}

function httpErrorHandler(error, request, response, next) {
  console.log("HttpError")

  if (createHttpError.isHttpError(error)) {
    const { name, statusCode, message } = error

    response.status(statusCode).json({
      name, statusCode, message
    })
  } else {
    next(error)
  }
}

function errorHandler(error, request, response, next) {
  console.log("Error")

  const httpError = createHttpError.InternalServerError()
  const { name, statusCode, message } = httpError

  response.status(statusCode).json({
    name, statusCode, message
  })
}

module.exports = { logErrors, zodErrorHandler, httpErrorHandler, errorHandler }