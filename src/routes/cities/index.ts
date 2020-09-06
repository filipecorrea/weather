/**
 * @swagger
 * tags:
 *   name: Cities
 *   description: Cities information
 */

import express from 'express'
import get from './get'
import query from './query'

const router = express.Router()

router.route('/cities')
  .get(query)

router.route('/cities/:id')
  .get(get)

export default router
