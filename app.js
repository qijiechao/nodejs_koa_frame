const Koa = require('koa');
const app = new Koa();
const Myrouter = require('./routes/routers.js'); //引入外部路由

app.use(Myrouter.routes());

app.listen(8082,()=>{   
    console.log('服务已经启动...');
}); 