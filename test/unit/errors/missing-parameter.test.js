import { expect } from 'chai'
import status from 'http-status'
import faker from 'faker'
import localization from '../../../src/localization'
import MissingParameterError from '../../../src/errors/missing-parameter'

const randomParameter = faker.lorem.word()

describe('Errors: Missing Parameter', () => {
  const error = new MissingParameterError(randomParameter)

  it('extends from Error', () => {
    expect(error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(error.name).to.be.equal('MissingParameterError')
  })

  it('sets error message', () => {
    expect(error.message).to.be.equal(localization.errors.badRequest())
  })

  it('sets error description', () => {
    expect(error.description).to.be.equal(localization.errors.missingParameter({ parameter: randomParameter }))
  })

  it('sets error status code to bad request', () => {
    expect(error.statusCode).to.be.equal(status.BAD_REQUEST)
  })
})
