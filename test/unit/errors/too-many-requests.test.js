import { expect } from 'chai'
import httpStatus from 'http-status'
import localization from '../../../src/localization'

const TooManyRequestsError = require('../../../src/errors/too-many-requests')

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
