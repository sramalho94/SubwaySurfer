const express = require('express')
const routes = require('./routes')
const db = require('./db')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const logger = require('morgan')
const path = require('path')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: false }))

app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})
app.listen(PORT, () => {
  console.log(`Subway 🚇 server listening on port: ${PORT}`)
})
