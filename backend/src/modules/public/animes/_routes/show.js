'use strict'

import Router from 'koa-router'
import pool from 'core/database/mysql'

const router = new Router()

router.get('/:id', async (ctx, next) => {
  try {
    var anime = await pool.query('SELECT * FROM `anime` WHERE id = ?', [ctx.params.id])
  } catch (err) {
    ctx.throw(500, err.sqlMessage)
  }

  if(!anime) {
    ctx.status = 404
  }
})

export default router