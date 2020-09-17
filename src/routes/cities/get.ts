/**
 * @swagger
 * path:
 *  /cities/{id}:
 *    get:
 *      summary: Get city by id
 *      tags: [Cities]
 *      parameters:
 *        - in: path
 *          name: id
 *          schema:
 *            type: number
 *          required: true
 *          description: City id
 *      responses:
 *        "200":
 *          description: A city object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/City'
 */

import { Request, Response } from 'express'
import joi from 'joi'
import cities from '../../services/cities'
import BadRequestError from '../../errors/bad-request'

const schema = joi.object({
  id: joi.number().integer().min(1).required()
})

export default (req: Request, res: Response, next: Function) => {
  const { error, value } = schema.validate(req.params)

  if (error) throw new BadRequestError(error.message)

  res.locals = cities.get(value.id)

  next(null, req, res)
}
