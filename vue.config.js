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
    // proxy: {
    //   '/api': {
    //     target: 'http://127.0.0.1:9002',
    //     changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
    //   },
    // },
    disableHostCheck: true,
  },
}
