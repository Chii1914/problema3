const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class TipoProducto extends Model {}

TipoProducto.init({
  idTipoProducto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcionProducto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'TipoProducto',
});

module.exports = TipoProducto;
