import { expect } from 'chai'
import httpStatus from 'http-status'
import localization from '../../../src/localization'
import NotFoundError from '../../../src/errors/not-found'

describe('Errors: Not Found', () => {
  beforeEach(() => {
    this.error = new NotFoundError()
  })

  it('extends from Error', () => {
    expect(this.error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(this.error.name).to.be.equal('NotFoundError')
  })

  it('sets error message', () => {
    expect(this.error.message).to.be.equal(localization.errors.notFound())
  })

  it('sets error status code to not found', () => {
    expect(this.error.statusCode).to.be.equal(httpStatus.NOT_FOUND)
  })
})
