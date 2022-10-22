const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const Subway = new Schema(
  {
    line: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    logo: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Subway', Subway)
