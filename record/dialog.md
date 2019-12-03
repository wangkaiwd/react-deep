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
