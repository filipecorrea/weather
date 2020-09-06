import httpStatus from 'http-status'
const logger = require('../logger')

function error (err, req, res, next) {
  const unknownError = !err.statusCode

  if (unknownError) logger.error('Unknown', err)

  res.statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR
  res.locals = err

  next(null, req, res)
}

module.exports = error
