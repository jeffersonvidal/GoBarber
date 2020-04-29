import express from 'express'; //importa o express
import routes from './routes'; //importa rotas da aplicação

class App{
  /** é chamado automaticamente sempre qua a classe é instanciada */
  constructor(){
    this.server = express();
    this.middlewares();
    this.routes();
  }

  /** */
  middlewares(){
    this.server.use(express.json());
  }

  /** instancia rotas da aplicação */
  routes(){
    this.server.use(routes);
  }
}

/** Exporta a instancia da classe para toda aplicação */
export default new App().server;
