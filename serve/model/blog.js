// 导入数据库操作模块
const db = require('../db/index')

// 导入nanoid模块生成唯一的uid
const { nanoid } = require('nanoid')

// 获取博文内容的处理函数
exports.getBlog = (req, res) => {
  // 接受表单的数据
  const blogInfo = req.body
  // 定义SQL语句
  const sql = `SELECT  * FROM blog,type WHERE blog.type_id=type.type_id AND type.type_name = ? ORDER BY upload_time  LIMIT ?`
  db.query(sql, [blogInfo.type_name, blogInfo.limit], (err, results) => {
    res.send({
      status: 200,
      message: '数据加载成功！',
      data: results,
    })
  })
}

// 的处理函数
exports.getPolicy = (req, res) => {
  // 定义SQL语句
  const sql = `SELECT  blog.blog_id,blog.blog_title,url.url_name FROM blog,type,blog_url,url WHERE blog.type_id=type.type_id AND type.type_name = '政策' AND blog.blog_id=blog_url.blog_id AND blog_url.url_id=url.url_id`
  db.query(sql, req.body, (err, results) => {
    console.log(results)
    res.send({
      status: 200,
      message: '数据加载成功！',
      data: results,
    })
  })
}
