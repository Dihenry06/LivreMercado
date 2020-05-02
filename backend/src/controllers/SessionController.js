const SessionModel = require('../models/SessionModel');
const encryptsPasword = require('../utils/encryptsPassword');

async function login(req, res) {
    const { email, password } = req.body;
    const user = await SessionModel(email);

    if (!user) {
        return res.status(404).json({ error: "no user found with this email or password." });
    }
    const comparePassword = await encryptsPasword.comparePassword(password, user.password);

    if (!comparePassword) {
        return res.status(404).json({ error: "no user found with this email or password." });
    }

    return res.status(200).json({ response })
}

module.exports = login;