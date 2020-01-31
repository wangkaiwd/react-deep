import React, { FC, HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';

interface IProps extends HTMLAttributes<HTMLDivElement> {

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
