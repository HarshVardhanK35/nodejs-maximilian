const express = require('express')

const router = express.Router()

const users = []

// ... /user-form => GET req
router.get('/user-form', (req, res, next) => {
  res.render('user-form', {pageTitle: "User Form", path: '/user-form'})
})

// ... /user-form => POST req
router.post('/user-form', (req, res, next) => {
  users.push({ username: req.body.username })
  res.redirect('/')
})

exports.routes = router
exports.users = users