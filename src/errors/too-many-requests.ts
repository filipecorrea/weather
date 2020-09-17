import httpStatus from 'http-status'
import localization from '../localization'

export default class TooManyRequestsError extends Error {
  private statusCode: number
  private description: string

  constructor (message: string) {
    super(localization.errors.tooManyRequests())
    this.name = this.constructor.name
    this.statusCode = httpStatus.TOO_MANY_REQUESTS
    this.description = message
    Error.captureStackTrace(this, this.constructor)
  }
}
