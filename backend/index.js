const express = require('express');

const app = express();

app.use(express.json())

//GET, POST, PUT, DELETE

//Tipos de parâmetros: 
//Query Params: req.query(Filtros, Ordenação, Paginação)
//Router Params: req.params(Identificar um recurso na alteração ou remoção)
//Body: res.body(Dados para criação ou alteração de um registro)

//MongoDB (Não-Relacional)

app.post('/users', (request, response) =>{
    console.log(request.body);
    return response.json({ message: 'Hello Omnistack!'});
});
app.listen(3333);
