module.exports = {
  // publicPath: '/test',
  css: {
    sourceMap: true
  },
  chainWebpack: config => {
    config.module.rules.delete('eslint')
  },
  //  publicPath: process.env.NODE_ENV === 'production'
  //   ? '/easydemo/'
  //   : '/'

   

  //  publicPath: process.env.NODE_ENV === 'production'
  //   ? '/'
  //    : 'http://easy2donew.yummydesign.com.tw:80/test/',

 publicPath: process.env.NODE_ENV === 'production'
    ? 'http://easy2do.yummydesign.com.tw/'
    : '/'


  // assetsDir: '../site_easy2do/',
  // api路徑
  // devServer: {
  //   proxy: {
  //     api: {
  //       target:
  //         // process.env.NODE_ENV === "production"
  //         //   ? "/"
  //         //   : "http://easy2do.yummydesign.com.tw:8081/",
  //         // target:
  //         process.env.NODE_ENV === 'production'
  //           ? '/'
  //           : 'http://easy2do.kiiiick.com/',
  //       ws: true,
  //       changeOrigin: true
  //     }
  //   }
  // }
}
