const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Comprador extends Model {}

Comprador.init({
  idComprador: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  nombreComprador: {
    type: DataTypes.STRING(200),
    allowNull: false
  }
}, {
  sequelize,
  tableName: 'comprador',
  timestamps: false,
  indexes: [
    {
      name: "PRIMARY",
      unique: true,
      using: "BTREE",
      fields: [
        { name: "idComprador" },
      ]
    },
  ]
});

module.exports = Comprador;
