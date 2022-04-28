// 导入config配置
const config = require('./config')
//用于生成和解析token
const jwt = require('jsonwebtoken')

exports.setToken = (userinfo) => {
  return new Promise((resolve, reject) => {
    const token = jwt.sign(userinfo, config.jwtSecretKey, { expiresIn: config.expiresIn })
    resolve(token)
  })
}

exports.verToken = (token) => {
  return new Promise((resolve, reject) => {
    let info = jwt.verify(token.split(' ')[1], config.jwtSecretKey)
    resolve(info)
  })
}
