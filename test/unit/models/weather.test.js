import { expect } from 'chai'

const Weather = require('../../../src/models/weather')

describe('Models: Weather', () => {
  beforeEach(() => {
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
  })

  it('creates a weather object', () => {
    const values = Object.values(this.mockedData)
    this.weather = new Weather(...values)
    expect(this.weather).to.be.deep.equal(this.mockedData)
  })
})
