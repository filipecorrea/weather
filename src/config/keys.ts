import joi from 'joi'
import dotenv from 'dotenv'

dotenv.config()

const schema = joi.object({
  OPENWEATHER_API: joi.string()
    .default('https://api.openweathermap.org/data/2.5/weather'),
  OPENWEATHER_API_KEY: joi.string()
    .alphanum()
}).unknown()

const { error, value: env } = schema.validate(process.env)

if (error) throw new Error(`Config validation error: ${error.message}`)

const config = {
  openweatherAPI: env.OPENWEATHER_API,
  openweatherAPIKey: env.OPENWEATHER_API_KEY
}

export default config
