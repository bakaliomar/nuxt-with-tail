'use strict'
import Router from 'koa-router'
import anime from 'modules/public/animes'

const router = new Router({
  prefix: '/public'
})

const modules = [anime]

for(let module of modules ) {
  router.use(module.routes(), module.allowedMethods())
}
export default router