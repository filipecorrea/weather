/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import faker from 'faker'
import status from 'http-status'
import error from '../../../src/middlewares/error'

chai.use(sinonChai)

describe('Middlewares: Error', () => {
  beforeEach(() => {
    this.err = {
      name: faker.lorem.word(),
      description: faker.lorem.sentence()
    }
    this.res = {}
    this.next = sinon.stub()
  })

  describe('when processing a known error', () => {
    it('sets response with error status code', () => {
      this.err.statusCode = status.NOT_FOUND
      error(this.err, null, this.res, this.next)
      expect(this.res.statusCode).to.equal(this.err.statusCode)
    })
    it('sets error output content', () => {
      error(this.err, null, this.res, this.next)
      expect(this.res.locals).to.deep.equal(this.err)
    })
    it('continues the request pipeline', () => {
      error(this.err, null, this.res, this.next)
      expect(this.next).to.have.been.called
    })
  })

  describe('when processing an unknown error', () => {
    it('sets response status code to internal server error', () => {
      error(this.err, null, this.res, this.next)
      expect(this.res.statusCode).to.equal(status.INTERNAL_SERVER_ERROR)
    })
    it('continues the request pipeline', () => {
      error(this.err, null, this.res, this.next)
      expect(this.next).to.have.been.called
    })
  })
})
