const mongoose = require('mongoose')

let MONGODB_URI = 'mongodb://127.0.0.1:27017/subwaySurferDatabase'

mongoose.connect(MONGODB_URI)
then(() => {
  console.log('Riding the lines with MongoDB 🚇')
})
