const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

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
    clean: true,
    // 静态资源文件名
    assetModuleFilename: 'images/[contenthash][ext]'
  },
  // source-map定位错误信息
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      // 使用的html模板
      template: './index.html',
      // script插入的位置
      inject: 'body'
    }),
    new MiniCssExtractPlugin()
  ],
  devServer: {
    static: './dist'
  },
  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[contenthash][ext]'
        }
      },
      {
        test: /\.svg$/,
        type: 'asset/inline'
      },
      {
        test: /\.txt$/,
        type: 'asset/source'
      },
      // 通用资源类型，在导出一个data URI和发送一个单独的文件之间自动选择 asset
      {
        test: /\.jpg$/,
        type: 'asset',
        parser: {
          // 图片maxSize 资源或base64
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024
          }
        }
      },
      {
        test: /\.(css|less)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      }
    ]
  }
}
