const { Router } = require('express');
const User = require('./module/Users');

const routes = Router();

routes.post('/users', (request, response) =>{

    const user = User.create({
        name,
        email,
        objetivos,
        avatar_url,
        renda,
    });

    return response.json(user);
});

module.exports = routes;