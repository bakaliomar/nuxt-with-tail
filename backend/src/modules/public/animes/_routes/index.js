'use strict'

import Router from 'koa-router'
import pool from 'core/database/mysql'

const router = new Router()

router.get('/', async (ctx, next) => {
  try {
    var animes = await pool.query('SELECT * FROM `episode` inner join `anime` on episode.anime_id = anime.id ')
  } catch (err) {
    ctx.throw(500,err.sqlMessage)
  }

  ctx.type = 'json'
  ctx.body = animes
})
export default router