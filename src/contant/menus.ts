import IconExample from '../components/icon/demo/iconExample';
import * as React from 'react';
import DialogExample from '../components/dialog/demo/dialogExample';

interface MenusProp {
  path: string;
  component: React.FunctionComponent;
  name: string;
}
const menus: MenusProp[] = [
  {
    path: '/icon',
    name: '图标',
    component: IconExample,
  },
  {
    path: '/dialog',
    name: '对话框',
    component: DialogExample,
  },
];

export default menus;
