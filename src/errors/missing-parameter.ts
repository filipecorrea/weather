import httpStatus from 'http-status'
import localization from '../localization'

export default class MissingParameterError extends Error {
  private statusCode: number
  private description: string

  constructor (parameter: string) {
    super(localization.errors.badRequest())
    this.name = this.constructor.name
    this.statusCode = httpStatus.BAD_REQUEST
    this.description = localization.errors.missingParameter({ parameter })
    Error.captureStackTrace(this, this.constructor)
  }
}
