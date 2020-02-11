import { Router } from 'express';

import Aluno from './app/models/Aluno';
import AlunoController from './app/controllers/AlunoController';

const routes = new Router();

routes.get('/', async (req, res) => {
  const aluno = await Aluno.create({
    nome: 'Aluno 1',
    cpf: '11111111111',
    nasc: '0001-01-01',
    nomeMae: 'Mae 1',
  });

  return res.json(aluno);
});

routes.post('/alunos', AlunoController.store);

export default routes;
