import express from 'express'
import * as projectNotesPersonalization from '../controllers/projectNotesPersonalization'
import validateIncomingData from '../middlewares/validateIncomingData.js'

const router = express.Router()

router.route('/personalization').get(projectNotesPersonalization.apiGetProjectNotesPersonalizationByEmpId)

router.route('/postLabel').post(validateIncomingData, projectNotesPersonalization.apiPostProjectNotesPersonalization)

export default router
