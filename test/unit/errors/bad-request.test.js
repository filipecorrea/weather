import { expect } from 'chai'
import status from 'http-status'
import localization from '../../../src/localization'
import BadRequestError from '../../../src/errors/bad-request'

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
