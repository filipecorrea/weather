const chai = require('chai')
const expect = chai.expect
const httpStatus = require('http-status')
const TooManyRequestsError = require('src/errors/too-many-requests')
const localization = require('src/localization')

describe('Errors: Too Many Requests', () => {
  beforeEach(() => {
    this.error = new TooManyRequestsError()
  })

  it('extends from Error', () => {
    expect(this.error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(this.error.name).to.be.equal('TooManyRequestsError')
  })

  it('sets error message', () => {
    expect(this.error.message).to.be.equal(localization.errors.tooManyRequests())
  })

  it('sets error status code to not found', () => {
    expect(this.error.statusCode).to.be.equal(httpStatus.TOO_MANY_REQUESTS)
  })
})
