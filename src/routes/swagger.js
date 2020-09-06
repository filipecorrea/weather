const express = require('express')
const router = express.Router()
const swaggerUi = require('swagger-ui-express')
const swaggerSpec = require('../swagger')

router.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

module.exports = router
