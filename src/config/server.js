require('dotenv').config()

const joi = require('joi')

const schema = joi.object({
  /*
   * A single instance of Node.js runs in a single thread.
   * To take advantage of multi-core systems, the user will sometimes want
   * to launch a cluster of Node.js processes to handle the load.
   */
  CLUSTER_MODE: joi.boolean()
    .truthy('true')
    .truthy('TRUE')
    .falsy('false')
    .falsy('FALSE')
    .default(false),
  PORT: joi.number()
    .port()
    .default(3000)
}).unknown()

const { error, value: env } = schema.validate(process.env)

if (error) throw new Error(`Config validation error: ${error.message}`)

const config = {
  clusterMode: env.CLUSTER_MODE,
  port: env.PORT
}

module.exports = config
