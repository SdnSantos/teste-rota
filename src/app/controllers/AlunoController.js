import Aluno from '../models/Aluno';

class AlunoController {
  async store(req, res) {
    const existeAluno = await Aluno.findOne({
      where: {
        cpf: req.body.cpf,
      },
    });

    if (existeAluno) {
      return res.json({ erro: 'Este aluno já existe.' });
    }

    const { nome, cpf, nasc, nome_mae } = await Aluno.create(req.body);

    return res.json({
      nome,
      cpf,
      nasc,
      nome_mae,
    });
  }

  async update(req, res) {
    // pegar o aluno que será editado
    const { cpf } = req.body;

    const aluno = await Aluno.findOne({
      where: { cpf },
    });

    if (!aluno) {
      return res.json({ erro: 'Aluno não encontrado!' });
    }

    const { nome, nasc, nome_mae } = await aluno.update(req.body);

    return res.json({
      nome,
      nasc,
      nome_mae,
    });
  }
}

export default new AlunoController();
