import { expect } from 'chai'
import status from 'http-status'
import localization from '../../../src/localization'
import NotFoundError from '../../../src/errors/not-found'

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
