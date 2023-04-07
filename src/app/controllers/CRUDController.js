/* eslint-disable class-methods-use-this */

export default function CRUDController(Model, options) {
  const { exclude } = options || {};

  class CRUDClassController {
    async index(ctx) {
      ctx.body = await Model.findAll({
        attributes: {
          exclude,
        },
        include: ctx.query.include,
      });
    }

    async show(ctx) {
      ctx.body = await Model.findByPk(+ctx.params.id, {
        include: ctx.query.include,
        attributes: {
          exclude,
        },
      });
    }

    async store(ctx) {
      ctx.body = await Model.create(ctx.request.body);
    }

    async update(ctx) {
      const instance = await Model.findByPk(+ctx.params.id, {
        attributes: {
          exclude,
        },
      });
      instance.set(ctx.request.body);
      await instance.save();
      ctx.body = instance;
    }

    async destroy(ctx) {
      const instance = await Model.findByPk(+ctx.params.id, {
        attributes: {
          exclude,
        },
      });
      await instance.destroy();
      ctx.body = instance;
    }
  }

  return new CRUDClassController();
}
