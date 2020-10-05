//const { json } = require('express');
const express = require('express');
const mongoose =  require('mongoose');
const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb+srv://admin:admin@cluster0.58yhp.gcp.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);//porta que esta sendo usada


//metodos HTTP: get, post, put, delete

//Tipos de Parametros: 

//Query Params:Ficam visiveis na url req.query(Filtros, Ordenação, Paginação...)
//Route Params: request.params (Identificar um recurso na alteração ou remoçao)
//Body: para criar request.body(usado para ciar ou alterar)

//MongoDB (Não-relacional)