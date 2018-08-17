import Router from 'koa-router'
import path from 'path'
import fs from 'fs'
import dotenv from 'dotenv'
dotenv.config()

const router = new Router({prefix: process.env.BASE_URL || ''})
const autoRoutes: {[name:string]: any} = {}

autoRoutes['auto'] =  (app: any) => {
  const files = fs.readdirSync(path.join(__dirname, 'controllers'))
  const jsFiles = files.filter((f) => {
    return f.endsWith('.js')
  }, files).concat(files.filter((f) => {
    return f.endsWith('.ts')
  }, files))

  // controllers
  for (let f of jsFiles) {
    console.log(`import controller from file ${f}...`)
    const name = f.substring(0, f.length - 3)
    autoRoutes[name] = require('./controllers/' + f)
    router.use('/' + name, autoRoutes[name].routes(), autoRoutes[name].allowedMethods())
    app.use(autoRoutes[name].routes(), autoRoutes[name].allowedMethods())
  }
}
export default autoRoutes
