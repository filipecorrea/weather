import express from 'express'
import swaggerUi from 'swagger-ui-express'
const swaggerSpec = require('../swagger')

const router = express.Router()

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = router
