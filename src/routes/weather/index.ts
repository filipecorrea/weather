/**
 * @swagger
 * tags:
 *   name: Weather
 *   description: Weather information
 */

import express from 'express'
import get from './get'

const router = express.Router()

router.route('/cities/:id/weather')
  .get(get)

export default router
