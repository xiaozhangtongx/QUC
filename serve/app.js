// 导入express
const express = require('express')
// 创建服务器实例
const app = express()
// 服务端口号
const port = 9003
// 导入配置文件
const config = require('./utils/config')

// 处理跨域
// const cors = require('cors')
// app.use(cors())
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', config.allow_origin) //当允许携带cookies此处的白名单不能写’*’
  res.header('Access-Control-Allow-Headers', 'content-type,Content-Length, Authorization,Origin,Accept,X-Requested-With') //允许的请求头
  res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT') //允许的请求方法
  res.header('Access-Control-Allow-Credentials', true) //允许携带cookies
  next()
})

// 配置解析表单的中间件
const bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// 解析 token 的中间件
const expressJWT = require('express-jwt')
const veryToken = require('./utils/token')
app.use((req, res, next) => {
  let token = req.headers['authorization']
  if (token == undefined) {
    return next()
  } else {
    veryToken
      .verToken(token)
      .then((data) => {
        req.data = data
        return next()
      })
      .catch((error) => {
        return next()
      })
  }
})

// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
app.use(expressJWT({ secret: config.jwtSecretKey }).unless({ path: ['/api/login', '/api/register', '/api/getBlog', '/api/getRank'] }))

// 响应数据的中间件
app.use((req, res, next) => {
  // status = 0 为成功； status = 500 为失败； 默认将 status 的值设置为 500，方便处理失败的情况
  res.cc = function (err, status = 500) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})

// 导入并使用路由模块
const routes = require('./router/index')
routes(app)

// 错误中间件
app.use(function (err, req, res, next) {
  //当token失效返回提示信息
  if (err.status == 401) {
    return res.send({
      status: 401,
      message: 'token失效',
    })
  }
  // 捕获身份认证失败的错误
  if (err.name === 'UnauthorizedError') {
    return res.send({
      status: 403,
      message: '身份认证失败！',
    })
  }
  // 未知错误
  res.send({
    status: 500,
    message: err,
  })
})

// 2启动服务器
app.listen(port, () => console.log(`api server running at http://127.0.0.1:${port}`))
