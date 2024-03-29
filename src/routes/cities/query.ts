/**
 * @swagger
 * path:
 *  /cities:
 *    get:
 *      summary: Query cities
 *      tags: [Cities]
 *      parameters:
 *        - in: query
 *          name: lat
 *          schema:
 *            type: number
 *          required: true
 *          description: Origin latitude
 *        - in: query
 *          name: lon
 *          schema:
 *            type: number
 *          required: true
 *          description: Origin longitude
 *      responses:
 *        "200":
 *          description: A list of city objects
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  $ref: '#/components/schemas/City'
 */

import { Request, Response } from 'express'
import joi from 'joi'
import cities from '../../services/cities'
import BadRequestError from '../../errors/bad-request'

const schema = joi.object({
  lat: joi.number().min(-90).max(90).required(),
  lon: joi.number().min(-180).max(180).required()
})

export default (req: Request, res: Response, next: Function) => {
  const { error, value } = schema.validate(req.query)

  if (error) throw new BadRequestError(error.message)

  res.locals = cities.query(value.lat, value.lon)

  next(null, req, res)
}
