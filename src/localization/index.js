/* eslint-disable no-template-curly-in-string */

const compile = require('../localization/compile')

module.exports = compile({
  errors: {
    badRequest: 'Bad request',
    unauthorized: 'Unauthorized',
    tooManyRequests: 'Too many requests',
    missingParameter: 'Missing required parameter \'${parameter}\'',
    invalidParameter: 'Parameter \'${parameter}\' should be ${type}',
    notFound: 'Not found',
    internalServer: 'Internal server error'
  }
})
