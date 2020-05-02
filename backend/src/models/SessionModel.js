const connection = require('../database/connection');

async function login(email){
    const response =  await connection('users').select('email','password').where('email',email);
    return response;
}

module.exports = login;