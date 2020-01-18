## React Hooks
### UseState

#### 每一次渲染都有它自己的...所有
如果`props`和`state`在不同的的渲染中是相互独立的，那么使用到它们的任何值也是独立的(包括事件处理函数)。它们都“属于”一次特定的渲染。

* 避免直接修改`state`,通过调用`setSomething(newObj)`的方式去生成一个新的对象而不是直接修改它是更好的选择，因为这样能保证之前渲染的`state`不会被污染
* 每一次渲染都有一个“新版本”的`handleAlertClick`。每一个版本的`handleAlertClick`“记住”了它自己的`count`。


#### `demo`对比
* [effect update](https://codesandbox.io/s/lyx20m1ol)
* [class update 1](https://codesandbox.io/s/kkymzwjqz3)
* [class update 2](https://codesandbox.io/s/w7vjo07055)

#### `effect`读取最新值
* 通过`refs`读取`effect`的回调函数里最新的值，而不是捕获的值(每次重新渲染对应的重新生成值)
* [effect 中的清理](https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/#%E9%82%A3effect%E4%B8%AD%E7%9A%84%E6%B8%85%E7%90%86%E5%8F%88%E6%98%AF%E6%80%8E%E6%A0%B7%E7%9A%84%E5%91%A2%EF%BC%9F):清除时的执行过程(如果你的代码需要依然可以访问到老的`props`)？
* [timer in effect](https://codesandbox.io/s/91n5z8jo7r)
   * 将`count`作为依赖项传入
   * `setCount((count) => count+1)`不再读取渲染中的`count`值，而是读取回调中传来的，这样可以移除依赖
* 调用一个新的`effect`之前会对前一个`effect`进行清理，而在`effect`被清理的时候，会执行`effect`传入的回调中返回的函数

#### `useReducer`
* 什么时候使用`useReducer`


#### 记录
* `bookmarks`: [https://overreacted.io/zh-hans/a-complete-guide-to-useeffect/#%E6%8A%8A%E5%87%BD%E6%95%B0%E7%A7%BB%E5%88%B0effects%E9%87%8C]
