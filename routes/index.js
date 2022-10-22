const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const { db } = require('../db')

router.get('/', (req, res) => res.send('This is root!'))
router.get('/users', controllers.getAllUsers)

module.exports = router
