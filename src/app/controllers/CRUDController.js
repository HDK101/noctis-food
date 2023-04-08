/* eslint-disable class-methods-use-this */

export default function CRUDController(Model, options) {
  const { exclude, routesOnly } = options || {};

  async function index(ctx) {
      ctx.body = await Model.findAll({
        attributes: {
          exclude,
        },
        include: ctx.query.include,
      });
  }

  async function show(ctx) {
      ctx.body = await Model.findByPk(+ctx.params.id, {
        include: ctx.query.include,
        attributes: {
          exclude,
        },
      });
  }

  async function store(ctx) {
    ctx.body = await Model.create(ctx.request.body);
  }

  async function update(ctx) {
    const instance = await Model.findByPk(+ctx.params.id, {
      attributes: {
        exclude,
      },
    });
    instance.set(ctx.request.body);
    await instance.save();
    ctx.body = instance;
  }

  async function destroy(ctx) {
    const instance = await Model.findByPk(+ctx.params.id, {
      attributes: {
        exclude,
      },
    });
    await instance.destroy();
    ctx.body = instance;
  }

  if (!routesOnly) {
    return {
      index,
      show,
      store,
      update,
      destroy,
    };
  }

  const controller = {};

  if (routesOnly.includes('index')) {
    controller.index = index;
  }

  if (routesOnly.includes('show')) {
    controller.show = show;
  }

  if (routesOnly.includes('store')) {
    controller.store = store;
  }

  if (routesOnly.includes('update')) {
    controller.update = update;
  }

  if (routesOnly.includes('destroy')) {
    controller.destroy = destroy;
  }

  return controller;
}
