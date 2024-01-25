import express from 'express'
import * as hoursSubject from '../controllers/hoursSubject'
import validateIncomingData from '../middlewares/validateIncomingData.js'

const router = express.Router()

router.route('/gethoursSubject').get(hoursSubject.apiGetHoursSubject)

router.route('/postHoursSubject').post(validateIncomingData, hoursSubject.apiPostHoursSubject)

router.route('/deleteHoursSubject').delete(hoursSubject.apiDeleteHoursSubject)

export default router
