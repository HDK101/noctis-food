import OrderService from '../services/OrderService';

export default class OrderController {
  static async index(ctx) {
    ctx.body = await OrderService.listAll(ctx.state.user);
  }

  static async show(ctx) {
    console.log(ctx.state.user);
    // ctx.body = await OrderService.retrieve(ctx.state.user, ctx.params.id);
  }

  static async store(ctx) {
    const { user } = ctx.state;
    ctx.body = await OrderService.order({
      user,
      foodIds: ctx.request.body.foods,
    });
  }
}
