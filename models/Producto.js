const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Producto extends Model {}

Producto.init({
  idProducto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreProducto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numeroVendedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Vendedors',
      key: 'numeroVendedor',
    },
  },
  idComprador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Compradors',
      key: 'idComprador',
    },
  },
  idTipoProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'TipoProductos',
      key: 'idTipoProducto',
    },
  },
  precioCompra: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Producto',
});

module.exports = Producto;

