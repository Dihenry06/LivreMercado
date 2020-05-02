const connection = require('../database/connection');

module.exports = {

    async create(data) {
        const { email, password } = data;

        await connection('users').insert({
            email,
            password
        });

        return true;
    },

}