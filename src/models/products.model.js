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
    'SELECT * FROM StoreManager.products WHERE id = ?', [productsId],
  );
  return camelize(products[0]);
};

const insert = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUE (?)',
    [product.name],
  );
    return insertId;
};

module.exports = {
  findAll,
  findById,
  insert,
};
