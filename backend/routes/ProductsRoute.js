const { Router } = require('express');
const express = require('express');
const router = express.Router();
const ProductsController = require('../controllers/ProductsController');

router.get('/products', ProductsController.GetAllProducts);
router.get('/product/:id', ProductsController.GetProductById);
router.post('/products', ProductsController.StoreProduct);
router.delete('/product/:id', ProductsController.DeleteProduct);
router.patch('/product/:id', ProductsController.UpdateProduct);

module.exports = router;

