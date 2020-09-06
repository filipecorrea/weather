const chai = require('chai')
const status = require('http-status')
const localization = require('src/localization')
const UnauthorizedError = require('src/errors/unauthorized')

const expect = chai.expect

describe('Errors: Unauthorized', () => {
  const error = new UnauthorizedError()

  it('extends from Error', () => {
    expect(error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(error.name).to.be.equal('UnauthorizedError')
  })

  it('sets error message', () => {
    expect(error.message).to.be.equal(localization.errors.unauthorized())
  })

  it('sets error status code to not found', () => {
    expect(error.statusCode).to.be.equal(status.UNAUTHORIZED)
  })
})
