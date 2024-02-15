import express from 'express'
import { apiPostLogin, apiPostRegister, apiPostRefreshToken, resetPasswordRequest} from '../controllers/user'
import validateIncomingData from '../middlewares/validateIncomingData.js'

const router = express.Router()

router.route('/login').post(apiPostLogin)
router.route('/register').post(apiPostRegister)
router.route('/refresh-token').post(apiPostRefreshToken)
router.route('/resetPasswordRequest').post(validateIncomingData, resetPasswordRequest)

export default router
