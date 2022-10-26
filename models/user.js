const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    userName: { type: String, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)
