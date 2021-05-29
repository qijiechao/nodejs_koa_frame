const Router = require('koa-router'); // 引入koa-router
const router = new Router(); // 创建路由，支持传递参数
const API = require('../api')

// router.get('/',async (ctx) => {
//     ctx.response.body = "hi 首页123"; //返回数据  相当于 res.writeHead()  res.end()
//   });

router.post('/index',API.getInfo)

module.exports = router