const prod = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: prod ? "https://gideongrossmanhome.github.io/artist_quicklinks/" : "http://localhost:8080/",
  lintOnSave: false,
  chainWebpack: config => {
    config.module.rules.delete("svg");
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.svg$/, 
          loader: 'vue-svg-loader', 
        },
      ],
    }      
  }
}
