const express = require('express'); //Importação do módulo "express"
const cors = require('cors')
const routes = require('./routes');

const app = express(); // Instanciação da aplicação

app.use(cors());
app.use(express.json());
app.use(routes); 


app.listen(3333);