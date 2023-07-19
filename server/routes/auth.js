const express = require('express')
const router = express.Router()

const {login, register}= require('../controllers/auth')
const createAdmissionsForm = require('../controllers/admissions')

router.route('/login').post(login)
router.route('/register').post(register)
router.route('/admissionsForm').post(createAdmissionsForm)


module.exports = router