import { Router } from 'express';

import AlunoController from './app/controllers/AlunoController';

const routes = new Router();

routes.post('/alunos', AlunoController.store);
routes.put('/alunos', AlunoController.update);

export default routes;
