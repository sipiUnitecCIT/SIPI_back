import createHttpError from "http-errors"
import { ZodError } from "zod"

export function logErrors(error, request, response, next) {
  console.log("logErrors")
  console.log("")
  console.error(error)
  console.log("")
  next(error)
}

export function zodErrorHandler(error, request, response, next) {
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

export function httpErrorHandler(error, request, response, next) {
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

export function errorHandler(error, request, response, next) {
  console.log("Error")

  const httpError = createHttpError.InternalServerError()
  const { name, statusCode, message } = httpError

  response.status(statusCode).json({
    name, statusCode, message
  })
}