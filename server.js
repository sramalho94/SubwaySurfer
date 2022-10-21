const express = require('express')
// const routes = require('./routes')
const db = require('./db')
const cors = require('cors')
const logger = require('morgan')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Subway 🚇 server listening on port: ${PORT}`)
})
