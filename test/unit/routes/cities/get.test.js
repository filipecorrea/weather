/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import cities from '../../../../data/cities'
import BadRequestError from '../../../../src/errors/bad-request'
import NotFoundError from '../../../../src/errors/not-found'

const get = require('../../../../src/routes/cities/get')

chai.use(require('sinon-chai'))

describe('Routes: GET cities/{:id}', () => {
  beforeEach(() => {
    this.req = { params: { id: cities[0].id } }
    this.res = {}
    this.nextStub = sinon.stub()
  })

  describe('when the request is successful', () => {
    beforeEach(() => {
      return get(this.req, this.res, this.nextStub)
    })

    it('sets res.locals to expected response', () => {
      expect(this.res.locals).to.be.deep.equal({
        id: this.req.params.id,
        name: cities[0].name,
        lat: cities[0].coord.lat,
        lon: cities[0].coord.lon
      })
    })

    it('continues the request pipeline', () => {
      expect(this.nextStub).to.have.been.called
    })
  })

  describe('when the request is not successful', () => {
    it('throws bad request error when missing id', () => {
      this.req = { params: {} }
      expect(() => get(this.req, this.res, this.nextStub)).to.throw(BadRequestError)
    })

    it('throws bad request error when id is invalid', () => {
      this.req = { params: { id: 0 } }
      expect(() => get(this.req, this.res, this.nextStub)).to.throw(BadRequestError)
    })

    it('throws not found error', () => {
      this.req = { params: { id: 1 } }
      expect(() => get(this.req, this.res, this.nextStub)).to.throw(NotFoundError)
    })
  })
})
