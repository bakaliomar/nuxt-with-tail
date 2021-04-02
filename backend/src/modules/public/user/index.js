'use strict'

import Router from 'koa-router'
import fetchUsers from './_routes'
import fetchUser from './_routes/fetch-user'

const router = new Router({
  prefix: '/users'
})

const routes = [fetchUsers, fetchUser]
for (let route of routes) {
  router.use(route.routes(), route.allowedMethods())
}

export default router