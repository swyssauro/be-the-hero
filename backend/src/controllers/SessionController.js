const connection = require('../database/connection');

module.exports = {
    async create(resquest, response) {
        const { id } = resquest.body;
        const ong = await connection('ongs')
        .where('id', id)
        .select('name')
        .first();

        if (!ong) {
            return response.status(400).json({ error: 'no ong fund with this id.' })
        }

        return response.json(ong);
    }
}