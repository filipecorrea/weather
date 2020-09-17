import httpStatus from 'http-status'
import localization from '../localization'

export default class InternalServerError extends Error {
  private statusCode: number

  constructor () {
    super(localization.errors.internalServer())
    this.name = this.constructor.name
    this.statusCode = httpStatus.INTERNAL_SERVER_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}
