const Vendedor = require('../models/Vendedor');

exports.getAllVendedores = async (req, res) => {
  try {
    const vendedores = await Vendedor.findAll();
    res.json(vendedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createVendedor = async (req, res) => {
  try {
    const vendedor = await Vendedor.create(req.body);
    res.status(201).json(vendedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateVendedor = async (req, res) => {
  try {
    const vendedor = await Vendedor.findByPk(req.params.id);
    if (!vendedor) {
      return res.status(404).json({ error: 'Vendedor no encontrado' });
    }
    await vendedor.update(req.body);
    res.json(vendedor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteVendedor = async (req, res) => {
  try {
    const vendedor = await Vendedor.findByPk(req.params.id);
    if (!vendedor) {
      return res.status(404).json({ error: 'Vendedor no encontrado' });
    }
    await vendedor.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
