const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()
const PORT = process.env.PORT || 3001

// 3rd party middleware
app.use(cors())
app.use(logger('dev'))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//routes
app.get('/', (req, res) => {
  res.send({ subwaySurfed: true })
})

app.get(
  '/middleware',
  (req, res, next) => {
    console.log('this is middleware')
    next()
  },
  (req, res) => {
    console.log('FROM LINE 28: this is the function of the response completing')
    res.send('response completed')
  }
)

app.listen(PORT, () => {
  console.log(`Subway 🚇 server listening on port: ${PORT}`)
})
