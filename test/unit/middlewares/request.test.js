/* eslint-disable no-unused-expressions */
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const faker = require('faker')
const requestMiddleware = require('src/middlewares/request')

chai.use(sinonChai)

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
    this.next = sinon.stub()
  })

  describe('when processing request', () => {
    it('continues the request pipeline', () => {
      requestMiddleware(this.req, this.res, this.next)
      expect(this.next).to.have.been.called
    })
  })
})
