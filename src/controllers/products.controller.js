const productsService = require('../services/products.service');

const listAllProducts = async (_req, res) => {
  const produ = await productsService.findAll();
  return res.status(200).json(produ);
};

const getProductsId = async (req, res) => {
  const { id } = req.params;
  const produ = await productsService.findById(id);

  if (produ.message) {
    return res.status(404).json(produ);
  }
  return res.status(200).json(produ);
};

module.exports = {
  listAllProducts,
  getProductsId,
};
