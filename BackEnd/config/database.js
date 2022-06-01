// import sequelize
const Sequelize = require('sequelize');

// Create Connection
const db = new Sequelize('db_produk', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = db;
