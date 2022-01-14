const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const toml = require('toml')
const yaml = require('yaml')
const json5 = require('json5')

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
    new MiniCssExtractPlugin({
      filename: 'styles/[contenthash].css'
    })
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader'
      },
      {
        test: /\.xml$/,
        use: 'xml-loader'
      },
      {
        test: /\.toml$/,
        type: 'json',
        parser: {
          parse: toml.parse
        }
      },
      {
        test: /\.yaml$/,
        type: 'json',
        parser: {
          parse: yaml.parse
        }
      },
      {
        test: /\.json5$/,
        type: 'json',
        parser: {
          parse: json5.parse
        }
      }
    ]
  },

  // 优化
  optimization: {
    minimizer: [new CssMinimizerPlugin()]
  }
}
