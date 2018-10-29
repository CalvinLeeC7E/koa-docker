const router = require('koa-router')
const Index = require('../controllers/index')

exports.index = router({prefix: '/'})
  .get('test', Index.test)
