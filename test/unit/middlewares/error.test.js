/* eslint-disable no-unused-expressions */
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const faker = require('faker')
const status = require('http-status')
const error = require('src/middlewares/error')

chai.use(sinonChai)

describe('Middlewares: Error', () => {
  beforeEach(() => {
    this.err = {
      name: faker.lorem.word(),
      description: faker.lorem.sentence()
    }
    this.res = {}
    this.nextStub = sinon.stub()
  })

  describe('when processing a known error', () => {
    it('sets response with error status code', () => {
      this.err.statusCode = status.NOT_FOUND
      error(this.err, null, this.res, this.nextStub)
      expect(this.res.statusCode).to.equal(this.err.statusCode)
    })
    it('sets error output content', () => {
      error(this.err, null, this.res, this.nextStub)
      expect(this.res.locals).to.deep.equal(this.err)
    })
    it('continues the request pipeline', () => {
      error(this.err, null, this.res, this.nextStub)
      expect(this.nextStub).to.have.been.called
    })
  })

  describe('when processing an unknown error', () => {
    it('sets response status code to internal server error', () => {
      error(this.err, null, this.res, this.nextStub)
      expect(this.res.statusCode).to.equal(status.INTERNAL_SERVER_ERROR)
    })
    it('continues the request pipeline', () => {
      error(this.err, null, this.res, this.nextStub)
      expect(this.nextStub).to.have.been.called
    })
  })
})
