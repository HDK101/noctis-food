import User from "../models/User";
import Session from "../models/Session";
import { sign } from "@/utils/jwt";
import auth from "@/config/auth";

class SessionService {
  async create(login, password) {
    const user = await User.signIn(login, password);

    const session = await Session.create();

    await user.addSession(session);

    return {
      token: await sign(session.toJSON(), auth.secret),
      session,
    }
  }

  async destroy(userId) {
    const session = await Session.findByPk(userId);
    return session;
  }
}

export default new SessionService();