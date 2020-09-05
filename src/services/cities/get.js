const cities = require('src/data/cities')
const City = require('src/models/city')
const NotFoundError = require('src/errors/not-found')

module.exports = id => {
  const city = cities.find(city => city.id === parseInt(id))

  if (!city) throw new NotFoundError()

  return new City(city.id, city.name, city.coord.lat, city.coord.lon)
}
