import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json({message: 'Olá vidal'})
})

export default routes; //exporta todas as rotas para aplicação