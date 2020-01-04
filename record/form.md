## `form`组件
### 如何设计一个`form`组件

#### `form`组件
1. 根据`fields`来渲染表单项
2. 根据`formData`来设置表单中`input`的`value`值，通过`onChange`来更改`formData`(这里涉及到受控组件和非受控组件)
3. 通过传入的`button`调用`submit`事件

#### 表单校验
1. `validator`的参数及返回值设计
2. 将错误展示到`form`表单项中


#### 异步校验

#### 代码优化
##### `zip`  
优化前：
```typescript
const zip = (values: [string, any][]) => {
  const result: { [key: string]: any[] } = {};
  values.map((item) => {
    const key = item[0], value = item[1];
    if (value === undefined) {return;}
    if (key in result) {
      result[key].push(value);
    } else {
      result[key] = [value];
    }
  });
  return result;
};
```
优化后(移除了多余的赋值以及`if else`语法)：
```typescript
const zip = (values: [string, any][]) => {
  const result: { [key: string]: any[] } = {};
  // 使用函数参数与数组的解构赋值结合使用
  values.map(([key, value]) => {
    if (value === undefined) {return;}
    result[key] = result[key] || []; // 不存在默认为数组，然后都可以使用push方法
    result[key].push(value);
  });
  return result;
};
```


### 问题
1. 如何为表单中某个单独项设置样式？
2. 如何兼容各种表单项(`select`,`checkbox`)？
3. 如何很好的兼容图片上传？


### `css`
* [`:last-child`](https://stackoverflow.com/questions/18995362/last-child-not-working-as-expected)
* [`what is the difference between first child and first of type`](https://stackoverflow.com/questions/24657555/what-is-the-difference-between-first-child-and-first-of-type)
* 不要写死高度，可以使用`line-height`来撑开父元素
* 使用`Table`来进行表单布局，保证`label`与`label`以及表单元之间对齐
* 使用`Table`之后会导致`margin`属性失效
* 相邻兄弟选择器([adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator))的巧妙使用: [demo](https://github.com/wangkaiwd/react-deep/blob/ecc99eeb164510c6a3e7157ba699a60706e0306a/src/components/form/form.scss#L26-L29)
