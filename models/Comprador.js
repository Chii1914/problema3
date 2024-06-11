const Comprador = require('../models/Comprador');

exports.getAllCompradores = async (req, res) => {
  try {
    const compradores = await Comprador.findAll();
    res.json(compradores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createComprador = async (req, res) => {
  try {
    const comprador = await Comprador.create(req.body);
    res.status(201).json(comprador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateComprador = async (req, res) => {
  try {
    const comprador = await Comprador.findByPk(req.params.id);
    if (!comprador) {
      return res.status(404).json({ error: 'Comprador no encontrado' });
    }
    await comprador.update(req.body);
    res.json(comprador);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteComprador = async (req, res) => {
  try {
    const comprador = await Comprador.findByPk(req.params.id);
    if (!comprador) {
      return res.status(404).json({ error: 'Comprador no encontrado' });
    }
    await comprador.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

