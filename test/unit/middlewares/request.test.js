/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import faker from 'faker'
import request from '../../../src/middlewares/request'

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
      request(this.req, this.res, this.next)
      expect(this.next).to.have.been.called
    })
  })
})
