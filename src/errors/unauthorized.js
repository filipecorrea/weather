const status = require('http-status')
const localization = require('src/localization')

class UnauthorizedError extends Error {
  constructor (message) {
    super(localization.errors.unauthorized())
    this.name = this.constructor.name
    this.statusCode = status.UNAUTHORIZED
    this.description = message
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = UnauthorizedError
