import httpStatus from 'http-status'
import localization from '../localization'

class InternalServerError extends Error {
  constructor () {
    super(localization.errors.internalServer())
    this.name = this.constructor.name
    this.statusCode = httpStatus.INTERNAL_SERVER_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = InternalServerError
