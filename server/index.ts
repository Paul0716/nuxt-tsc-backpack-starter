import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import path from 'path'
import Log4js from 'koa-log4'
import AutoRoutes from './autoRoutes'
import logConfig from '../config/log4js'
import {Nuxt, Builder} from 'nuxt'
import dotenv from 'dotenv'
import Static from 'koa-static'
dotenv.config()
const app = new Koa()
app.use(bodyParser())
const logger = Log4js.getLogger('app')
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

const staticPath = './static'

app.use(Static(
  path.join( __dirname,  staticPath)
))


// 生成logs目录 && 加载配置文件 start
const logPath = path.join(__dirname, 'logs')
try {
  require('fs').mkdirSync(logPath)
} catch (err) {
  if (err.code !== 'EEXIST') {
    console.error('Could not set up log directory, error was: ', err)
    process.exit(1)
  }
}
Log4js.configure(logConfig, {cwd: logPath})
// 生成logs目录 && 加载配置文件 end

if (!config.dev) {
  app.use(Log4js.koaLogger(Log4js.getLogger('http'), {level: 'auto'}))
}

// Instantiate nuxt.js
const nuxt = new Nuxt(config)

// Build in development
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build().catch((e:any) => {
    console.error(e) // eslint-disable-line no-console
    process.exit(1)
  })
}

(AutoRoutes as any).auto(app)

app.use((ctx: any) => {
  ctx.status = 200 // koa defaults to 404 when it sees that status is unset
  return new Promise((resolve, reject) => {
    ctx.res.on('close', resolve)
    ctx.res.on('finish', resolve)
    nuxt.render(ctx.req, ctx.res, (promise:any) => {
      // nuxt.render passes a rejected promise into callback on error.
      promise.then(resolve).catch(reject)
    })
  })
})

app.use(async (ctx: any, next: any) => {
  ctx.Log4js = Log4js
  await next()
})

app.on('error', function (err: any, ctx: any) {
 logger.error('server error', err, ctx)
})

app.listen(port, host as any)
console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
