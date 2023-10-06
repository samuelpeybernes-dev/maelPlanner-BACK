import express from 'express'
import { apiPostLogin, apiPostRegister, apiPostRefreshToken } from '../controllers/user'

const router = express.Router()

router.route('/login').post(apiPostLogin)
router.route('/register').post(apiPostRegister)
router.route('/refresh-token').post(apiPostRefreshToken)

export default router
