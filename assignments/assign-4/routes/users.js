const express = require('express')

const userData = require('./userForm')

const router = express.Router()

router.get('/', (req, res, next) => {
  const users = userData.users
  res.render('users', { users: users, pageTitle: "Users", path: '/'})
})

module.exports = router