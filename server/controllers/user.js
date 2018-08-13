/**
 * Created by wangyipeng on 2017/9/27.
 */
import services from '../../helper/services'
import { query }  from "../async-db"
import * as mail from '../mail/nodeMailerWithTamp'
const router = require('koa-router')()
router.get('/index', async function (ctx, next) {
  let advList = await services.local.getUserList()
  ctx.body = advList
})

router.get('/list', async function (ctx, next) {
 
/*
// access database demo
async function selectAllData( ) {
  let sql = 'SELECT * FROM db'
  let dataList = await query( sql )
  return dataList
}

async function getData() {
  let dataList = await selectAllData()
}

getData();*/
  ctx.body = [
    {
      name: 'yipeng', age: '29'
    },
    {
      name: 'yihang', age: '18'
    }
  ]
})

router.get('/mail', async function (ctx, next){

  mail.sendPasswordReset('edward.lim@redcypress.com.tw', 'Edward','Edward','http://yourdomain.com/some-password-links')

})

module.exports = router
