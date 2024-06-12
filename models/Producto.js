const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Producto extends Model {}

Producto.init({
  numeroVendedor: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'vendedor',
      key: 'numeroVendedor'
    }
  },
  idComprador: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'comprador',
      key: 'idComprador'
    }
  },
  idTipoProducto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'tipoproducto',
      key: 'idTipoProducto'
    }
  },
  precioCompra: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'producto',
  timestamps: false,
  indexes: [
    {
      name: "fk_comprador",
      using: "BTREE",
      fields: [
        { name: "idComprador" },
      ]
    },
    {
      name: "fk_vendedor",
      using: "BTREE",
      fields: [
        { name: "numeroVendedor" },
      ]
    },
    {
      name: "fk_tipoproducto",
      using: "BTREE",
      fields: [
        { name: "idTipoProducto" },
      ]
    },
  ]
});

module.exports = Producto;

