import SessionService from "../services/SessionService";

export default class SessionController {
  static async store(ctx) {
    const { login, password } = ctx.request.body;
    ctx.body = await SessionService.create(login, password);
  }
}
