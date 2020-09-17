import { Request, Response } from 'express'
import logger from '../logger'

export default function response (req: Request, res: Response, next: Function) {
  const body = res.locals.constructor === Array || Object.keys(res.locals).length > 0
    ? res.locals
    : undefined

  res.send(body)

  logger.info('Response', { res: { statusCode: res.statusCode, body } })
}
