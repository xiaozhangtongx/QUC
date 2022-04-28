// 导入user路由
const UserRouter = require('./user')

// 导入博文接口
const BlogRouter = require('./blog')

// 导入my路由
const MyRouter = require('./my')

// 导出路由
module.exports = (app) => {
  app.use('/api', UserRouter, BlogRouter)
  app.use('/api/my', MyRouter)
}
