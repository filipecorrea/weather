/**
 * @swagger
 * path:
 *  /cities/{id}/weather:
 *    get:
 *      summary: Get weather by city id
 *      tags: [Weather]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: string
 *          required: true
 *          description: City id
 *      responses:
 *        "200":
 *          description: A weather object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Weather'
 */

import { Request, Response } from 'express'
import joi from 'joi'
import BadRequestError from '../../errors/bad-request'

const weather = require('../../services/weather')

const schema = joi.object({
  id: joi.number().integer().min(1).required()
})

export default (req: Request, res: Response, next: Function) => {
  const { error, value } = schema.validate(req.params)

  if (error) throw new BadRequestError(error.message)

  weather.get(value.id)
    .then(response => {
      res.locals = response
      next(null, req, res)
    })
    .catch(error => next(error))
}
