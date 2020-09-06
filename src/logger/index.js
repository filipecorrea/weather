const config = require('src/config/logger')

const { createLogger, format, transports } = require('winston')
require('winston-daily-rotate-file')

const logger = createLogger({
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

module.exports = logger
