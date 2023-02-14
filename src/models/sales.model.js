const connection = require('./connection');

const insertNew = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );
  return insertId;
};

const insertDetails = async (saleId, productId, quant) => {
  const dat = await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?)',
    [saleId, productId, quant],
  );
  return dat;
};

module.exports = {
  insertNew,
  insertDetails,
};