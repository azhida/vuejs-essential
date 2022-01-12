const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vuejs-essential/dist/'
    : '/',

  // npm run build 打包输出的目录，默认 dist 目录， 打包到 docs 是为了在 github pages 上使用
  // outputDir: 'docs',

  configureWebpack: config => {
    config.plugins = [
      ...config.plugins,
      new CopyPlugin([
        { from: 'src/CNAME', to: '' }
      ]),
    ]
  },
}