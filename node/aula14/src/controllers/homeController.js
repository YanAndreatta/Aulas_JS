// const HomeModel = require('../models/HomeMode');

// HomeModel.create({
//     titulo: 'Outra coisa qualquer.',
//     descricao: 'Outra descrição'
// }).then(dados => console.log(dados)).catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};

// HomeModel.find().then(dados => console.log(dados)).catch(e => console.log(e));