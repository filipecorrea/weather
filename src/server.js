import express from 'express'
import security from './middlewares/security'
import request from './middlewares/request'
import response from './middlewares/response'
import error from './middlewares/error'
import config from './config/server'

const logger = require('./logger')
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
