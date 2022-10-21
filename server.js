const express = require('express')
const PORT = process.env.PORT || 3001
const cors = require('cors')
const logger = require('morgan')
const app = express()

app.get('/', (req, res) => {
  res.send('Subway surfers go!')
})
app.get('/users/:userId', (req, res) => {
  console.log(req.params)
  res.send('this route has been reached')
})
app.post('/users', (req, res) => {
  console.log('L14: you have sent a request via the POST method')
  res.send({ msg: 'thanks for the post!' })
})
app.get('/find', (req, res) => {
  console.log('This is the query object in the request object:', req.query)
  res.send('I am at the find route')
})
app.listen(PORT, () => {
  console.log(`Subway 🚇 server listening on port: ${PORT}`)
})
