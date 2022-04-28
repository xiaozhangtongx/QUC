// 导入数据库操作模块
const db = require('../db/index')

// 导入配置文件
const config = require('../utils/config')

// 导入nanoid模块生成唯一的uid
const { nanoid } = require('nanoid')

// 导入bcrypt模块
const bcrypt = require('bcryptjs')

// 用token模块来生成 Token 字符串
const settokne = require('../utils/token')

// 注册用户处理函数
exports.register = (req, res) => {
  // 获取客户端提交到服务端的用户数据、
  const userinfo = req.body
  // 判断数据是否合法
  if (!userinfo.phonenum || !userinfo.password) {
    return res.cc('手机号或密码不能为空！')
  }
  // 查询用户是否存在
  const sql = 'SELECT * FROM USER WHERE user.`phonenum` = ?'
  db.query(sql, [userinfo.phonenum], (err, results) => {
    // 执行 SQL 语句失败
    if (err) {
      return res.cc(err)
    }
    // 手机号被占用
    if (results.length > 0) {
      return res.cc('手机号被占用，请更换其他手机号！')
    }
    // 对用户的密码,进行 bcrype 加密，返回值是加密之后的密码字符串
    userinfo.password = bcrypt.hashSync(userinfo.password, 10)
    // 定义插入用户的 SQL 语句
    const sql = 'insert into user set ?'
    db.query(sql, { uid: nanoid(9), username: userinfo.username, password: userinfo.password, phonenum: userinfo.phonenum }, (err, results) => {
      // 执行 SQL 语句失败
      if (err) return res.send({ status: 500, message: err.message })
      // SQL 语句执行成功，但影响行数不为 1
      if (results.affectedRows !== 1) {
        return res.cc('注册用户失败，请稍后再试！')
      }
      // 注册成功
      res.cc('注册成功！', 200)
    })
  })
}

// 登录的处理函数
exports.login = (req, res) => {
  // 接受表单的数据
  const userinfo = req.body
  // 定义SQL语句
  const sql = `select * from user where user_phone_num=?`
  db.query(sql, userinfo.phoneNum, (err, results) => {
    console.log(results)
    // 执行 SQL 语句失败
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1
    if (results.length !== 1) return res.cc('该用户不存在，请稍后再试')
    // 拿着用户输入的密码,和数据库中存储的密码进行对比
    const compareResult = results[0].user_password == userinfo.password
    // 如果对比的结果等于 false, 则证明用户输入的密码错误
    if (!compareResult) {
      return res.cc('密码输出错误，请稍后再试')
    }

    // TODO：登录成功，生成 Token 字符串
    // 剔除完毕之后，user 中只保留了用户的 id, username,phonenum 这三个属性的值
    const user = { ...results[0], user_password: '', user_status: '', is_admin: '' }

    // 生成 Token 字符串
    settokne.setToken(user).then((value) => {
      res.send({
        status: 200,
        message: '登录成功！',
        data: {
          token: value,
          userInfo: user,
        },
      })
    })
  })
}

// 退出登录
exports.logout = (req, res) => {
  // 清除session
  req.session.destroy()
  res.send({
    status: 200,
    message: '退出登录成功',
  })
}

// 获取用户排名
exports.getRank = (req, res) => {
  const sql = `SELECT user_name,user_avatar,user_score FROM user ORDER BY user_score DESC limit 6 `
  db.query(sql, (err, results) => {
    if (err) return res.cc(err)
    // 执行 SQL 语句成功，但是查询到数据条数不等于 1
    else {
      res.send({
        status: 200,
        message: '数据加载成功！',
        data: {
          rankList: results,
        },
      })
    }
  })
}
