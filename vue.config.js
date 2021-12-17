module.exports = {
  configureWebpack: {
    externals: {
      jquery: "jQuery",
      lodash: {
        commonjs2: "lodash",
        commonjs: "lodash",
        amd: "lodash",
        root: "_", // 指向全局变量
      },
    },
  },
};
