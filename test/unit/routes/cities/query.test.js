/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import cities from '../../../../data/cities'
import query from '../../../../src/routes/cities/query'
import BadRequestError from '../../../../src/errors/bad-request'

chai.use(sinonChai)

describe('Routes: GET cities', () => {
  beforeEach(() => {
    this.req = {
      query: {
        lat: cities[0].coord.lat,
        lon: cities[0].coord.lon
      }
    }
    this.res = {}
    this.next = sinon.stub()
  })

  describe('when the request is successful', () => {
    beforeEach(() => {
      return query(this.req, this.res, this.next)
    })

    it('sets res.locals to expected response', () => {
      expect(this.res.locals.length).to.be.greaterThan(0)
      expect(this.res.locals[0]).to.be.deep.equal({
        id: cities[0].id,
        name: cities[0].name
      })
    })

    it('continues the request pipeline', () => {
      expect(this.next).to.have.been.called
    })
  })

  describe('when the request is not successful', () => {
    it('throws bad request error when missing lat and lon', () => {
      this.req = { query: {} }
      expect(() => query(this.req, this.res, this.next)).to.throw(BadRequestError)
    })

    it('throws bad request error when missing lat', () => {
      this.req = { query: { lon: 0 } }
      expect(() => query(this.req, this.res, this.next)).to.throw(BadRequestError)
    })

    it('throws bad request error when missing lon', () => {
      this.req = { query: { lat: 0 } }
      expect(() => query(this.req, this.res, this.next)).to.throw(BadRequestError)
    })

    it('throws bad request error when lat is invalid', () => {
      this.req = { query: { lat: 100, lon: 0 } }
      expect(() => query(this.req, this.res, this.next)).to.throw(BadRequestError)
    })

    it('throws bad request error when lon is invalid', () => {
      this.req = { query: { lat: 90, lon: 200 } }
      expect(() => query(this.req, this.res, this.next)).to.throw(BadRequestError)
    })
  })
})
