const UserModel = require('../models/UserModel');
const encryptsPassword = require('../utils/encryptsPassword');

module.exports = {

    async create(req, res) {
        const { fullname,email, password } = req.body;

        const hash = await encryptsPassword.passwordCript(password);

        const data = { fullname, email, hash };

        const response = await UserModel.create(data);

        if (!response) {
            return res.status(400).json({ error: 'error inserting' })
        }
        return res.status(200).json({ success: 'registered user' })
    },

    async update(req, res) {
        const id = req.headers.authorization;
        const { email, password } = req.body;

        const hash = await encryptsPassword.passwordCript(password);

        const data = { id, email, hash };

        const response = await UserModel.update(data);

        if (!response) {
            return res.status(400).json({ error: 'error updating user' });
        }

        return res.status(200).json({ success: 'updating user '})
    }
}