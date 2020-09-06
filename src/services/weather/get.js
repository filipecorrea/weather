import axios from 'axios'
import Weather from '../../models/weather'

const config = require('../../config/keys')
const UnauthorizedError = require('../../errors/unauthorized')
const NotFoundError = require('../../errors/not-found')
const TooManyRequestsError = require('../../errors/too-many-requests')
const InternalServerError = require('../../errors/internal-server')

module.exports = id => {
  return axios
    .get(config.openweatherAPI, { params: { id, appid: config.openweatherAPIKey } })
    .then(response => {
      return new Weather(
        response.data.weather[0].main,
        response.data.weather[0].description,
        response.data.sys.sunrise,
        response.data.sys.sunset,
        response.data.main.temp,
        response.data.main.temp_min,
        response.data.main.temp_max,
        response.data.main.pressure,
        response.data.main.humidity,
        response.data.clouds.all,
        response.data.wind.speed
      )
    })
    .catch(error => {
      switch (parseInt(error.response.data.cod)) {
        case 401: throw new UnauthorizedError(error.response.data.message)
        case 404: throw new NotFoundError()
        case 429: throw new TooManyRequestsError(error.response.data.message)
        default: throw new InternalServerError()
      }
    })
}
