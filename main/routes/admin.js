const express = require('express')

const router = express.Router()

const { getAddProductPage, postNewProduct } = require('../controllers/products')

// ... /admin/add-product => GET req
router.get('/add-product', getAddProductPage)

// ... /admin/product => POST req
router.post('/add-product', postNewProduct)


module.exports = router