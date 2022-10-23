const User = require('../models/user')
const Review = require('../models/review')
const Subway = require('../models/subway')

const createUser = async (req, res) => {
  try {
    const user = await new User(req.body)
    await user.save()
    return res.status(201).json({
      user
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json({ users })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getUserById = async (rec, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if (user) {
      return res.status(200).json({ user })
    }
    return res.status(404).send('User with specified ID does not exist')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createSubway = async (req, res) => {
  try {
    const subway = await new Subway(req.body)
    await subway.save()
    return res.status(201).json({
      subway
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find()
    return res.status(200).json({ reviews })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createReview = async (req, res) => {
  try {
    const review = await new Review(req.body)
    await review.save()
    return res.status(201).json({
      review
    })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  getAllReviews,
  createReview,
  createSubway
}
