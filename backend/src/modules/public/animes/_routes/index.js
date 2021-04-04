'use strict'

import Router from 'koa-router'
import pool from 'core/database/mysql'

const router = new Router()

router.get('/', async (ctx, next) => {
  try {
    var animes = await pool.query('SELECT a.*, e.* FROM episode e INNER JOIN anime a ON e.anime_id = a.id ')
  } catch (err) {
    ctx.throw(500,err.sqlMessage)
  }

  ctx.type = 'json'
  ctx.body = animes
})
export default router