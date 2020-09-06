/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import faker from 'faker'
chai.use(require('sinon-chai'))
const responseMiddleware = require('../../../src/middlewares/response')

describe('Middlewares: Response', () => {
  beforeEach(() => {
    this.req = {}
    this.res = {
      locals: {
        id: faker.random.number(),
        description: faker.lorem.sentence()
      },
      send: sinon.spy()
    }
    this.nextStub = sinon.stub()
  })

  describe('when processing response with data', () => {
    it('doesn\'t continues the request pipeline', () => {
      responseMiddleware(null, this.res, this.nextStub)
      expect(this.nextStub).to.not.have.been.called
    })
    it('responds the request', () => {
      responseMiddleware(null, this.res, this.nextStub)
      expect(this.res.send).to.have.been.called
    })
  })

  describe('when processing response without data', () => {
    it('doesn\'t continues the request pipeline', () => {
      this.res.locals = {}
      responseMiddleware(null, this.res, this.nextStub)
      expect(this.nextStub).to.not.have.been.called
    })
    it('responds the request', () => {
      responseMiddleware(null, this.res, this.nextStub)
      expect(this.res.send).to.have.been.called
    })
  })
})
