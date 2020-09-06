const httpStatus = require('http-status')
const localization = require('../localization')

class UnauthorizedError extends Error {
  constructor (message) {
    super(localization.errors.unauthorized())
    this.name = this.constructor.name
    this.statusCode = httpStatus.UNAUTHORIZED
    this.description = message
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = UnauthorizedError
