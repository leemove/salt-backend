const userModel = require('../model/user')

module.exports.login = async function (ctx, next) {
    await next()
    ctx.body = {
        name: '123'
    }
}

module.exports.signup = async function (ctx, next) {
    let {name, nickname, password, avator} = ctx.body
    avator = avator || ''
    const user = new userModel({
        name,
        nickname,
        password,
        avator,
        admin: false
    })
}