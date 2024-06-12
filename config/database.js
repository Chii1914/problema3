const { Sequelize } = require('sequelize');

require('dotenv').config(); 
const sequelize = new Sequelize(process.env.DBNAME, process.env.USERMYSQL, process.env.PASSMYSQL, {
  host: process.env.HOSTMYSQL,
  dialect: 'mysql',
});

// Rest of the code...

module.exports = sequelize;
