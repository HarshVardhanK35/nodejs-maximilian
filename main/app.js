const express = require('express')

const app = express()

// app.use((req, res, next) => {
//   console.log('first middleware')
//   next()
// })

// app.use((req, res, next) => {
//   console.log('second middleware')
//   res.send('<p>This is express page</p>')
// })

app.use('/users', (req, res, next) => {
  console.log('middleware that runs only with /users route')
  res.send("<h3>this middlewares that handles only '/users' route</h3>")
})

app.use('/', (req, res, next) => {
  console.log('middleware that always runs')
  res.send("<h3>this middlewares that handles only 'home' page</h3>")

})

app.listen(3000)