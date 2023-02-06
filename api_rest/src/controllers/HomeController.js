import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoALuno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Andreatta',
      email: 'Maria@gmail.com',
      idade: 23,
      peso: 57,
      altura: 1.7,
    });
    res.json(novoALuno);
  }
}

export default new HomeController();
