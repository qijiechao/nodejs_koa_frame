

async function getInfo(ctx){
    // console.log(ctx.query.name);//get请求
    // console.log(ctx.request.query.name); //posr请求
    console.log(ctx.request.query); //posr请求
    // ctx.body = 'Hello World！'
    ctx.response.body = 'Hello World！'
}

module.exports = {
    getInfo
}