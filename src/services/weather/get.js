const axios = require('axios')

const config = require('src/config/keys')
const Weather = require('src/models/weather')
const UnauthorizedError = require('src/errors/unauthorized')
const NotFoundError = require('src/errors/not-found')
const TooManyRequestsError = require('src/errors/too-many-requests')
const InternalServerError = require('src/errors/internal-server')

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
