import express from 'express'
import * as hoursSubject from '../controllers/hoursSubject'
import validateIncomingData from '../middlewares/validateIncomingData.js'

const router = express.Router()

router.route('/gethoursSubject').get(hoursSubject.apiGetHoursSubject)

export default router
