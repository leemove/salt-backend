const koa = require('koa')
const mongoose = require('mongoose')
const cors = require('koa-cors')
const formidable = require('koa2-formidable')

const userRouter = require('./routes/user')
const indexRouter = require('./routes/index')
const app = new koa();


mongoose.connect('mongodb://localhost:27017/SALT')


app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

app.use(cors())
app.use(formidable())

app.use(async (ctx, next) => {
    console.log(ctx.request.method + '   ' + ctx.request.path)
    await next()
})

app.use(indexRouter.routes())
app.use(userRouter.routes())

app.listen(4000, () => {
    console.log('正在监听4000端口,http://localhost:4000')
})
