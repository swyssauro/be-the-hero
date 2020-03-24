const express = require('express');
const crypto = require('crypto');
const routes = express.Router();
const connection = require('./database/connection');

routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
});

routes.post('/ongs', async (request, response) => {
    const { name, email, whatsaap, city, uf } = request.body;
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsaap,
        city,
        uf,
    })

    return response.json({ id });
});

module.exports = routes;