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

const joi = require('joi')
const weather = require('src/services/weather')
const BadRequestError = require('src/errors/bad-request')

module.exports = (req, res, next) => {
  const { error, value } = schema.validate(req.params)

  if (error) throw new BadRequestError(error.message)

  weather.get(value.id)
    .then(response => {
      res.locals = response
      next(null, req, res)
    })
    .catch(error => next(error))
}

const schema = joi.object({
  id: joi.number().integer().min(1).required()
})
