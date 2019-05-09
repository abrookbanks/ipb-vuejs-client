module.exports = {
    configureWebpack: {
      output: {
        filename: 'ipb-vuejs-client.js'
      },
      optimization: {
        splitChunks: false
      }
    },
    css: {
        extract: false,
      }
  }