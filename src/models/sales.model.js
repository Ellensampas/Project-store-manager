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

const listAll = async () => {
const [sales] = await connection.execute(
  `SELECT sales.id AS saleId, produc.product_id AS productId, produc.quantity, sales.date 
  FROM StoreManager.sales_products AS produc
  INNER JOIN StoreManager.sales AS sales ON sales.id = produc.sale_id
  ORDER BY sales.id, productId;`,
);
  return sales;
};

const listAllId = async (saleId) => {
  const [sales] = await connection.execute(
    `SELECT produc.product_id AS productId, produc.quantity, sales.date
  FROM StoreManager.sales_products AS produc
  INNER JOIN StoreManager.sales AS sales ON sales.id = produc.sale_id
  WHERE sales.id = ?
  ORDER BY product_id, sales.id;`,
    [saleId],
  );
  return sales;
};

module.exports = {
  insertNew,
  insertDetails,
  listAll,
  listAllId,
};