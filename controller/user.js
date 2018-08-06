const userModel = require('../model/user')

module.exports.login = async function (ctx, next) {
    await next()
    ctx.body = {
        name: '123'
    }
}

module.exports.sign = async function (ctx, next) {
    let {name, nickname, password, avator} = ctx.request.body
    avator = avator || ''
    const user = await userModel.findOne({
        name
    })
    if(user) {
        await next()
        ctx.body = {
            rs: 2,
            info: '用户名已经存在'
        }
    } else {
        const user = new userModel({
            name,
            nickname,
            password,
            avator,
            admin: false
        })
        const res = await user.save()
        await next()
        ctx.body = {
            rs: 1,
            info: null,
            data: res
        }
    }
}