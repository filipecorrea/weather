/* eslint-disable no-unused-expressions */
const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
chai.use(require('sinon-chai'))
const cities = require('data/cities')
const weather = require('src/services/weather')
const get = require('src/routes/weather/get')
const BadRequestError = require('src/errors/bad-request')
const NotFoundError = require('src/errors/not-found')

describe('Routes: GET cities/{:id}/weather', () => {
  this.getWeatherServiceStub = sinon.stub(weather, 'get')

  beforeEach(() => {
    this.req = { params: { id: cities[0].id } }
    this.res = {}
    this.nextStub = sinon.stub()
  })

  describe('when the request is successful', () => {
    beforeEach(async () => {
      this.mockedData = {
        type: 'Clouds',
        type_description: 'broken clouds',
        sunrise: 1599281303,
        sunset: 1599328893,
        temp: 295.63,
        temp_min: 295.15,
        temp_max: 295.93,
        pressure: 1018,
        humidity: 56,
        clouds_percent: 75,
        wind_speed: 2.6
      }
      this.getWeatherServiceStub.returns(Promise.resolve(this.mockedData))

      return await get(this.req, this.res, this.nextStub)
    })

    it('sets res.locals to expected response', () => {
      expect(this.res.locals).to.be.deep.equal(this.mockedData)
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
  })

  describe('when the service response is not successful', () => {
    beforeEach(async () => {
      this.getWeatherServiceStub.returns(Promise.reject(new NotFoundError()))

      return await get(this.req, this.res, this.nextStub)
    })

    it('throws not found error', () => {
      expect(this.res.locals).to.be.undefined
      expect(this.nextStub).to.have.been.called
    })
  })
})
