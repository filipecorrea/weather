import { Logger as WinstonLogger, createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'
import config from '../config/logger'

export default class Logger {
  private static logger: WinstonLogger = createLogger({
    level: config.level,
    transports: [
      new transports.Console({
        format: format.combine(format.colorize(), format.simple()),
        silent: !config.enabled || process.env.NODE_ENV !== 'dev'
      }),
      new transports.DailyRotateFile({
        datePattern: 'YYYY-MM-DD',
        utc: true,
        dirname: config.directory,
        filename: 'application-%DATE%.log',
        zippedArchive: true,
        maxSize: config.maxSize,
        maxFiles: config.maxFiles,
        format: format.combine(format.timestamp(), format.json()),
        silent: !config.enabled
      })
    ]
  })

  static info(message: string, ...details: any[]): void {
    this.logger.info(message, ...details)
  }

  static error(message: string, ...details: any[]): void {
    this.logger.error(message, ...details)
  }
}
