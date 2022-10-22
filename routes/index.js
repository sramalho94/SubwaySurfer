const { Router } = require('express')
const controllers = require('../controllers')
const { db } = require('../db')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))
router.get('/users', controllers.getAllUsers)

module.exports = router
