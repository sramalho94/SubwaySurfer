const mongoose = require('mongoose')

let MONGODB_URI =
  'mongodb+srv://sramalho:22emperoR@subwaysurferprojectclus.xs2jkjp.mongodb.net/subwaySurfersDatabase'

mongoose
  .connect(MONGODB_URI)
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
