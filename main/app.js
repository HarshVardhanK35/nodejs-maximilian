const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// import modules
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
  res.status(404).render('404', {pageTitle: "404 - Not Found"})
})

app.listen(3000, () => {
  console.log(`Server is up and running on: http://localhost:3000`)
})