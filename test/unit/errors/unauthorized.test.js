const chai = require('chai')
const expect = chai.expect
const httpStatus = require('http-status')
const UnauthorizedError = require('../../../src/errors/unauthorized')
const localization = require('../../../src/localization')

describe('Errors: Unauthorized', () => {
  beforeEach(() => {
    this.error = new UnauthorizedError()
  })

  it('extends from Error', () => {
    expect(this.error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(this.error.name).to.be.equal('UnauthorizedError')
  })

  it('sets error message', () => {
    expect(this.error.message).to.be.equal(localization.errors.unauthorized())
  })

  it('sets error status code to not found', () => {
    expect(this.error.statusCode).to.be.equal(httpStatus.UNAUTHORIZED)
  })
})
