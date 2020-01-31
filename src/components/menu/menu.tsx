import React, { FC, HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './menu.scss';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  selectKey: string;
}

const fixSc = fixedPrefixClasses('wui-menu');
const sc = classes;
const Menu: FC<IProps> = (props) => {
  return (
    <div className={sc(fixSc(), props.className)}>
      {props.children}
    </div>
  );
};

export default Menu;
