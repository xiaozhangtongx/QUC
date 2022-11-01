// 导入mysql模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
  host: 'xxxx',
  user: 'xxx',
  password: 'xxx',
  database: 'xxx',
  port: 3306,
})

// 向外共享 db 数据库连接对象
module.exports = db
