const status = require('http-status')
const localization = require('src/localization')

class InternalServerError extends Error {
  constructor () {
    super(localization.errors.internalServer())
    this.name = this.constructor.name
    this.statusCode = status.INTERNAL_SERVER_ERROR
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = InternalServerError
