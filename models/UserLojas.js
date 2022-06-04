const Sequilize = require('sequelize');
const database = require('../database/DB');

const UserLojas = database.define('users_lojas', {
    user_id: Sequilize.INTEGER,
    loja_id: Sequilize.INTEGER
});
module.exports = UserLojas;