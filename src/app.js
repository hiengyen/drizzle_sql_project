import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'

import 'dotenv/config'
import router from './router/index.js'

const app = express()

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
export default app
