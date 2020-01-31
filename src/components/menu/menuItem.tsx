import React, { FC, HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './menuItem.scss';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
}

const fixSc = fixedPrefixClasses('wui-menu-item');
const sc = classes;
const MenuItem: FC<IProps> = (props) => {
  return (
    <div className={sc(fixSc(), props.className)}>
      {props.children}
    </div>
  );
};

export default MenuItem;
