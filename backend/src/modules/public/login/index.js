'use strict'

import Router from 'koa-router'
import local from './_routes/local'

const router = new Router({
  prefix: '/login'
})

const routes = [local]

for (let route of routes) {
  router.use(route.routes(), route.allowedMethods())
}

export default router
