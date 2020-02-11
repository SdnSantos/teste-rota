import Condutor from './Aluno';

class CondutorController {
  async store(req, res) {
    const { nome, cpf, cnh, validade } = await Condutor.create(req.body);

    return res.json({
      nome,
      cpf,
      cnh,
      validade,
    });
  }
}
export default new CondutorController();
