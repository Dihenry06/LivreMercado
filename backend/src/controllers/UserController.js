const UserModel = require('../models/UserModel');

module.exports = {

    async create(req, res) {

        const { email, password } = req.body;

        const data = { email, password };

        const response = await UserModel.create(data);

        if (!response) {
            return res.status(400).json({ error: 'error inserting' })
        }

        return res.status(200).json({ success: 'registered user' })
    }

}