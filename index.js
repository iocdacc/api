const Koa = require('koa')
const Router = require('@koa/router')
const cors = require('koa2-cors')
const fs=require("fs")
 
const app = new Koa()
const router = new Router()

app.use(cors())

router.all('/api/login', async (ctx, next) => {
  let {key, username, password} = ctx.request.query

  if (key === '666666') {
    ctx.body = fs.readFileSync(__dirname + '/json/login.json', 'utf-8')
  }else{
    if(username !== '123456' && password !== '123456') { // 账号密码错误返回登陆失败
      ctx.body = fs.readFileSync(__dirname + '/json/loginerror.json', 'utf-8')
    }else{
      ctx.body = fs.readFileSync(__dirname + '/json/login.json', 'utf-8')
    }
  }

})

app.use(router.routes())
app.use(router.allowedMethods())

app.use(ctx=>{
  if (ctx.response.status = 404) {
    ctx.body = 'api is null'
  }
})

app.listen(8888)