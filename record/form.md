## `form`组件
### 如何设计一个`form`组件

#### `form`组件
1. 根据`fields`来渲染表单项
2. 根据`formData`来设置表单中`input`的`value`值，通过`onChange`来更改`formData`(这里涉及到受控组件和非受控组件)
3. 通过传入的`button`调用`submit`事件

#### 表单校验
1. `validator`的参数及返回值设计
2. 将错误展示到`form`表单项中


### 问题
1. 如何为表单中某个单独项设置样式？
2. 如何兼容各种表单项(`select`,`checkbox`)？
3. 如何很好的兼容图片上传？