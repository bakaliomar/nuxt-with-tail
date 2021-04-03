'use strict'
import Router from 'koa-router'
import fetchAnimes from './_routes'
import fetchAnime from './_routes/show.js'

const router = new Router({prefix: '/anime'})

const routes = [fetchAnimes, fetchAnime]

for(let route of routes) {
  router.use(route.routes(), route.allowedMethods())
}
export default router