import express from 'express'
import http from 'http'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import logger from './utils/logger'

import 'dotenv/config'
import router from './router'

const app = express()
const PORT = process.env.PORT || 8000

//init middlewares
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
app.use(cors({ credentials: true }))
app.use(cookieParser())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)

//init routes
app.use('/', router)

//init server
const server = http.createServer(app)

server.listen(PORT, () => {
  logger.info(`App running on port ${PORT}`)
})
