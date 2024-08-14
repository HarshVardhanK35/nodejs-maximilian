const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// import modules
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

// 404 error page rendering
const { renderErrorPage } = require('./controllers/404')

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(renderErrorPage)

app.listen(3000, () => {
  console.log(`Server is up and running on: http://localhost:3000`)
})
