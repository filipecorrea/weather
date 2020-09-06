import cluster from 'cluster'
import os from 'os'
import logger from './logger'

if (cluster.isMaster) {
  logger.info('Master started', { pid: process.pid })

  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    logger.info('Worker died', { pid: worker.process.pid })
  })
} else {
  logger.info('Worker started', { pid: process.pid })
  require('./server')
}
