const { DataTypes } = require('sequelize');
const sequelize = require('../database/dbcontext');

const Product = sequelize.define('Product', {
    Id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Price: {
        type: DataTypes.STRING,
        allowNull: true,
    },
});


module.exports = Product;
