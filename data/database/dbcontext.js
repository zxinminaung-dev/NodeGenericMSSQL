const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('Store', 'admin', 'P@ssw0rd', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    options: {
      encrypt: true,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

module.exports = sequelize;
