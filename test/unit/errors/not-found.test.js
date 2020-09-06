const chai = require('chai')
const status = require('http-status')
const localization = require('src/localization')
const NotFoundError = require('src/errors/not-found')

const expect = chai.expect

describe('Errors: Not Found', () => {
  const error = new NotFoundError()

  it('extends from Error', () => {
    expect(error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(error.name).to.be.equal('NotFoundError')
  })

  it('sets error message', () => {
    expect(error.message).to.be.equal(localization.errors.notFound())
  })

  it('sets error status code to not found', () => {
    expect(error.statusCode).to.be.equal(status.NOT_FOUND)
  })
})
