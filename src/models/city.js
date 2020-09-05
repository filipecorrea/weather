/**
 * @swagger
 *  components:
 *    schemas:
 *      City:
 *        type: object
 *        properties:
 *          id:
 *            type: integer
 *          name:
 *            type: string
 *          lat:
 *            type: number
 *          lon:
 *            type: number
 *        example:
 *           id: 2873891
 *           name: Mannheim
 *           lat: 49.488331
 *           lon: 8.46472
 */

class City {
  constructor (id, name, lat, lon) {
    this.id = id
    this.name = name
    this.lat = lat
    this.lon = lon
  }
}

module.exports = City
