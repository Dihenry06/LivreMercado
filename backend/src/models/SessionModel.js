const connection = require('../database/connection');

async function login(email) {
    return await connection('users')
        .select('id', 'fullname', 'email', 'password')
        .where('email', email)
        .first();
}

module.exports = login;