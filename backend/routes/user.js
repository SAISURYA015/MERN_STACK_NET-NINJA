const express = require('express')

// controller functions
const {sigupUser, loginUser} = require('../controllers/userController')

const router = express.Router()

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', sigupUser)

module.exports = router