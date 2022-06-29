const express = require('express')
var router = express.Router();

const {getAllProducts, getProduct, updateProduct, createProduct} = require('../controllers/products')

router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProduct).patch(updateProduct) //.delete(deleteProduct)

module.exports = router