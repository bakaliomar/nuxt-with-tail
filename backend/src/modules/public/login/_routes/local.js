'use strict'

import Router from 'koa-router'
import jwt from 'jsonwebtoken'
import  bcrypt from 'bcryptjs'
import pool from 'core/database/mysql'
import config from 'config'

const router = new Router()

router.post('/login', async (ctx, next) => {
  let request = ctx.request.body || {}
   if(request.username === undefined) {
     ctx.throw(400, 'username param is required')
   }
   if(request.username === '') {
     ctx.throw(400, 'username is required')
   }
   if(request.password === undefined) {
     ctx.throw(400, 'password param is required')
   }
   if(request.password === '') {
     ctx.throw(400, 'password is required')
   }

   let username = request.username
  let password = request.password
  let users = []

  try {
    users = await pool.query('SELECT * FROM `users` WHERE username = ?', [username])
  } catch (err) {
    ctx.throw(400, err.sqlMessage)
  }
   if(users.length === 0) {
     ctx.throw(404, 'user not found')
   }
   let user = users[0]
  let match = false

  try {
    match = await bcrypt.compareSync(password, user.password)
  } catch (err) {
    ctx.throw(401, err)
  }
   if(match === false) {
     ctx.throw(401, 'invalid password')
   }

   let payload = { name: user.name, email: user.email }
   let token = jwt.sign(payload, config.JWT_SECRET, {expiresIn: 1 * 60})
  ctx.body = {
     user: payload,
    message: 'logged in ok',
    token: token
  }
})
export default router