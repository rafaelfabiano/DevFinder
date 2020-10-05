const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router();

routes.post('/devs', async (request, response) => {
    
    //informar o nome do usario que sera pesquisado
    const{ github_username, techs, latitude, longitude } = request.body;

    //puxar informações do github
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const {name = login, avatar_url, bio} = apiResponse.data;//repassando informações para uma variavel
    
    const techsArrays = techs.split(',').map(tech => tech.trim());

    const location = {
        type: 'Point',
        coordinates: [longitude, latitude],
    };

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArrays,
        location,
    })


    //console.log(name, avatar_url, bio, github_username);// exibir informações coletadas
    
    return response.json(dev);    
});

module.exports = routes;