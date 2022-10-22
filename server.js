const express = require('express')
const routes = require('./routes')
const db = require('./db')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const logger = require('morgan')

const app = express()

app.use(cors())
app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', routes)

app.get('/', (req, res) => {
  console.log('we here')
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
  console.log(`Subway 🚇 server listening on port: ${PORT}`)
})
