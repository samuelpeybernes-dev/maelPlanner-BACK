import express from 'express'
import * as scheduleJob from '../controllers/scheduleJob'
import validateIncomingData from '../middlewares/validateIncomingData.js'

const router = express.Router()

router.route('/getSchedule').get(scheduleJob.apiGetScheduleJob)

router.route('/postSchedule').post(validateIncomingData, scheduleJob.apiPostScheduleJob)

router.route('/deleteSchedule').delete(scheduleJob.apiDeleteScheduleJob)

export default router
