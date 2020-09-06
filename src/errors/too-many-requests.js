import httpStatus from 'http-status'
const localization = require('../localization')

class TooManyRequestsError extends Error {
  constructor (message) {
    super(localization.errors.tooManyRequests())
    this.name = this.constructor.name
    this.statusCode = httpStatus.TOO_MANY_REQUESTS
    this.description = message
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = TooManyRequestsError
