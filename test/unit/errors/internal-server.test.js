import { expect } from 'chai'
import status from 'http-status'
import localization from '../../../src/localization'
import InternalServerError from '../../../src/errors/internal-server'

describe('Errors: Internal Server', () => {
  const error = new InternalServerError()

  it('extends from Error', () => {
    expect(error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(error.name).to.be.equal('InternalServerError')
  })

  it('sets error message', () => {
    expect(error.message).to.be.equal(localization.errors.internalServer())
  })

  it('sets error status code to not found', () => {
    expect(error.statusCode).to.be.equal(status.INTERNAL_SERVER_ERROR)
  })
})
