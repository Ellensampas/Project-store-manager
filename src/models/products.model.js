const camelize = require('camelize');
const connection = require('./connection');

const findAll = async () => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );
  return camelize(products);
};

const findById = async (productsId) => {
  const [products] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [productsId],
  );
  return camelize(products[0]);
};

const insert = async (prod) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [prod.name],
    );
  return insertId;
};

const attProd = async (name, id) => {
  const [product] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?',
    [name, id],
  );
  return product;
};

const delProd = async (id) => {
  const [product] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?;',
    [id],
  );
  return product;
};

module.exports = {
  findAll,
  findById,
  insert,
  attProd,
  delProd,
};
