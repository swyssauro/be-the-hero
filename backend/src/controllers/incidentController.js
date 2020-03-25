const connection = require('../database/connection');

module.exports = {

    async index(resquest, response) {
        const incidents =  await connection('incidents').select('*');
        return response.json(incidents);
    },

    async create(resquest, response) {
        const { title, description, value } = resquest.body;
        const ong_id = resquest.headers.authorization;

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(resquest, response) {
        const { id } = resquest.params;
        const ong_id = resquest.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first();

        if (incident.ong_id !== ong_id) {
            return response.status(401).json({ error: 'operation not permitted.'});
        }

        await connection('incidents').where('id', id).delete();

        return response.status(204).send();
    }
};