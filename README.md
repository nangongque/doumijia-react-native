# DouMiJia

豆米家

## 截图

## 运行

```
git clone https://github.com/DaiYz/NetEaseCloudMusic

yarn or npm install

react-native run-android

cd ios

pod install

react-native run-ios

```

## 项目结构

```
 ├── __test__                       // 自动化测试
 ├── android                        // android原生部分
 ├── ios                            // ios原生部分
 ├── node_modules                   // 项目依赖包
 ├── src
 │   ├── actions                    // app 入口组件
 │   ├── components                 // app 入口组件
 │   ├── containers                 // app 入口组件
 │   ├── contexts                   // app 入口组件
 │   ├── features                   // 业务相关的通用代码，包含抽象出来的 hooks， component， util
 │   │   └── xx
 │   │       ├── hooks.ts
 │   │       ├── component.tsx
 │   │       └── util.ts
 │   ├── hooks                     // 全局通用的 hooks 封装
 │   │   └── usexx
 │   │       └── index.ts
 │   ├── source                    // 资源文件
 │   │   └── images                // 静态图片资源
 │   │   └── svg                   // svg图片资源
 │   ├── locale                    // 本地化
 │   ├── native                    // ios,android 桥接的 js 端代码
 │   ├── pages                     // 页面， 每个页面单独建一个子目录
 │   │   └── xxpage
 │   │       ├── index.tsx
 │   │       ├── components        // 仅在页面中使用的组件
 │   │       └── logic.tsx         // 页面的数据拉取，事件逻辑
 │   │   └── index.ts              // 导出页面
 │   │
 │   ├── reducers                  // app 入口组件
 │   │
 │   ├── router                    // 路由注册
 │   │   ├── tabs                  // app 底部的 tab 注册
 │   │   ├── stacks                // app stack router 注册
 │   │   └── NavigationService     // 全局路由工具库， 方便在页面组件外调用
 │   ├── service                   // 后台请求服务
 │   │   └── apis                  // 服务器端接口封装
 │   ├── types                     // 全局类型
 │   │   └── xx.d.ts
 │   ├── ui                        // app 入口组件
 │   ├── util                      // 全局通用的工具函数
 │   ├── main.js                   // app 入口组件
 │   └──store.ts                   // app 入口组件
 ├── index.js                      // 项目注册入口文件
 ├── .babelrc                      // babel配置
 ├── .eslintrc.js                  // eslint配置
 ├── .prettierrc                   // prettier配置
 ├── package.json                  // 依赖
 ├── README.md                     // README
 ├── tsconfig.json                 // 依赖
 └── scripts   脚本代码
```

### To Be Continued
