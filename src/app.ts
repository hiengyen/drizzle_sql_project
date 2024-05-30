import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import 'dotenv/config'
import router from './router'

const app = express()
const PORT = process.env.PORT || 8000

//init middlewares
app.use(cors({ credentials: true }))
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

//init routes
app.use('/', router)

//init server
const server = http.createServer(app)

server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`)
})
