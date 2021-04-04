'use strict'

import Router from 'koa-router'
import pool from 'core/database/mysql'

const router = new Router()

router.get('/', (ctx, next) => {
  try {
    var animes = pool.query('SELECT a.* FROM `episode` as e inner join `anime` as a on e.anime_id = a.id')
  } catch (err) {
    ctx.throw(500, err.sqlMessage)
  }
  ctx.type = 'json'
  ctx.body = animes
})
export default router
