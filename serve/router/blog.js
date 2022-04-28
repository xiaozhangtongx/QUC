const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数模块
const blogHandler = require('../model/blog')

// 获取资讯
router.post('/getBlog', blogHandler.getBlog)

// 将路由对象共享出去
module.exports = router
