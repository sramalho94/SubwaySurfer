const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Riding the lines with MongoDB 🚇')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

//remove this line after final product is complete
mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
