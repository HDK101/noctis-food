import Koa from 'koa';
import CSRF from 'koa-csrf';
import session from 'koa-session';
import koaBody from 'koa-body';
import koaEjs from '@koa/ejs';

import dotenv from 'dotenv';

import { join } from 'node:path';

import sync from './database/sync';
import routes from './routes';

async function start() {
  dotenv.config();

  await sync();

  const app = new Koa();

  koaEjs(app, {
    root: join(__dirname, 'views'),
    layout: 'template',
    viewExt: 'html',
    cache: false,
    debug: true,
  });

  app.keys = ['secret'];

  app
    .use(async (ctx, next) => {
      ctx.cookies.set('SameSite', 'Strict');
      await next();
    })
    .use(koaBody())
    .use(session({}, app))
    .use(new CSRF())
    .use(routes);

  app.listen(3000);
}

start();
