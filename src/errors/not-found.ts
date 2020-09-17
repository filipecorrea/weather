import httpStatus from 'http-status'
import localization from '../localization'

export default class NotFoundError extends Error {
  private statusCode: number

  constructor () {
    super(localization.errors.notFound())
    this.name = this.constructor.name
    this.statusCode = httpStatus.NOT_FOUND
    Error.captureStackTrace(this, this.constructor)
  }
}
