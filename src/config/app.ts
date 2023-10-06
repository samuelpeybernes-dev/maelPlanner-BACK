import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import scheduleJob from '../routes/scheduleJob'
import scheduleClass from '../routes/scheduleClass'
import hoursSubject from '../routes/hoursSubject'
import passport from '../middlewares/PassportJWT'
import guest from '../routes/guest'

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())

app.get('/', (req, res) => res.json('Home de planner 🗓️'))
app.get('/api', (req, res) => res.json({ data: "Bienvenue sur l'api 🗓️" }))
app.get('/api/v1', (req, res) => res.json("Bienvenue sur la v1 de l'api 🗓️"))

app.use('/api/v1/scheduleJob', passport.authenticate('jwt', { session: false }), scheduleJob)
app.use('/api/v1/scheduleClass', passport.authenticate('jwt', { session: false }), scheduleClass)
app.use('/api/v1/hoursSubject', passport.authenticate('jwt', { session: false }), hoursSubject)

app.use('/api/v1/guest', guest)

app.use('*', (req, res) =>
  res.status(404).json({
    error: 'Not found 🤯',
  })
)

export default app
