const express = require('express');
const productsController = require('../controllers/products.controller');

const router = express.Router();

router.get('/', productsController.listAllProducts);
router.get('/:id', productsController.getProductsId);
router.post('/', productsController.insert);

module.exports = router;