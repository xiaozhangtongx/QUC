const express = require('express')
// 创建路由对象
const router = express.Router()

// 测试
router.get('/test', (req, res) => {
  res.send({
    status: 200,
    message: 'test',
    data: {
      name: 'my',
    },
  })
})

// 将路由对象共享出去
module.exports = router
