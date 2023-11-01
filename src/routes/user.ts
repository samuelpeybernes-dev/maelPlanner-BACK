import express from 'express'
import { apiPostCustom, apiGetProfil } from '../controllers/user'
import validateIncomingData from '../middlewares/validateIncomingData.js'

const router = express.Router()

router.route('/postCustomization').post(validateIncomingData, apiPostCustom)
router.route('/getCustomization').get(apiGetProfil)

export default router
