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
    document.body.removeEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseup', onMouseUp);
  }
};

const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
  const { top } = e.currentTarget.getBoundingClientRect();
  const { clientY } = e;
  clickYRef.current = clientY - top;
  document.body.addEventListener('mousemove', onMouseMove);
};
```
