const saleService = require('../services/sales.service');

const insertNew = async (req, res) => {
  const sale = req.body;
  const result = await saleService.insertAll(sale);
  return res.status(201).json(result);
};

const listAll = async (_req, res) => {
  const sale = await saleService.listAll();
  return res.status(200).json(sale);
};

const listAllId = async (req, res) => {
  const sales = await saleService.listAllId(req.params.id);

  if (sales.length === 0 || !sales) {
    return res.status(404).json({ message: 'Sale not found' });
  }
  console.log(sales);
  return res.status(200).json(sales);
};

module.exports = {
  insertNew,
  listAll,
  listAllId,
};
