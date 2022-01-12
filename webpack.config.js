const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // 模式
  mode: 'development',
  // 入口
  entry: './src/index.js',
  output: {
    // 打包后的文件夹
    filename: 'bundle.js',
    // 打包后路径
    path: path.resolve(__dirname, './dist'),
    // 每次打包后清除原文件
    clean: true
  },
  // source-map定位错误信息
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      // 使用的html模板
      template: './index.html',
      // script插入的位置
      inject: 'body'
    })
  ],
  devServer: {
    static: './dist'
  }
}
