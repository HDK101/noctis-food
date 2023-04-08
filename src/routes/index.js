import Router from '@koa/router';
import admin from './admin';
import client from './client';

const router = new Router();

router.use('/admin', admin.routes());
router.use('/client', client.routes());

export default router;
