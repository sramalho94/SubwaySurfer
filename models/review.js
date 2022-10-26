const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Review = new Schema(
  {
    userName: { type: String, required: true },
    line: { type: Schema.Types.ObjectId, ref: 'Subway' },
    review: { type: String, required: true },
    rating: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = mongoose.model('Review', Review)
