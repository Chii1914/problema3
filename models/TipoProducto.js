const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class TipoProducto extends Model {}

TipoProducto.init({
  idTipoProducto: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  descripcionProducto: {
    type: DataTypes.STRING(500),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'tipoproducto',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "idTipoProducto" },
      ]
    },
  ]
});

module.exports = TipoProducto;
