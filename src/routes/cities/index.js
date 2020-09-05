/**
 * @swagger
 * tags:
 *   name: Cities
 *   description: Cities information
 */

const express = require('express')
const router = express.Router()
const methods = require('requireindex')(__dirname)

router.route('/cities')
  .get(methods.query)

router.route('/cities/:id')
  .get(methods.get)

module.exports = router
