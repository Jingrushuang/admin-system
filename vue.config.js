const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //设置请求行
    open: true,
    proxy: 'http://vue.mengxuegu.com/pro-api'
  },
  lintOnSave: false
})
