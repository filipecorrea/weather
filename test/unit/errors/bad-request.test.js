const chai = require('chai')
const status = require('http-status')
const localization = require('src/localization')
const BadRequestError = require('src/errors/bad-request')

const expect = chai.expect

describe('Errors: Bad Request', () => {
  const error = new BadRequestError()

  it('extends from Error', () => {
    expect(error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(error.name).to.be.equal('BadRequestError')
  })

  it('sets error message', () => {
    expect(error.message).to.be.equal(localization.errors.badRequest())
  })

  it('sets error status code to not found', () => {
    expect(error.statusCode).to.be.equal(status.BAD_REQUEST)
  })
})
