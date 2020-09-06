import { expect } from 'chai'
import status from 'http-status'
import faker from 'faker'
import localization from '../../../src/localization'
import InvalidParameterError from '../../../src/errors/invalid-parameter'

const randomParameter = faker.lorem.word()
const randomType = faker.lorem.word()

describe('Errors: Invalid Parameter', () => {
  const error = new InvalidParameterError(randomParameter, randomType)

  it('extends from Error', () => {
    expect(error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(error.name).to.be.equal('InvalidParameterError')
  })

  it('sets error message', () => {
    expect(error.message).to.be.equal(localization.errors.badRequest())
  })

  it('sets error description', () => {
    expect(error.description).to.be.equal(localization.errors.invalidParameter({ parameter: randomParameter, type: randomType }))
  })

  it('sets error status code to bad request', () => {
    expect(error.statusCode).to.be.equal(status.BAD_REQUEST)
  })
})
