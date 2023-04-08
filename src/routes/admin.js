import Router from '@koa/router';
import FoodController from '@/app/controllers/FoodController';

import CRUDRouter from './CRUDRouter';
import adminAuth from '@/app/middlewares/adminAuth';

const router = new Router();

router.use(adminAuth);
router.use('/foods', CRUDRouter(FoodController).routes());

export default router;
