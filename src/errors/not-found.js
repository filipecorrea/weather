const status = require('http-status')
const localization = require('src/localization')

class NotFoundError extends Error {
  constructor () {
    super(localization.errors.notFound())
    this.name = this.constructor.name
    this.statusCode = status.NOT_FOUND
    Error.captureStackTrace(this, this.constructor)
  }
}

module.exports = NotFoundError
