const chai = require('chai')
const expect = chai.expect
const httpStatus = require('http-status')
const BadRequestError = require('../../../src/errors/bad-request')
const localization = require('../../../src/localization')

describe('Errors: Bad Request', () => {
  beforeEach(() => {
    this.error = new BadRequestError()
  })

  it('extends from Error', () => {
    expect(this.error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(this.error.name).to.be.equal('BadRequestError')
  })

  it('sets error message', () => {
    expect(this.error.message).to.be.equal(localization.errors.badRequest())
  })

  it('sets error status code to not found', () => {
    expect(this.error.statusCode).to.be.equal(httpStatus.BAD_REQUEST)
  })
})
