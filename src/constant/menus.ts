import * as React from 'react';
import DialogExample from '../components/dialog/demo/dialogExample';
import LayoutExample from '../components/layout/demo/layoutExample';
import ExampleTest from '../components/icon/demo';

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
    path: '/dialog',
    name: '对话框',
    component: DialogExample,
  },
  {
    path: '/layout',
    name: '布局',
    component: LayoutExample,
  },
];

export default menus;
