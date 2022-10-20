const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    userName: { type: String, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Password: { type: String, required: true },
    loggedIn: { type: Boolean, default: false }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', User)
