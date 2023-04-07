export default async function errorHandler(ctx, next) {
    try {
        await next();
    } catch(err) {
        ctx.body = {
            err: err.message,
        };
    }
}