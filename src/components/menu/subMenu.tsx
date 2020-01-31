import React, { FC, HTMLAttributes, ReactElement, useState } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './subMenu.scss';
import Icon from '../icon/icon';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  title: string;
}

const fixSc = fixedPrefixClasses('wui-sub-menu');
const sc = classes;
const SubMenu: FC<IProps> = (props) => {
  const [visible, setVisible] = useState(false);

  const onClickSubMenu = () => {
    setVisible(!visible);
  };
  return (
    <div className={sc(fixSc(), props.className)}>
      <div className={fixSc('title')} onClick={onClickSubMenu}>
        {props.title}
        <Icon className={fixSc(visible ? 'up' : 'down')} name="down"/>
      </div>
      {visible && props.children}
    </div>
  );
};

export default SubMenu;
