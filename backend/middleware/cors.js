import cors from 'cors'

const ACCEPTED_ORGIGINS = [
  'http://localhost:8080',
  'http://localhost:1234',
  'http://192.168.176.66:1234',
  'http:localhost:8081'
]

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORGIGINS } = {}) => cors({
  origin: (origin, callback) => {
    if (acceptedOrigins.includes(origin)) {
      return callback(null, true)
    }

    if (!origin) {
      return callback(null, true)
    }

    return callback(new Error('Not allowed by CORS'))
  }
})
