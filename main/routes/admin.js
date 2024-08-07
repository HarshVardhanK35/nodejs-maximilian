const path = require('path')
const express = require('express')

const router = express.Router()

// root directory
const rootDir = require('../utils/path')

// ... /admin/add-product => GET req
router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

// ... /admin/product => POST req
router.post('/product', (req, res, next) => {
  console.log(req.body.product)
  res.redirect('/')
})

module.exports = router