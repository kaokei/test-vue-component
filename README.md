# test-component

## 使用方式

打包 Simple 组件

```
npx vue-cli-service build --target lib --name mySimple src/components/Simple.vue
```

浏览器直接打开根目录下的 demo.html 文件即可。

## 排除第三方依赖

注意需要在 vue.config.js 中配置 externals。

我们希望这些外部依赖应该在业务中自己添加依赖即可。

具体[参考这里](https://webpack.docschina.org/configuration/externals/)。

## 待办

需要调研如何使用 monorepo 的方式组织组件库，并且可以实现组件库的按需加载。
