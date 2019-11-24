## react-deep
make some ui component to dive in the usage of react

### `webpack`配置
> 社区优秀的脚手架: 
> * [TypeScript-React-Starter](https://github.com/microsoft/TypeScript-React-Starter)
> * [create-react-app](https://create-react-app.dev/docs/adding-typescript)

1. [如果打包一个库文件](https://webpack.js.org/guides/author-libraries/) 
    * umd: 通用模块定义
    
2. 如何将类型声明文件(`Type declaration files`)与打包文件结合

3. `React`即使没有在组件中使用到也要引入:`JSX`是为`React.createElement`提供的一个语法糖，所以只要使用`JSX`就需要引入`React`

4. 使用`TypeScript`书写`webpack`配置： [Configuration Languages](https://webpack.js.org/configuration/configuration-languages/#typescript)

5. 字面量中的尾逗号：[trailing comma](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Trailing_commas)

6. 配置`jest`测试环境： [ts-jest](https://github.com/kulshekhar/ts-jest),之后如果遇到问题去`Google`

### 函数式组件 vs 类组件

### `jest`测试环境配置
* 使用`enzyme`结合`ts-jest`进行测试
* 配置`fileMock`和`styleMock`

### 问题
1. `circle ci`没有执行测试用例
2. `awesome-typescript-loader`加了`options`后不会生成`.d.ts`文件
