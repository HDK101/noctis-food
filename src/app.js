import Koa from 'koa';
import koaBody from 'koa-body';
import cors from '@koa/cors';
import serve from 'koa-static';
import { resolve } from 'node:path';

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
    .use(cors())
    .use(koaBody())
    .use(errorHandler)
    .use(routes.routes())
    .use(routes.allowedMethods())
    .use(serve(resolve('./uploads')));

  app.listen(3000);
}

start();
