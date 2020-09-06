import httpStatus from 'http-status'
import localization from '../localization'

export default class BadRequestError extends Error {
  private statusCode: number
  private description: string

  constructor (message: string) {
    super(localization.errors.badRequest())
    this.name = this.constructor.name
    this.statusCode = httpStatus.BAD_REQUEST
    this.description = message
    Error.captureStackTrace(this, this.constructor)
  }
}
