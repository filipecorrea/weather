import { expect } from 'chai'
import faker from 'faker'
import Weather from '../../../src/models/weather'

describe('Models: Weather', () => {
  const mockedData = {
    type: faker.lorem.word(),
    type_description: faker.lorem.words(),
    sunrise: faker.random.number(),
    sunset: faker.random.number(),
    temp: faker.random.number(),
    temp_min: faker.random.number(),
    temp_max: faker.random.number(),
    pressure: faker.random.number(),
    humidity: faker.random.number(),
    clouds_percent: faker.random.number(),
    wind_speed: faker.random.number()
  }

  it('creates a weather object', () => {
    const values = Object.values(mockedData)
    const weather = new Weather(...values)
    expect(weather).to.be.deep.equal(mockedData)
  })
})
