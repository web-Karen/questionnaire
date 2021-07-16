const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = { // 整体项目配置
  publicPath: './', // 部署应用包时的基本 URL
  outputDir: 'dist', // 打包输出目录
  filenameHashing: true, // 生成静态文件,包含hash,便于缓存
  runtimeCompiler: true, // 包含运行时编译器的Vue内核版本

  productionSourceMap: false, // 加速生产环境构建
  assetsDir: 'static', // 放置静态资源
  // devServer: {
  //     port: 8080, // 端口号
  //     host: 'localhost',
  //     https: false, // https:{type:Boolean}
  //     open: true, //配置自动启动浏览器
  //     proxy: {  // proxy代理设置
  //         '/app': {
  //             target: '',
  //             changeOrigin: true,
  //             pathRewrite: {
  //                 '^/app': ''
  //             }
  //         }
  //     }
  // },
  configureWebpack: { // 配置vue别名,方便webpack构建时需要不同的版本
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, 'src'),
        style: path.resolve(__dirname, 'src/assets/styles')
      }
    }
  },
  chainWebpack: (config) => { // webpack相关配置
    // 别名路径配置
    config.resolve.alias
      .set('@', resolve('src'))
      // .set('assets', resolve('src/assets'))
      // .set('components', resolve('src/components'))
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/styles/index.scss";'
      }
    },
    extract: (() => { // 提取css为单独的文件
      if (process.env.NODE_ENV === 'development') {
        return false
      } else {
        return true
      }
    })()
  }
}
