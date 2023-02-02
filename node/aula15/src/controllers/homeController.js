// const HomeModel = require('../models/HomeMode');

// HomeModel.create({
//     titulo: 'Outra coisa qualquer.',
//     descricao: 'Outra descrição'
// }).then(dados => console.log(dados)).catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    // console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    // req.flash('info', 'Olá mundo!');
    // req.flash('error', 'huashuushauhsa');
    // req.flash('success', 'Blaaaaaaaaaaaaa');

    // console.log(req.session.usuario);
    // req.session.usuario = { nome: 'Yan', logado: true };
    res.render('index');
    return;
};

exports.trataPost = (req, res) => {
    res.send(req.body);
};

// HomeModel.find().then(dados => console.log(dados)).catch(e => console.log(e));