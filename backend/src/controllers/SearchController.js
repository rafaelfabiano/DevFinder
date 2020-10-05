const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStrigAsArray');

module.exports = {
    async index(request, response) {
        // console.log(request.query);
        const { latitude, longitude, techs } = request.query;

        const techsArray = parseStringAsArray(techs);

        const devs = await Dev.find({
            //filtrar por tecnologias
           techs: {
                $in: techsArray,
            },
            //buscar todos devs num raio de 10km
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({ devs });
    }
}