import React, { FC, HTMLAttributes, ReactElement } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './menu.scss';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  selectKey: string;
  onChangeSelectKey: (selectKey: string) => void;
}

const fixSc = fixedPrefixClasses('wui-menu');
const sc = classes;
const Menu: FC<IProps> = (props) => {
  const childrenWithProps = React.Children.map(props.children, (child) => {
    const { children, ...rest } = props;
    return React.cloneElement(child as ReactElement, rest);
  });
  return (
    <div className={sc(fixSc(), props.className)}>
      {childrenWithProps}
    </div>
  );
};

export default Menu;
