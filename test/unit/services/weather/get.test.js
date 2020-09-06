/* eslint-disable no-unused-expressions */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const axios = require('axios')
const get = require('src/services/weather/get')
const UnauthorizedError = require('src/errors/unauthorized')
const NotFoundError = require('src/errors/not-found')
const TooManyRequestsError = require('src/errors/too-many-requests')
const InternalServerError = require('src/errors/internal-server')

const expect = chai.expect

chai.use(sinonChai)

describe('Services: weather get', () => {
  const openWeatherServiceStub = sinon.stub(axios, 'get')

  let mockedAPIResponse
  let expectedResponse

  describe('when the request is successful', () => {
    beforeEach(async () => {
      mockedAPIResponse = {
        data: {
          coord: { lon: 8.46, lat: 49.49 },
          weather: [{
            id: 803,
            main: 'Clouds',
            description: 'broken clouds',
            icon: '04d'
          }],
          base: 'stations',
          main: {
            temp: 295.29,
            feels_like: 294.89,
            temp_min: 295.15,
            temp_max: 295.37,
            pressure: 1018,
            humidity: 53
          },
          visibility: 10000,
          wind: { speed: 1.5, deg: 0 },
          clouds: { all: 75 },
          dt: 1599317370,
          sys: {
            type: 1,
            id: 1291,
            country: 'DE',
            sunrise: 1599281303,
            sunset: 1599328893
          },
          timezone: 7200,
          id: 2873891,
          name: 'Mannheim',
          cod: 200
        }
      }

      expectedResponse = {
        type: 'Clouds',
        type_description: 'broken clouds',
        sunrise: 1599281303,
        sunset: 1599328893,
        temp: 295.29,
        temp_min: 295.15,
        temp_max: 295.37,
        pressure: 1018,
        humidity: 53,
        clouds_percent: 75,
        wind_speed: 1.5
      }

      openWeatherServiceStub.returns(Promise.resolve(mockedAPIResponse))
    })

    it('returns expected response', async () => {
      const response = await get(2873891) // Mannheim
      expect(response).to.be.deep.equal(expectedResponse)
    })
  })

  describe('when the request is not successful', () => {
    it('throws unauthorized error', async () => {
      mockedAPIResponse = { response: { data: { cod: 401 } } }
      openWeatherServiceStub.returns(Promise.reject(mockedAPIResponse))
      get(2873891).catch(error => expect(typeof error).to.be.equal(UnauthorizedError))
    })

    it('throws not found error', async () => {
      mockedAPIResponse = { response: { data: { cod: 404 } } }
      openWeatherServiceStub.returns(Promise.reject(mockedAPIResponse))
      get(2873891).catch(error => expect(typeof error).to.be.equal(NotFoundError))
    })

    it('throws too many requests error', async () => {
      mockedAPIResponse = { response: { data: { cod: 429 } } }
      openWeatherServiceStub.returns(Promise.reject(mockedAPIResponse))
      get(2873891).catch(error => expect(typeof error).to.be.equal(TooManyRequestsError))
    })

    it('throws internal server error', async () => {
      mockedAPIResponse = { response: { data: { cod: 500 } } }
      openWeatherServiceStub.returns(Promise.reject(mockedAPIResponse))
      get(2873891).catch(error => expect(typeof error).to.be.equal(InternalServerError))
    })
  })
})
