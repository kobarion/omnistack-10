const express = require('express'); 
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://kobarion:bionicle1996@cluster0-gajb8.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);
app.listen(3333);




// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parametros:

// Query parameters: request.query (Filtros, ordenação, paginação, ...)
// Route parameters: request.params (Identificar um recurso na alteração ou remoção)
// Body: request.body (Dados para criação ou alteração de um registro)
