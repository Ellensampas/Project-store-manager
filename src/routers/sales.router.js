const express = require('express');
const salesController = require('../controllers/sales.controller');
const {
  validaProduct,
  validaQuant,
  validaQuantNum,
  validaProdInex,
} = require('../middlewares/validaSales');

const router = express.Router();

router.post(
  '/',
  validaProduct,
  validaQuant,
  validaQuantNum,
  validaProdInex,
  salesController.insertNew,
);

module.exports = router;
