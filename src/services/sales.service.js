const salesModel = require('../models/sales.model');

const insertAll = async (saleProd) => {
  const saId = await salesModel.insertNew();

  await Promise.all(saleProd.map((sale) => salesModel
    .insertDetails(saId, sale.productId, sale.quantity)));

  return {
    id: saId,
    itemsSold: saleProd,
  };
};

const listAll = async () => {
  const sales = await salesModel.listAll();
  return sales;
};

const listAllId = async (saleId) => {
  const sale = await salesModel.listAllId(saleId);
  return sale;
};

module.exports = {
  insertAll,
  listAll,
  listAllId,
};