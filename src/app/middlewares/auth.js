import { verify } from '@/utils/jwt';
import authConfig from '@/config/auth';
import Session from '../models/Session';
import User from '../models/User';

export default async function auth(ctx, next) {
  const { authorization } = ctx.headers;
  if (!authorization) throw new Error('You must send the "Authorization" header');
  const [, token] = authorization.split(' ');

  try {
    const decoded = await verify(token, authConfig.secret);

    const session = await Session.findByPk(decoded.id, {
      include: User,
    });

    ctx.state.user = session.User;
    ctx.state.session = session;
  } catch (err) {
    throw new Error('Invalid token');
  }
  await next();
}
