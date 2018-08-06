const request = require('request-promise')
const should = require('should')

describe('用户模块', function () {
    let name = new Date()
    name = name.toISOString().slice(0, 14)
    it('用户注册不存在的用户名', async function () {
        const user = {
            name,
            nickname: '测试昵称',
            password: '123456',
            avator: ''
        }
        const res = await request.post('http://localhost:4000/api/user/sign', {
            json: user
        })
        should(res.rs).eql(1)
    })
    it('注册已经存在的用户名', async function () {
        const user = {
            name,
            nickname: '测试昵称',
            password: '123456',
            avator: ''
        }
        const res = await request.post('http://localhost:4000/api/user/sign', {
            json: user
        })
        should(res.rs).eql(2)
    })
})