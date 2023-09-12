import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import scheduleJob from '../routes/scheduleJob'
import scheduleClass from '../routes/scheduleClass'
// import authMiddleware from '../middlewares/authMiddleware.js'


const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => res.json('Home de Cron ⏲'))
app.get('/api', (req, res) => res.json({ data: "Bienvenue sur l'api ⏲" }))
app.get('/api/v1', (req, res) => res.json("Bienvenue sur la v1 de l'api ⏲"))

// app.use('/api/v1/scheduleJob', authMiddleware, scheduleJob)
app.use('/api/v1/scheduleJob', scheduleJob)
app.use('/api/v1/scheduleClass', scheduleClass)

app.use('*', (req, res) =>
  res.status(404).json({
    error: 'Not found 🤯',
  })
)

export default app
