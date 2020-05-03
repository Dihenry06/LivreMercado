const connection = require('../database/connection');

module.exports = {

    async create(data) {
        const { fullname, email, hash } = data;

        await connection('users').insert({
            fullname,
            email,
            password: hash
        });

        return true;
    },

    async update(data) {
        const { id, email, hash } = data;

        const response = await connection('users')
            .update({
                email,
                password: hash
            })
            .where('id', id);

        return response;
    }

}