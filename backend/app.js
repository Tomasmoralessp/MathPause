import express from 'express'
import { corsMiddleware } from './middleware/cors.js'

const app = express()
app.use(corsMiddleware())

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on: http://localhost:${PORT}`)
})
