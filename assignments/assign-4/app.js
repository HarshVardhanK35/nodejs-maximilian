const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// import routes
const usersRoute = require('./routes/users')
const userFormRoute = require('./routes/userForm')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(usersRoute)
app.use(userFormRoute.routes)

app.use((req, res, next) => {
  res.status(404).render('404', { pageTitle: 'Page Not Found' })
})

app.listen(3000, () => {
  console.log(`server up and running on: http://localhost:${3000}`)
})