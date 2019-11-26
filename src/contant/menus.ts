import IconExample from '../example/icon/iconExample';
import * as React from 'react';

interface MenusProp {
  path: string;
  component: React.FunctionComponent;
  name: string;
}
const menus: MenusProp[] = [
  {
    path: '/icon',
    name: 'Icon',
    component: IconExample,
  },
];

export default menus;
