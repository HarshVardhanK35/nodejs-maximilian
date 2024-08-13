const path = require('path')
const express = require('express')

const app = express()

const homeRoute = require('./routes/home')
const userRoute = require('./routes/users')

app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', userRoute)
app.use(homeRoute)

app.listen(3000, () => {
  console.log(`Server is up and running on http://localhost:3000/`)
})
