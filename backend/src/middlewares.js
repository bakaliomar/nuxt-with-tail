'use strict'
import serve from 'koa-static'
import favicon from 'koa-favicon'
import bodyparser from 'koa-bodyparser'
import routesPublic from './routes-public'
// import routesPrivate from './routes-private'
import errorHandler from './middlewares/errorHandler'
import notFound from './middlewares/notFound'
import okOutput from './middlewares/okOutput'

export default (app) => {
  app.use(serve('assets'))
  app.use(favicon('static/favicon.ico'))
  app.use(bodyparser())
  app.use(errorHandler)
  app.use(notFound)
  app.use(okOutput)
  app.use(routesPublic.routes(), routesPublic.allowedMethods())
  // app.use(routesPrivate.routes(), routesPrivate.allowedMethods())
}