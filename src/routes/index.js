import Router from '@koa/router';
import FoodCategoryController from '@/app/controllers/FoodCategoryController';
import FoodController from '@/app/controllers/FoodController';

import UserController from '../app/controllers/UserController';
import CRUDRouter from './CRUDRouter';
import SessionController from '@/app/controllers/SessionController';
import auth from '@/app/middlewares/auth';

const router = new Router();

router.use('/users', CRUDRouter(UserController).routes());
router.post('/sessions', SessionController.store);

router.use('/foods', CRUDRouter(FoodController).routes());
router.use('/food-categories', CRUDRouter(FoodCategoryController).routes());

router.get('/asd', auth, (ctx) => {
});

export default router;
