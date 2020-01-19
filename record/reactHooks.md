## React Hooks
**学习`Hooks`的最关键点：改变`class`组件带给我们的思维模式**
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

函数作为依赖项： 
* `effects`的依赖项为函数：在每次更新`state`而重新渲染组件的时候会重新创建一个新的函数，所以依赖项每次都会变
* 如果某些函数仅在`effects`中调用，你可以把它们的定义移动`effect`中(取悦`react`)。原因：函数可能会在执行中添加其它依赖项，而这些依赖项需要在`effects`中进行添加
* 有些时候函数会被其它逻辑共用，为了防止重复而不能移动到`effects`中：
   * 如果函数没有使用到组件内的任何值，应该提取到组件外面去定义，这样可以自由复用
   * 包装成`useCallback hook`（没有使用到组件的任何值也可以）: 为函数添加了一层依赖项，使函数本身只在需要的时候才发生改变，而不是去掉对函数的依赖
   * `useCallback hook`包装后的函数传递到子组件中，也可以作为依赖项
* `class component`不能在`componentDidUpdate`中判断一个函数是否发生了变化，只能通过额外传递一个参数来标识函数是否发生了变化
* `class`组件中，函数属性本身并不是数据流的一部分。组件的方法中包含了可变的`this`。因此，即使我们只需要一个函数，我们也必须把一堆数据传递下去仅仅是为了做`diff`。我们无法知道传入的函数是否依赖状态，并且不知道它依赖的状态是否改变了
* 使用`useCallback`，函数完全可以参与到数据流中

#### `useReducer`
* 什么时候使用`useReducer`


#### 引用资料
* [How to fetch data with React Hooks](https://www.robinwieruch.de/react-hooks-fetch-data)
* [How Are Function Components Different from Classes](https://overreacted.io/how-are-function-components-different-from-classes/)
* [https://overreacted.io/react-as-a-ui-runtime/](https://overreacted.io/react-as-a-ui-runtime/)
* [Why Do React Hooks Rely on Call Order](https://overreacted.io/why-do-hooks-rely-on-call-order/)
* [JavaScript Closures: setTimeout Inside a For Loop](https://wsvincent.com/javascript-closure-settimeout-for-loop/)
* [This benchmark is indeed flawed](https://medium.com/@dan_abramov/this-benchmark-is-indeed-flawed-c3d6b5b6f97f)

