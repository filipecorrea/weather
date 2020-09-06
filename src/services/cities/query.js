import { getDistance } from 'geolib'
import cities from '../../../data/cities'

module.exports = (latitude, longitude) => {
  const origin = { latitude, longitude }
  const radius = 10000 // 10 kilometers

  return cities
    .filter(city => distance(origin, city) <= radius)
    .map(city => ({ id: city.id, name: city.name }))
}

function distance (origin, city) {
  return getDistance(
    origin, { latitude: city.coord.lat, longitude: city.coord.lon }
  )
}
