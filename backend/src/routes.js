const { Router } = require('express');
const axios = require('axios');

const routes = Router();

routes.post('/devs', async (request, response) => {
    
    //informar o nome do usario que sera pesquisado
    const{ github_username} = request.body;

    //puxar informações do github
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);

    const {name = login, avatar_url, bio} = apiResponse.data;//repassando informações para uma variavel

    console.log(name, avatar_url, bio, github_username);// exibir informações coletadas
    

    return response.json({ message: 'Teste'});    
});

module.exports = routes;