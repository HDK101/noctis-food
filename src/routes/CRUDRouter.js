import Router from '@koa/router';

export default function CRUDRouter(controller) {
  const crudRouter = new Router();
  crudRouter.get('/', controller.index);
  crudRouter.get('/:id', controller.show);
  crudRouter.post('/', controller.store);
  crudRouter.put('/:id', controller.update);
  crudRouter.del('/:id', controller.destroy);

  return crudRouter;
}
