const express = require('express');
//biblioteca para modelagem de dados 
const mongoose = require('mongoose')
const app = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://Lucas:<Lucas648>@cluster0-xuva6.mongodb.net/lucosia?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
//metodos HTTP GET, POST,PUT,DELETE

//TIPOS DE PARAMETROS:

//Query Params: request.query (filtros, ordenação, paginação)
//Route Params: request.params(Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um registro)

app.listen(0648);