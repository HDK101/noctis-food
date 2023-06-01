export default async function adminAuth(ctx, next) {
  const { authorization } = ctx.headers;
  if (!authorization) throw new Error('You must send the "Authorization" header');
  const [, token] = authorization.split(' ');

  if (token !== process.env.EXTERNAL_TOKEN) throw new Error('Invalid external token');

  await next();
}
