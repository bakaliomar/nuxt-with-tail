'use strict'

import jwt from 'jsonwebtoken'
import config from 'config'

export default async (ctx, next) => {
  if(!ctx.header.authorization) {
    ctx.throw(401, 'should sign-in or sign-up to access this content')
  }
  // get the token
  const token = ctx.header.authorization.split(' ')[1]
  try {
    ctx.state.jwtPayload = jwt.verify(token, config.JWT_SECRET)
  } catch (err) {
    if (err.name === 'TokenExpiredError'){
      ctx.throw(401, err.message)
    }
    ctx.throw(403, err.message)
  }
  await next()
}