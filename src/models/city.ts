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

export default class City {
  private id: number
  private name: string
  private lat: number
  private lon: number

  constructor (id:number, name: string, lat: number, lon: number) {
    this.id = id
    this.name = name
    this.lat = lat
    this.lon = lon
  }
}
