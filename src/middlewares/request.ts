import { Request, Response } from 'express'
const logger = require('../logger')

export default function request (req: Request, res: Response, next: Function) {
  logger.info('Request', {
    req: { path: req.path, method: req.method, body: req.body }
  })

  next()
}
