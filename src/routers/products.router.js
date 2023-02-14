const express = require('express');
const productsController = require('../controllers/products.controller');
const validaName = require('../middlewares/validaName');

const router = express.Router();

router.get('/', productsController.listAllProducts);
router.get('/:id', productsController.getProductsId);
router.post('/', validaName, productsController.insertProd);

module.exports = router;