import { Request, Response } from 'express'
import logger from '../logger'

export default function request (req: Request, res: Response, next: Function) {
  logger.info('Request', {
    req: { path: req.path, method: req.method, body: req.body }
  })

  next()
}
