'use strict'
export default async (ctx, next) => {
  await next()
  if(ctx.status === 200){
    ctx.body = {
      status: 200,
      data: ctx.body
    }
  }
}