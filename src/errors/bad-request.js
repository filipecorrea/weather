const httpStatus = require('http-status')
const localization = require('../localization')

class BadRequestError extends Error {
  constructor (message) {
    super(localization.errors.badRequest())
    this.name = this.constructor.name
    this.statusCode = httpStatus.BAD_REQUEST
    this.description = message
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = BadRequestError
