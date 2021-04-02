'use strict'

export default async (ctx, next) => {
  await next()
  if(ctx.status === 404) {
    ctx.throw(404, 'Not found')
  }
}