const express = require('express');

const { getProducts, getProductById, createProduct, updateProduct, deleteProduct } = require('../controllers/Product.js');

// init express route
const router = express.Router();

// Route get all products
router.get('/products', getProducts);
// Route get product by id
router.get('/products/:id', getProductById);
// Route create product baru
router.post('/products', createProduct);
// Route update product by id
router.put('/products/:id', updateProduct);
// Route delete product by id
router.delete('/products/:id', deleteProduct);

// export router
module.exports = router;
