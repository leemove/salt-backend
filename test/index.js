const request = require('request-promise')
const should = require('should')

describe('应用', function () {
    it('应用必须启动', async function () {
        const res = await request('http://localhost:4000')
        should.exist(res)
    })
})