const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Vendedor extends Model {}

Vendedor.init({
  numeroVendedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombreVendedor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Vendedor',
});

module.exports = Vendedor;

