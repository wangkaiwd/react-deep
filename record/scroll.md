## `scroll`组件
### 查看开源代码源码技巧(`WebStorm`)
> 查看源代码之前先看一下库如何使用

1. 使用`collapse all`折叠所有代码
2. 通过`structure`来查看整体代码结构

### 原生`DOM`方法复习
`DOM`对象：
1. `offsetHeight`
2. `scrollTop`
3. `scrollHeight`
4. `getBoundingClientRect`

阅读资料：
* [coordinates](https://javascript.info/coordinates)
* [Determining the dimensions of elements](https://developer.mozilla.org/zh-CN/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)

鼠标事件对象：
1. `pageX`
2. `clientX`
3. [`target` vs `currentTarget`](https://stackblitz.com/edit/target-vs-current-target)

`TypeScript`的`addEventListener`监听事件时的类型与`react`绑定事件的类型不一致：[not assignable type for event listener](https://stackoverflow.com/questions/57515417/not-assignable-type-for-event-listener)  
该问题的解决需要结合类型断言:  
```typescript jsx
// 1. 这里要使用原生js的TypeScript提供的类型: MouseEvent
// 2. 如果函数中要使用target或currentTarget的话需要断言
//    如：(e.currentTarget as HTMLDivElement).getBoundingClientRect()
const onMouseMove = (e: MouseEvent) => {
  const { clientY } = e;
  const { top: innerTop, height } = innerRef.current.getBoundingClientRect();
  const scrollHeight = innerRef.current.scrollHeight;
  const barTop = clientY - innerTop - clickY.current;
  const maxTop = height - barRef.current.getBoundingClientRect().height;
  if (barTop > 0 && barTop < maxTop) {
    innerRef.current.scrollTop = barTop * scrollHeight / height;
    document.removeEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseup', onMouseUp);
  }
};

const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
  const { top } = e.currentTarget.getBoundingClientRect();
  const { clientY } = e;
  clickYRef.current = clientY - top;
  document.addEventListener('mousemove', onMouseMove);
};
```

### 事件绑定
1. 在组件加载完成后，为对应的元素绑定事件，在组件销毁的时候移除绑定
    ```text
    使用`useEffect`在`DOM`加载完成后绑定`mousemove`和`mouseup`事件
    ```
2. 在需要的时候绑定事件，不需要的时候移除绑定
    ```text
    1.在鼠标按下的时候，在满足对应条件的时候绑定鼠标移动事件和鼠标弹起事件
    2.在鼠标弹起的时候，移除鼠标弹起事件和鼠标移动事件
    ``` 

方法2的优点：只在需要的时候才进行事件绑定，防止多余的事件绑定

方法1的优化：实现上相对简单一些，但需要一个全局变量来进行控制什么时候触发`move`事件

大多数情况下使用方法1即可，要求较为严格时使用方法2

### 禁止选择文本
* [disable text select](https://stackoverflow.com/questions/16805684/javascript-disable-text-select)

1. `selectstart`: 用户开始选择文本时触发
2. [Browser default actions](https://javascript.info/default-browser-action)
