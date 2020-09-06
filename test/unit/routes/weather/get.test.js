/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import cities from '../../../../data/cities'
import get from '../../../../src/routes/weather/get'
import BadRequestError from '../../../../src/errors/bad-request'
import NotFoundError from '../../../../src/errors/not-found'

const weather = require('../../../../src/services/weather')

chai.use(sinonChai)

let getWeatherServiceStub
const mockedData = {
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

let req
let res
let nextStub

describe('Routes: GET cities/{:id}/weather', () => {
  getWeatherServiceStub = sinon.stub(weather, 'get')

  beforeEach(() => {
    req = { params: { id: cities[0].id } }
    res = {}
    nextStub = sinon.stub()
  })

  describe('when the request is successful', () => {
    beforeEach(async () => {
      getWeatherServiceStub.returns(Promise.resolve(mockedData))

      return await get(req, res, nextStub)
    })

    it('sets res.locals to expected response', () => {
      expect(res.locals).to.be.deep.equal(mockedData)
      expect(nextStub).to.have.been.called
    })
  })

  describe('when the request is not successful', () => {
    it('throws bad request error when missing id', () => {
      req = { params: {} }
      expect(() => get(req, res, nextStub)).to.throw(BadRequestError)
    })

    it('throws bad request error when id is invalid', () => {
      req = { params: { id: 0 } }
      expect(() => get(req, res, nextStub)).to.throw(BadRequestError)
    })
  })

  describe('when the service response is not successful', () => {
    beforeEach(async () => {
      getWeatherServiceStub.returns(Promise.reject(new NotFoundError()))

      return await get(req, res, nextStub)
    })

    it('throws not found error', () => {
      expect(res.locals).to.be.undefined
      expect(nextStub).to.have.been.called
    })
  })
})
