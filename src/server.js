import express from 'express'
import config from './config/server'
import logger from './logger'
import security from './middlewares/security'
import request from './middlewares/request'
import response from './middlewares/response'
import error from './middlewares/error'
import routes, { swagger } from './routes'

const server = express()

server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.use(security)
server.use(swagger)
server.use(request)
server.use(routes)
server.use(error)
server.use(response)

server.listen(config.port, logger.info('Server started', { pid: process.pid }))

module.exports = server
