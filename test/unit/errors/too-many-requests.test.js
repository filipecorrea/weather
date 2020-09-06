const chai = require('chai')
const status = require('http-status')
const localization = require('src/localization')
const TooManyRequestsError = require('src/errors/too-many-requests')

const expect = chai.expect

describe('Errors: Too Many Requests', () => {
  const error = new TooManyRequestsError()

  it('extends from Error', () => {
    expect(error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(error.name).to.be.equal('TooManyRequestsError')
  })

  it('sets error message', () => {
    expect(error.message).to.be.equal(localization.errors.tooManyRequests())
  })

  it('sets error status code to not found', () => {
    expect(error.statusCode).to.be.equal(status.TOO_MANY_REQUESTS)
  })
})
