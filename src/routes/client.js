import Router from '@koa/router';

import SessionController from '@/app/controllers/SessionController';
import auth from '@/app/middlewares/auth';
import OrderController from '@/app/controllers/OrderController';
import UserFoodController from '@/app/controllers/UserFoodController';
import UserController from '@/app/controllers/client/UserController';
import CRUDRouter from './CRUDRouter';

const router = new Router();

router.use('/users', CRUDRouter(UserController).routes());
router.post('/sessions', SessionController.store);
router.use('/foods', CRUDRouter(UserFoodController).routes());

router.use(auth);
router.get('/orders', OrderController.index);
router.get('/orders/:id', OrderController.show);
router.post('/orders', OrderController.store);

export default router;
