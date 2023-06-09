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

const insertProd = async (req, res) => {
  const newP = await productsService.insert(req.body);
  res.status(201).json(newP);
};

const attProd = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  const newP = await productsService.attProd(name, id);
  
  if (newP.message) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(newP);
};

const delProd = async (req, res) => {
  const { id } = req.params;
  const del = await productsService.delProd(id);
  if (del.message) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(204).json();
};

module.exports = {
  listAllProducts,
  getProductsId,
  insertProd,
  attProd,
  delProd,
};
