'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const OptimizeAssetPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

const utils = require('./utils')

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': utils.resolve('src'),
      assets: utils.resolve('assets'),
      components: utils.resolve('src/components'),
      helper: utils.resolve('src/helper'),
      mixins: utils.resolve('src/mixins'),
      pages: utils.resolve('src/pages'),
      router: utils.resolve('src/router'),
      static: utils.resolve('static'),
      store: utils.resolve('src/store')
    }
  },
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            compact: 'false'
          }
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('img/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('media/[name].[hash:7].[ext]')
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
          }
        }
      }
    ]
  },
  optimization: {
    minimizer: [
      new UglifyPlugin({
        cache: true,
        parallel: true,
        uglifyOptions: {
          mangle: {
            keep_fnames: true
          }
        }
      })
    ]
  },
  plugins: [
    new OptimizeAssetPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new VueLoaderPlugin(),
    new CopyWebpackPlugin([
      {
        from: utils.resolve('static/img'),
        to: utils.resolve('dist/static/img'),
        toType: 'dir'
      }
    ])
  ]
}
