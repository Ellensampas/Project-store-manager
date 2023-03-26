const productsModel = require('../models/products.model');

const validaProduct = (req, res, next) => {
  const productId = req.body;

  const productMap = productId.map((produc) => produc.productId);

  const valida = productMap.some((produc) => produc === undefined);

  if (valida) {
    return res.status(400).send({ message: '"productId" is required' });
  }
  next();
};

const validaQuant = (req, res, next) => {
  const quant = req.body;
    
  const productMap = quant.map((produc) => produc.quantity);

  const valida = productMap.some((produc) => produc === undefined);

  if (valida) {
    return res.status(400).send({ message: '"quantity" is required' });
  }
  next();
};

const validaQuantNum = (req, res, next) => {
  const quant = req.body;

  const productMap = quant.map((produc) => produc.quantity);

  const valida = productMap.some((produc) => produc <= 0);

  if (valida) {
    return res
      .status(422)
      .send({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

const validaProdInex = async (req, res, next) => {
  const productId = req.body;
  
  const rest = await productsModel.findAll();

  const productMap = productId.map((produc) => produc.productId);
  const restMap = rest.map((produc) => produc.id);

  const valida = productMap.every((produc) => restMap.includes(produc));

  if (!valida) {
    return res
      .status(404)
      .send({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validaProduct,
  validaQuant,
  validaQuantNum,
  validaProdInex,
};
