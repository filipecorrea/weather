const cities = require('../../../data/cities')
const City = require('../../models/city')
const NotFoundError = require('../../errors/not-found')

module.exports = id => {
  const city = cities.find(city => city.id === parseInt(id))

  if (!city) throw new NotFoundError()

  return new City(city.id, city.name, city.coord.lat, city.coord.lon)
}
