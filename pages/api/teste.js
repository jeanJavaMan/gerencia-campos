
export default function handle(req, res) {
    const database = require('../../database/DB');
    const Loja = require('../../models/Loja');
    const User = require('../../models/User');
    const UserLojas = require('../../models/UserLojas');

    try {
        const result = database.sync();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
    res.status(200).json(req.query);
}