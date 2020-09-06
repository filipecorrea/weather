import express from 'express'
import cities from './cities'
import weather from './weather'

const router = express.Router()

router.use(cities)
router.use(weather)

export default router
export { default as swagger } from './swagger'
