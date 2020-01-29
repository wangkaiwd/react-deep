## 城市选择组件
### 实现过程整理
* 获取当前城市： 通过接口: https://api.qzone.work/api/ip.address
* 城市列表以及对应的首字母：
    1. 接口获取
    2. 通过[`pinyin`](https://github.com/hotoo/pinyin)库来进行转化，之后排序组合成想要的内容
* 页面样式实现

学习正则：可以用来方便的过滤内容

### 知识点
* [对象遍历顺序](https://es6.ruanyifeng.com/#docs/object#%E5%B1%9E%E6%80%A7%E7%9A%84%E5%8F%AF%E6%9E%9A%E4%B8%BE%E6%80%A7%E5%92%8C%E9%81%8D%E5%8E%86)
* [Does JavaScript Guarantee Object Property Order?](https://stackoverflow.com/questions/5525795/does-javascript-guarantee-object-property-order)
* [Clearfix: A Lesson in Web Development Evolution](https://css-tricks.com/clearfix-a-lesson-in-web-development-evolution/)

### css
* 清除浮动
* `border`会占据位置，必要时候可以使用`::after`,`::before`来实现`border`的效果
