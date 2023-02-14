const saleService = require('../services/sales.service');

const insertNew = async (req, res) => {
  const sale = req.body;
  const result = await saleService.insertAll(sale);
  return res.status(201).json(result);
};

module.exports = {
  insertNew,
};
