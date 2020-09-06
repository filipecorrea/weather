import express from 'express'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from '../swagger'

const router = express.Router()

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = router
