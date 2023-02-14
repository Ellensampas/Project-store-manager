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

module.exports = {
  insertAll,
};