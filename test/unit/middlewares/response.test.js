/* eslint-disable no-unused-expressions */
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const faker = require('faker')
const responseMiddleware = require('src/middlewares/response')

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
      responseMiddleware(null, this.res, this.next)
      expect(this.next).to.not.have.been.called
    })
    it('responds the request', () => {
      responseMiddleware(null, this.res, this.next)
      expect(this.res.send).to.have.been.called
    })
  })

  describe('when processing response without data', () => {
    it('doesn\'t continues the request pipeline', () => {
      this.res.locals = {}
      responseMiddleware(null, this.res, this.next)
      expect(this.next).to.not.have.been.called
    })
    it('responds the request', () => {
      responseMiddleware(null, this.res, this.next)
      expect(this.res.send).to.have.been.called
    })
  })
})
