/* eslint-disable no-unused-expressions */
import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import cities from '../../../../data/cities'
import get from '../../../../src/routes/weather/get'
import weatherService from '../../../../src/services/weather'
import BadRequestError from '../../../../src/errors/bad-request'
import NotFoundError from '../../../../src/errors/not-found'

chai.use(sinonChai)

describe('Routes: GET cities/{:id}/weather', () => {
  const weatherServiceStub = sinon.stub(weatherService, 'get')

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
  let next

  beforeEach(() => {
    req = { params: { id: cities[0].id } }
    res = {}
    next = sinon.stub()
  })

  describe('when the request is successful', () => {
    beforeEach(async () => {
      weatherServiceStub.returns(Promise.resolve(mockedData))
      return await get(req, res, next)
    })

    it('sets res.locals to expected response', () => {
      expect(res.locals).to.be.deep.equal(mockedData)
      expect(next).to.have.been.called
    })
  })

  describe('when the request is not successful', () => {
    it('throws bad request error when missing id', () => {
      req = { params: {} }
      expect(() => get(req, res, next)).to.throw(BadRequestError)
    })

    it('throws bad request error when id is invalid', () => {
      req = { params: { id: 0 } }
      expect(() => get(req, res, next)).to.throw(BadRequestError)
    })
  })

  describe('when the service response is not successful', () => {
    beforeEach(async () => {
      weatherServiceStub.returns(Promise.reject(new NotFoundError()))
      return await get(req, res, next)
    })

    it('throws not found error', () => {
      expect(res.locals).to.be.undefined
      expect(next).to.have.been.called
    })
  })
})
