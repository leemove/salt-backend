const router = require('koa-router')()


router.get('/', async (context, next) => {
    await next()
    context.body = '<h1>有盐 已经启动!</h1>'
})

module.exports = router