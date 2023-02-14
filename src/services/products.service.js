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

const insert = async (prod) => {
  const newProd = await productsModel.insert(prod);
  const res = {
    id: newProd,
    name: prod.name,
  };
  return res;
};

module.exports = {
  findAll,
  findById,
  insert,
};
