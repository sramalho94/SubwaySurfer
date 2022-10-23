const express = require('express')
const router = express.Router()
const controllers = require('../controllers')
const { db } = require('../db')

router.get('/', (req, res) => res.send('This is root!'))

router.post('/users', controllers.createUser)

router.get('/users', controllers.getAllUsers)

router.get('/users/:id', controllers.getUserById)

router.put('/users/:id', controllers.updateUser)

router.delete('/users/:id', controllers.deleteUser)

router.get('/reviews', controllers.getAllReviews)

router.post('/reviews', controllers.createReview)

router.post('/subways', controllers.createSubway)

module.exports = router
