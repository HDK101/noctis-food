import Router from '@koa/router';
import adminAuth from '@/app/middlewares/adminAuth';

import AdminUserController from '@/app/controllers/AdminUserController';
import CRUDRouter from './CRUDRouter';

const router = new Router();

router.use(adminAuth);
router.use('/users', CRUDRouter(AdminUserController).routes());

export default router;
