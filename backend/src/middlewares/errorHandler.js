'use strict'

export default async (ctx,next) => {
try {
  await next()
} catch (err) {
  ctx.status = err.status || 500
  ctx.type = 'json'
  ctx.body = {
    status: ctx.status,
    message: err.message
  }
  ctx.app.emit('error', err, ctx)
}
}