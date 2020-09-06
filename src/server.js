const express = require('express')

const config = require('./config/server')
const logger = require('./logger')
const security = require('./middlewares/security')
const request = require('./middlewares/request')
const response = require('./middlewares/response')
const error = require('./middlewares/error')
const routes = require('./routes')

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(security)
server.use(routes.swagger)
server.use(request)
server.use(routes.api)
server.use(error)
server.use(response)

server.listen(config.port, logger.info('Server started', { pid: process.pid }))

module.exports = server
