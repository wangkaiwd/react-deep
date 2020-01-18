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
