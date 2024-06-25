const { where } = require('sequelize');
const Producto = require('../models/Producto');

exports.getAllProductos = async (req, res) => {
  try {
    const productos = await Producto.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createProducto = async (req, res) => {
  try {
    const producto = await Producto.create(req.body);
    res.status(201).json(producto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateProducto = async (req, res) => {
  try {
    // Extract new and old values from the request body
    const { idComprador, numeroVendedor, idTipoProducto, precioCompra, oldIdComprador, oldNumeroVendedor, oldIdTipoProducto, oldPrecioCompra } = req.body;
    
    // Find the old product using old values
    const producto = await Producto.findOne({
      where: {
        numeroVendedor: oldNumeroVendedor,
        idComprador: oldIdComprador,
        idTipoProducto: oldIdTipoProducto,
        precioCompra: oldPrecioCompra
      }
    });

    // If product not found, return 404
    if (!producto) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }

    // Destroy the old product
    await producto.destroy();

    // Create a new product with the updated values
    const newProducto = await Producto.create({
      numeroVendedor,
      idComprador,
      idTipoProducto,
      precioCompra
    });

    // Respond with the newly created product
    res.json(newProducto);
  } catch (error) {
    // Handle errors and respond with error message
    res.status(400).json({ error: error.message });
  }
};


exports.deleteProducto = async (req, res) => {
  try {
    console.log(req.body)
    const result = await Producto.destroy({
      where: {
        numeroVendedor: req.body.numeroVendedor, 
        idComprador: req.body.idComprador, 
        idTipoProducto: req.body.id, 
        precioCompra: req.body.precioCompra
      }
    });
    if (result === 0) {
      return res.status(404).json({ error: 'Producto no encontrado' });
    }
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};