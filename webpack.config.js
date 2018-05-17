let path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
let nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');


const moduleObj = {
      rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
    //   {
    //    test:/\.(s*)css$/,
    //    use:['style-loader','css-loader', 'sass-loader']
    //  },
     {
      test:/\.(s*)css$/,
      use: ExtractTextPlugin.extract({
              fallback:'style-loader',
              use:['css-loader','sass-loader'],
          })
     }
    ]
};

const client = {
  entry: {
    'client': './src/client/index.js'
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/public')
  },
  module: moduleObj,
  plugins: [
    new HtmlWebPackPlugin({
      template: 'src/client/index.html'
    }),
    new ExtractTextPlugin({
      filename:'app.bundle.css'
    })
  ]
}

const server = {
    entry: {
        'server': './src/server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: moduleObj,
    externals: [nodeExternals()]
}
module.exports = [client, server];
