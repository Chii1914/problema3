const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Vendedor extends Model {}

Vendedor.init({
  numeroVendedor: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombreVendedor: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'vendedor',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "numeroVendedor" },
      ]
    },
  ]
});

module.exports = Vendedor;

