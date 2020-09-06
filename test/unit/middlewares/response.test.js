/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import faker from 'faker'
import response from '../../../src/middlewares/response'

chai.use(sinonChai)

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
    this.next = sinon.stub()
  })

  describe('when processing response with data', () => {
    it('doesn\'t continues the request pipeline', () => {
      response(null, this.res, this.next)
      expect(this.next).to.not.have.been.called
    })
    it('responds the request', () => {
      response(null, this.res, this.next)
      expect(this.res.send).to.have.been.called
    })
  })

  describe('when processing response without data', () => {
    it('doesn\'t continues the request pipeline', () => {
      this.res.locals = {}
      response(null, this.res, this.next)
      expect(this.next).to.not.have.been.called
    })
    it('responds the request', () => {
      response(null, this.res, this.next)
      expect(this.res.send).to.have.been.called
    })
  })
})
