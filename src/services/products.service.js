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

const attProd = async (name, id) => {
  const newId = await productsModel.findById(id);
  if (!newId) {
    return { message: 'Product not found' };
  }
  await productsModel.attProd(name, id);
  const res = {
    id,
    name,
  };
  return res;
};

module.exports = {
  findAll,
  findById,
  insert,
  attProd,
};
