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

export default class Weather {
  private type: string
  private type_description: string
  private sunrise: string
  private sunset: string
  private temp: number
  private temp_min: number
  private temp_max: number
  private pressure: number
  private humidity: number
  private clouds_percent: number
  private wind_speed: number

  constructor (type: string, description: string, sunrise: string, sunset: string, temp: number, min: number, max: number, pressure: number, humidity: number, clouds: number, wind: number) {
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
