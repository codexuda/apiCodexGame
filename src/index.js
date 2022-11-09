const express = require('express');
const morgan = require ('morgan');
const path = require('path');

const {mongoose} = require('./database');
const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//Middlewares = funciones que se ejecuntan antes de llegar a las rutas
//esa función es para ver por consola lo que me envía el servidor
app.use(morgan('dev'));
//esta función verifica si lo que se envía o se recibe del servido esta en formato JSON
app.use(express.json());

//Routes
app.use('/api/productos', require('./routes/productos.routes'));
app.use('/api/ventas', require('./routes/ventas.routes'));
app.use('/api/clientes', require('./routes/clientes.routes'));

// Statics files
app.use(express.static(path.join(__dirname, 'public')));


//starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});