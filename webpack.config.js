const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const rootPath = resolve(__dirname, '.')
const srcPath  = resolve(rootPath, './src')
const distPath = resolve(rootPath, './dist')
const wasmDistPath  = resolve(rootPath, './target')

module.exports = {
  entry: {
    app: [
      resolve(srcPath, './index.js'),
    ],
  },
  output: {
    path: distPath,
    filename: 'js/[name].[hash].js',
  },

  module: {
    rules: [
    ],
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      '@wasm$': resolve(wasmDistPath, 'wasm32-unknown-unknown/release/webpack_wasm_skeleton.wasm'),
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve(distPath, './index.html'),
      template: resolve(rootPath, './index.html'),
      inject: true,
    }),
  ],
}
