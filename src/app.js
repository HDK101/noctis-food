import Koa from 'koa';
import koaBody from 'koa-body';

import dotenv from 'dotenv';

import './database/association';
import sync from './database/sync';
import routes from './routes';
import errorHandler from './app/middlewares/errorHandler';

async function start() {
  dotenv.config();

  await sync();

  const app = new Koa();

  app
    .use(koaBody())
    .use(errorHandler)
    .use(routes.routes())
    .use(routes.allowedMethods());

  app.listen(3000);
}

start();
