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

const joi = require('joi')
const cities = require('src/services/cities')
const BadRequestError = require('src/errors/bad-request')

module.exports = (req, res, next) => {
  const { error, value } = schema.validate(req.params)

  if (error) throw new BadRequestError(error.message)

  res.locals = cities.get(value.id)

  next(null, req, res)
}

const schema = joi.object({
  id: joi.number().integer().min(1).required()
})
