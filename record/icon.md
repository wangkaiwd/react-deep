## 知识点记录
1. 项目中使用`svg`字体图标：`svg-sprite-loader`(`webpack`插件)  
2. 如何使用`svg`文件：[组件代码](https://github.com/wangkaiwd/react-deep/blob/e5436cdeb2605992658e44fcfee5a91889ff6e01/src/components/icon/icon.tsx#L10-L12)
3. 导入所有的`svg`文件： [context module api](https://webpack.js.org/guides/dependency-management/#context-module-api)
4. 让`TypeScript`可以`import` `svg`文件：[importing other assets](https://webpack.js.org/guides/typescript/#importing-other-assets)
5. 展开属性(`spread attribute`): 
   ```js
   const props = {a:1,b:2,c:3};
   // 这里的{}表示里边的内容是`js`语法
   <div className="hh" {...props}>123</div>
   
   // 转义之后：
   React.createElement("div", {
     className: "hh",
     ...props
   }, "123");
   ```
