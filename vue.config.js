module.exports = {
    configureWebpack: {
        devServer: {
          headers: { "Access-Control-Allow-Origin": "*" },
          port: 8888,
        }
      }
}