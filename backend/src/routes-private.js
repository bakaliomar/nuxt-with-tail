'use strict'

import Router from 'koa-router'
import anime from 'private/animes'
import authenticate from './middlewares/authenticate'

const router = new Router({
  prefix: '/private'
})

const modules = [anime]

for (let module of modules) {
  router.use(authenticate, module.routes(), module.allowedMethods())
}

export default router
