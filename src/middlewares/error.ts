import { Request, Response } from 'express'
import status from 'http-status'
const logger = require('../logger')

export default function error (err, req: Request, res: Response, next: Function) {
  const unknownError = !err.statusCode

  if (unknownError) logger.error('Unknown', err)

  res.statusCode = err.statusCode || status.INTERNAL_SERVER_ERROR
  res.locals = err

  next(null, req, res)
}
