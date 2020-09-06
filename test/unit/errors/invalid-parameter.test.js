import { expect } from 'chai'
import faker from 'faker'
import localization from '../../../src/localization'
import InvalidParameterError from '../../../src/errors/invalid-parameter'

const randomParameter = faker.lorem.word()
const randomType = faker.lorem.word()

describe('Errors: Invalid Parameter', () => {
  beforeEach(() => {
    this.error = new InvalidParameterError(randomParameter, randomType)
  })

  it('extends from Error', () => {
    expect(this.error).to.be.instanceof(Error)
  })

  it('sets error name from constructor', () => {
    expect(this.error.name).to.be.equal('InvalidParameterError')
  })

  it('sets error message', () => {
    expect(this.error.message).to.be.equal(localization.errors.badRequest())
  })

  it('sets error description', () => {
    expect(this.error.description).to.be.equal(localization.errors.invalidParameter({ parameter: randomParameter, type: randomType }))
  })
})
