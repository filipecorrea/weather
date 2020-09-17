import City from '../../models/city'
import NotFoundError from '../../errors/not-found'

const cities = require('../../../data/cities')

export default id => {
  const city = cities.find(city => city.id === parseInt(id))

  if (!city) throw new NotFoundError()

  return new City(city.id, city.name, city.coord.lat, city.coord.lon)
}
