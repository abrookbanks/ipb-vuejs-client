module.exports = {
    configureWebpack: {
      output: {
        filename: 'app.js'
      },
      optimization: {
        splitChunks: false
      }
    },
    css: {
        extract: false,
      }
  }