import Router from '@koa/router';
import HomeController from '@/app/controllers/HomeController';

import UserController from '../app/controllers/UserController';

const router = new Router();

router.get('/', HomeController.index);
router.post('/users', UserController.store);

export default router.routes();
