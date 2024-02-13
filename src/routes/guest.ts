import express from 'express'
import { apiPostLogin, apiPostRegister, apiPostRefreshToken, resetPasswordRequest } from '../controllers/user'

const router = express.Router()

router.route('/login').post(apiPostLogin)
router.route('/register').post(apiPostRegister)
router.route('/refresh-token').post(apiPostRefreshToken)
router.route('/test').post(resetPasswordRequest)

export default router
