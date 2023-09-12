import express from 'express'
import * as scheduleClass from '../controllers/scheduleClass'
import validateIncomingData from '../middlewares/validateIncomingData.js'

const router = express.Router()

router.route('/getSchedule').get(scheduleClass.apiGetScheduleClass)


export default router
