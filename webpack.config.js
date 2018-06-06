let path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
let nodeExternals = require('webpack-node-externals');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var package     = require('./package.json');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const moduleObj = {

      rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
    // Loaders use works in reverse order means first sass-loader then css-loader then style-loader
    //   {
    //    test:/\.(s*)css$/,
    //    use:['style-loader','css-loader', 'sass-loader']
    //  },
    // For CSS ore processor
     {
      test:/\.(s*)css$/,
      use: ExtractTextPlugin.extract({
              fallback:'style-loader',
              use:['css-loader','sass-loader'],
          })
     },
     // For Image Handing
     {
            test: /\.(png|jp(e*)g|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
                }
            }]
        }
    ]
};

const client = {
  mode: 'development',
  entry: {
    'client': './src/client/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist/public/'),
    publicPath: '/'
  },
  target: 'web',
  resolve: { extensions: [".js", ".ts"] },
  module: moduleObj,
  devServer: {
   contentBase: path.join(__dirname, "./dist/public/"),
   port: 9002,
   historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      hash: true,
      filename: 'index.html',
      title: 'My Awesome application',
      template: 'src/client/index.html',
      path: path.join(__dirname, "../dist/public/"),
    }),
    new ExtractTextPlugin({
      filename:'app.bundle.css'
    }),
    new CopyWebpackPlugin([
            {from:'src/client/assets/',to:'assets'}
    ]),
  ]
}

const server = {
    entry: {
        'server': './src/server/index.js'
    },
    target: 'node',
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist/')
    },
    module: moduleObj,
    externals: [nodeExternals()]
}
module.exports = [client, server];
