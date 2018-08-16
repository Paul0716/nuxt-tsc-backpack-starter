import NewsService from '../services/news'
import Router from 'koa-router'

const router = new Router()
const newsService = new NewsService()

router.post('/getnews', async (ctx: any, next) => {
    ctx.body = newsService.getNews(ctx.request.body.id)
})
  
module.exports = router