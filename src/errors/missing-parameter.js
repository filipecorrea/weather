import httpStatus from 'http-status'
const localization = require('../localization')

class MissingParameterError extends Error {
  constructor (parameter) {
    super(localization.errors.badRequest())
    this.name = this.constructor.name
    this.statusCode = httpStatus.BAD_REQUEST
    this.description = localization.errors.missingParameter({ parameter })
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = MissingParameterError
