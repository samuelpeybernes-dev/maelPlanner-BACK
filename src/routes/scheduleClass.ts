import express from 'express'
import * as scheduleClass from '../controllers/scheduleClass'
import validateIncomingData from '../middlewares/validateIncomingData.js'

const router = express.Router()

router.route('/getSchedule').get(scheduleClass.apiGetScheduleClass)

router.route('/postSchedule').post(validateIncomingData, scheduleClass.apiPostScheduleClass)

router.route('/deleteSchedule').delete(scheduleClass.apiDeleteScheduleClass)


export default router
