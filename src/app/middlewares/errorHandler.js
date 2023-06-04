import DomainError from '../errors/DomainError';

export default async function errorHandler(ctx, next) {
  try {
    await next();
  } catch (err) {
    if (err instanceof DomainError) {
      ctx.status = err.status || 500;
      ctx.body = {
        err: err.message,
      };
      return;
    }
    ctx.status = 500;
  }
}
