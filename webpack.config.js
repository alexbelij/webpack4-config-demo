const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

const extractSass = new ExtractTextPlugin({
  disable: process.env.NODE_ENV == 'development' ? true : false,
  filename: 'css/[name].[hash].css',
})

module.exports = {
  mode: 'development', // development|production
  entry: {        //入口文件，传入对象，定义不同的chunk
    index: './src/utils/index.js',
    utils: './src/utils/utils.js'
  },
  output: {
    //filename: 'main.js',  //此时因为有多个chunk，不能再只定义一个输出文件，
    filename: 'utils/[name].[hash].js',
    path: path.join(__dirname, './dist')
  }, // 输出配置
  module: { // 放置loader加载器，webpack本身只能打包commonjs规范的js文件，用于处理其他文件或语法
    rules:[
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'] // 从右到左，loader安装后无需引用可直接使用
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          fallback:'style-loader',
          use:['css-loader','sass-loader'],
          publicPath: '../'  // 抽离时设定publicPath
        })
        //默认取output.publicPath
        //publicPath的值会作为前缀附加在loaders生成的所有URL前面。
        // 比如样式中引用背景图片的images/cjl.jpg，如果设置了output.publicPath:"../"，那最终打包之后就会变成../images/cjl.jpg。

        // use: [
        //   {loader: 'style-loader'}, //负责内联
        //   {loader: 'css-loader'}, //负责处理其中的@import和url()
        //   {loader: 'sass-loader'} //sass编译，处理sass文件
        // ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 1024 * 3, //3KB以下的图片使用base64内联，不产生图片文件
            fallback: 'file-loader', //3k以上，用file-loader抽离（非必须，默认就是file-loader）
            name: '[name].[ext]?[hash]',// 文件名规则，默认是[hash].[ext]
            outputPath: 'images/', //输出路径
            publicPath: '' //可访问到图片的引用路径（相对/绝对）
          }
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,  //npm包不做处理
        include: /src/, //只处理SRC里面的
        use: {
          loader: 'babel-loader',
          options: {
            presets:['env','stage-2'] //[重要]顺序右到左，先处理高级或特殊语法
          }
        }
      }
    ],
  },
  plugins: [
    extractSass,
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      minify:{
        removeComments: true //删除注释
      },
      hash: true
    }),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/index.html',
      chunks:['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'works.html',
      template:'./src/works.html',
      chunks:['index','utils'],
    })
  ], // 插件，扩展功能
  // 以下内容进阶篇再涉及
  resolve: {}, // 为引入的模块起别名
  devServer: {
    contentBase:path.join(__dirname, 'dist'),
    publicPath: '/',
    compress:true,
    port:9000
  } // webpack-dev-server
};