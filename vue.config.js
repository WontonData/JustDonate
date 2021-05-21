module.exports = {
  publicPath: './',
  // 输出文件目录
  outputDir: 'dist',
  assetsDir: 'static',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: false,
  runtimeCompiler: false,
  configureWebpack: {
    resolve: {
      //extensions: [],
      alias: {
        //"@": "src"
        "assets": "@/assets",
        "common": "@/common",
        "components": "@/components",
        "network": "@/network",
        "views": "@/views",
        "image": "@/assets/image",
        "heyi": "@/components/common/heyi",
        "store": "@/store"
      }
    }
  },
  // dev: {
    // Paths
    // proxyTable: {
    //   // 跨域处理
    //   '/api': {
    //     target: "http://localhost:8081/demo",
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    //
    // },
  // },
  // proxyTable: {
  //   '/api/':{                                // 要代理的接口名
  //     target:'https://api.51tracking.com',   // 要代理的接口地址
  //     changeOrigin:true,                            // 允许跨域
  //     pathRewrite:{'^/api/':''}            // 接口名重写
  //   }
  // },
  devServer: {
    open:false,
    hot:true,
    proxy: {
      "/api": {
        target: "https://api.51tracking.com",
        ws: true,
        // secure: false,
        pathRewrite: {
          "^/api": ""
        },
        changeOrigin: true,
        logLevel: "debug"
      }

    }
  }
}
