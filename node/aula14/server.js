require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log('Conectei à base de dados.');
    app.emit('pronto');
}).catch( e => console.log(e));

const routes = require('./routes');
const path = require('path');
const { middlewareGlobal } = require('./src/middlewares/middleware');

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(middlewareGlobal);
// app.use(outroMiddleware);
app.use(routes);

app.on('pronto', () => {
    app.listen(5000, () => {
        console.log('Acessar http://localhost:5000');
        console.log('Servidor executando na porta 5000');
    });
});
