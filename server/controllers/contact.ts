import * as mail from '../mail/mailer'
import Router from 'koa-router'
const router = new Router()

router.post('/submit', async function (ctx:any, next) {
    mail.sendMail('edward.lim@redcypress.com.tw')
})

module.exports = router
