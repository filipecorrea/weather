/**
 * @swagger
 *  components:
 *    schemas:
 *      Weather:
 *        type: object
 *        properties:
 *          type:
 *            type: string
 *          type_description:
 *            type: string
 *          sunrise:
 *            type: string
 *          sunset:
 *            type: string
 *          temp:
 *            type: number
 *          temp_min:
 *            type: number
 *          temp_max:
 *            type: number
 *          pressure:
 *            type: number
 *          humidity:
 *            type: number
 *          clouds_percent:
 *            type: number
 *          wind_speed:
 *            type: number
 *        example:
 *           type: Clear
 *           type_description: clear sky
 *           sunrise: 2016-08-23T08:00:00.000Z
 *           sunset: 2016-08-23T22:00:00.000Z
 *           temp: 29.72
 *           temp_min: 26.67
 *           temp_max: 35
 *           pressure: 1026
 *           humidity: 36
 *           clouds_percent: 0
 *           wind_speed: 1.5
 */

class Weather {
  constructor (type, description, sunrise, sunset, temp, min, max, pressure, humidity, clouds, wind) {
    this.type = type
    this.type_description = description
    this.sunrise = sunrise
    this.sunset = sunset
    this.temp = temp
    this.temp_min = min
    this.temp_max = max
    this.pressure = pressure
    this.humidity = humidity
    this.clouds_percent = clouds
    this.wind_speed = wind
  }
}

module.exports = Weather
