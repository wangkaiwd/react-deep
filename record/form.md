## `form`组件
### 如何设计一个`form`组件

思路：根据`json`动态生成`form`表单
```text
1. formData: 需要渲染的数据
2. fields: 表单生成对象

例： 
const formData = {username:'name', password:'word'}
const fields = [
  {name: 'username', label: '用户名', input:{type:text}},
  {name: 'password', label: '密码', input:{type:password}}
] 
```
