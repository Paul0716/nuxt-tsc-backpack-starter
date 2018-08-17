import Router from 'koa-router'
const router = new Router()

router.get('/reporter', async function (ctx: any, next) {
  let logger = ctx.Log4js.getLogger('reporter')
  logger.error(ctx.query.err)
  ctx.body = {result: 'ok'}
})

module.exports = router
