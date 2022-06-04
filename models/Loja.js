const Sequelize = require('sequelize');
const database = require('../database/DB');

const Loja = database.define('Loja', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    token: {
        type: Sequelize.TEXT,
        allowNull: true
    },
    store_id: {
        type: Sequelize.INTEGER,
        allowNull: true
    }
});

module.exports = Loja;