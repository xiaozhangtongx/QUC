// 导入数据库操作模块
const db = require('../db/index')

// 导入nanoid模块生成唯一的uid
const { nanoid } = require('nanoid')

// 登录的处理函数
exports.getBlog = (req, res) => {
  console.log(req)
  // 接受表单的数据
  const userinfo = req.body
  console.log(userinfo)
  // 定义SQL语句
  const sql = `SELECT  * FROM blog,type WHERE blog.type_id=type.type_id AND type.type_name = ? ORDER BY upload_time  LIMIT 8`
  db.query(sql, '资讯', (err, results) => {
    // console.log(results)
    res.send({
      status: 200,
      message: '数据加载成功！',
      data: results,
    })
  })
}
