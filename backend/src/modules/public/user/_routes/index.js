'use strict'

import Router from 'koa-router'
import pool from 'core/database/mysql'
const router = new Router()

router.get('/', async (ctx, next) => {
  try {
    const users = await pool.query('SELECT `id`, `name`, `created_on` FROM `users`')
  } catch (err) {
    ctx.throw(500, err.sqlMessage)
  }
  ctx.type = 'json'
  ctx.body = users
})
export default router