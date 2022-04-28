// 导入mysql模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
  host: '47.97.20.71',
  user: 'COE',
  password: 'xiaozhangtx',
  database: 'coe',
  port: 3306,
})

// 向外共享 db 数据库连接对象
module.exports = db
