var webpack = require('webpack')
module.exports = {
  publicPath: './',
  runtimeCompiler: true,
  // 处理CSS
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true,
      },
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
  },
  // 关闭ESLINT校验工具
  lintOnSave: false,
  // 设置端口号
  devServer: {
    open: process.platform === 'vue',
    host: '127.0.0.1',
    port: 9000,
    https: false,
    hotOnly: false,
    // 处理跨域
    proxy: {
      '/inter': {
        target: 'http://127.0.0.1:9002',
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      },
      // 获取笑话接口api
      '/outer': {
        target: 'https://www.mxnzp.com', //笑话接口地址
        secure: false, // false为http访问，true为https访问
        changeOrigin: true, // 跨域访问设置，true代表跨域
        // pathRewrite: {
        //   // 路径改写规则
        //   '^/outer': '', // 以/proxy/为开头的改写为''
        // },
      },
      // 阿里云oss桶api
      '/oss': {
        target: 'https://qucs.oss-cn-hangzhou.aliyuncs.com',
        secure: false,
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          // 路径改写规则
          '^/oss': '', // 以/proxy/为开头的改写为''
        },
      },
      '/upload': {
        target: 'http://www.kepu.gov.cn/upload',
        secure: false,
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          // 路径改写规则
          '^/upload': '', // 以/proxy/为开头的改写为''
        },
      },
    },
    disableHostCheck: true,
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'windows.jQuery': 'jquery',
      }),
    ],
  },
}
