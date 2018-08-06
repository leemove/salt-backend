const router = require('koa-router')()
const userController = require('../controller/user')

router.prefix('/api/user')

router.post('/login', userController.login)

module.exports = router