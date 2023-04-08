import Router from '@koa/router';

export default function CRUDRouter(controller) {
  const crudRouter = new Router();
  if (controller.index) crudRouter.get('/', controller.index);
  if (controller.show) crudRouter.get('/:id', controller.show);
  if (controller.store) crudRouter.post('/', controller.store);
  if (controller.update) crudRouter.put('/:id', controller.update);
  if (controller.destroy) crudRouter.del('/:id', controller.destroy);

  return crudRouter;
}
