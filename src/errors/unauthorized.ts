import httpStatus from 'http-status'
import localization from '../localization'

export default class UnauthorizedError extends Error {
  private statusCode: number
  private description: string

  constructor (message: string) {
    super(localization.errors.unauthorized())
    this.name = this.constructor.name
    this.statusCode = httpStatus.UNAUTHORIZED
    this.description = message
    Error.captureStackTrace(this, this.constructor)
  }
}
