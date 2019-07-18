const path = require('path')

module.exports = {
  lintOnSave: false,

  outputDir: './docs',
  publicPath: './',

  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, './src/main.js'),
    }
  },

  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add(path.resolve(__dirname, './src'))

    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
  },
}
