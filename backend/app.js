import express, { json } from 'express'
import { corsMiddleware } from './middleware/cors.js'
import { problemsRouter } from './routes/problems.js'

const app = express()
app.use(corsMiddleware())
app.disable('x-powered-by')

app.use(json()) // Comentar esto

// Separar todas las rutas que tienen que ver con /problems
app.use('/problems', problemsRouter)

const PORT = process.env.PORT ?? 1234

app.listen(PORT, () => {
  console.log(`server listening on: http://localhost:${PORT}`)
})
