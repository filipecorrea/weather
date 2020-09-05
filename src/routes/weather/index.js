/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather information
 */

const express = require('express')
const router = express.Router()
const methods = require('requireindex')(__dirname)

router.route('/cities/:id/weather')
  .get(methods.get)

module.exports = router
