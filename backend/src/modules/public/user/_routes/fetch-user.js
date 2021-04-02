'use strict'

import Router from 'koa-router'
import pool from 'core/database/mysql'

const router = new Router()
router.get('/:id', async (ctx, next) => {
  const id =parseInt(ctx.params.id)
  try {
    const user = pool.query('SELECT `id`, `name`, `created_on` FROM `users` WHERE `id` ='+ id)
  } catch (err) {
    ctx.throw(500, err.sqlMessage)
  }
  if(!user){
    ctx.status = 404
  }
  else {
    ctx.type = 'json'
    ctx.body = user
  }
})
export default router