import Router from '@koa/router';

import SessionController from '@/app/controllers/SessionController';
import auth from '@/app/middlewares/auth';
import OrderController from '@/app/controllers/OrderController';
import CRUDRouter from './CRUDRouter';
import UserController from '../app/controllers/UserController';
import UserFoodController from '@/app/controllers/UserFoodController';

const router = new Router();

router.use('/users', CRUDRouter(UserController).routes());
router.post('/sessions', SessionController.store);
router.use('/foods', CRUDRouter(UserFoodController).routes());

router.use(auth);
router.get('/orders', OrderController.index);
router.post('/orders', OrderController.store);

export default router;
