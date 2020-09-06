/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import faker from 'faker'
chai.use(require('sinon-chai'))
const requestMiddleware = require('../../../src/middlewares/request')

describe('Middlewares: Request', () => {
  beforeEach(() => {
    this.req = {
      path: faker.lorem.word(),
      body: {
        id: faker.random.number(),
        description: faker.lorem.sentence()
      }
    }
    this.res = {}
    this.nextStub = sinon.stub()
  })

  describe('when processing request', () => {
    it('continues the request pipeline', () => {
      requestMiddleware(this.req, this.res, this.nextStub)
      expect(this.nextStub).to.have.been.called
    })
  })
})
