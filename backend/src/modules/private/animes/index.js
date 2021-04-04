'use strict'

import Router from 'koa-router'
import fetchAnimes from './_router'

const router = new Router({
  prefix: '/anime'
})

const routes = [fetchAnimes]

for (let route of routes) {
  router.use(route.routes(), route.allowedMethods())
}

export default router
