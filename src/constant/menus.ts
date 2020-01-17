import * as React from 'react';
import DialogExample from '../components/dialog/demo/dialogExample';
import LayoutExample from '../components/layout/demo/layoutExample';
import ExampleTest from '../components/icon/demo';
import FormExample from '../components/form/demo/formExample';
import ButtonExample from '../components/button/demo/buttonExample';
import InputExample from '../components/input/demo/inputExample';
import ScrollExample from '../components/scroll/demo/scrollExample';
import MenuExample from '../components/menu/demo/menuExample';

interface MenusProp {
  path: string;
  component: React.FunctionComponent;
  name: string;
}
const menus: MenusProp[] = [
  {
    path: '/icon',
    name: '图标',
    component: ExampleTest,
  },
  {
    path: '/button',
    name: '按钮',
    component: ButtonExample,
  },
  {
    path: '/input',
    name: '输入框',
    component: InputExample,
  },
  {
    path: '/dialog',
    name: '对话框',
    component: DialogExample,
  },
  {
    path: '/layout',
    name: '布局',
    component: LayoutExample,
  },
  {
    path: '/form',
    name: '表单',
    component: FormExample,
  },
  {
    path: '/scroll',
    name: '滚动条',
    component: ScrollExample,
  },
  {
    path: '/menu',
    name: '导航菜单',
    component: MenuExample,
  },
];

export default menus;
