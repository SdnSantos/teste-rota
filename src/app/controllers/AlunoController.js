import Aluno from '../models/Aluno';

class AlunoController {
  async store(req, res) {
    const { nome, cpf, nasc, nomeMae } = await Aluno.create(req.body);

    return res.json({
      nome,
      cpf,
      nasc,
      nomeMae,
    });
  }
}
export default new AlunoController();
