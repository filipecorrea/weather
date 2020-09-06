const httpStatus = require('http-status')
const localization = require('../localization')

class NotFoundError extends Error {
  constructor () {
    super(localization.errors.notFound())
    this.name = this.constructor.name
    this.statusCode = httpStatus.NOT_FOUND
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = NotFoundError
