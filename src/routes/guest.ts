import express from 'express'
import {apiPostLogin, apiPostRegister} from '../controllers/user'

const router = express.Router()

router.route('/login').post(apiPostLogin)
router.route('/register').post(apiPostRegister)

export default router