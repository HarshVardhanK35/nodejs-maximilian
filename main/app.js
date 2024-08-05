const express = require('express')
const bodyParser = require('body-parser')

// import modules
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).send('<h1>404</h1><h3>Page not found!</h3>')
})

app.listen(3000, () => {
  console.log(`Server is up and running on: http://localhost:3000`)
})