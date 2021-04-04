'use strict'
import Router from 'koa-router'
import anime from 'modules/public/animes'
import login from 'modules/public/login'
import users from 'modules/public/user'

const router = new Router({
  prefix: '/public'
})

const modules = [anime, login, users]

for(let module of modules ) {
  router.use(module.routes(), module.allowedMethods())
}
export default router