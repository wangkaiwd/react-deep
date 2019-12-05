## [`React.cloneElement`](https://reactjs.org/docs/react-api.html#cloneelement)
```jsx harmony
React.cloneElement(element,[props],[...children])
```
以`element`为样板克隆并返回一个新的`React`元素。返回元素的`props`是原始元素的`props`和新元素的`props`浅合并后的结果。新的`children`将会替换已经存在的`children`。来自于原始元素的`key`和`ref`会被保留。

`React.cloneElement`几乎等价于(原生`html`标签，自定标签应该不能这样用)：  
```jsx harmony
<element.type {...element.props} {...props}>{children}</element.type>
```

## 优化代码
> 在代码没有共性的时候要主动为代码创造共性

代码优化：
1. 整理共性,将公共部分提取函数
2. 函数提取技巧：
    1. 将不同部分通过参数传如
    2. 想办法在不影响功能的前提下通过增删代码构造相同结构
3. 使用提取函数依次实现旧有功能

## 知识点
1. 通过高阶函数实现`fixedPrefixClasses`(主要是写该函数时的思路)
2. 传送门：[`React.createPortal`](https://reactjs.org/docs/portals.html)
3. [`React`中动态生成组件](https://github.com/wangkaiwd/react-deep/blob/88d414f3e7972d2d7b07cb7a8b6cd6cca98bc0ea/src/components/dialog/dialog.tsx#L62-L65)
4. [通过闭包返回`api`](https://github.com/wangkaiwd/react-deep/blob/88d414f3e7972d2d7b07cb7a8b6cd6cca98bc0ea/src/components/dialog/dialog.tsx#L88)
5. [`React.cloneElement`使用案例](https://github.com/wangkaiwd/react-deep/blob/88d414f3e7972d2d7b07cb7a8b6cd6cca98bc0ea/src/components/dialog/dialog.tsx#L45)    
6. [函数式组件`defaultProps`推荐写法](https://github.com/microsoft/TypeScript/issues/27425#issuecomment-478004521)
