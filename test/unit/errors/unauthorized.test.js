import { expect } from 'chai'
import httpStatus from 'http-status'
import localization from '../../../src/localization'
import UnauthorizedError from '../../../src/errors/unauthorized'

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
