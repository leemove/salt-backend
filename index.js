const koa = require('koa')
const mongoose = require('mongoose')
const cors = require('koa-cors')
const userRouter = require('./routes/user')

const app = new koa();


mongoose.connect('mongodb://localhost:27017/SALT')



app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
});

app.use(cors())

app.use(async (ctx, next) => {
    console.log(ctx.request.method + '   ' + ctx.request.path)
    await next()
})


app.use(userRouter.routes())

app.listen(4000, () => {
    console.log('正在监听4000端口,http://localhost:4000')
})
