const productsModel = require('../models/products.model');

const findAll = async () => {
  const products = await productsModel.findAll();
  return products;
};

const findById = async (productsId) => {
  const products = await productsModel.findById(productsId);
  if (!products) return { message: 'Product not found' };
  return products;
};

const insert = async (prods) => {
  const newPro = await productsModel.insert(prods);
  if (!prods) {
  return { message: '"name" is required' };
  }
  return { id: newPro, name: prods.name };
};

module.exports = {
  findAll,
  findById,
  insert,
};
