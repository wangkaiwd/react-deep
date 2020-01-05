import React, { FC } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './scroll.scss';
import getScrollBarWidth from './scrollBarWidth';

interface IScrollProps extends React.HTMLAttributes<HTMLDivElement> {

}
const fixSc = fixedPrefixClasses('wui-scroll');
const sc = classes;
const Scroll: FC<IScrollProps> = ({ className, children, ...rest }) => {
  return (
    <div className={sc(fixSc(), className)} {...rest}>
      <div className={fixSc('inner')}>
        {children}
      </div>
    </div>
  );
};

export default Scroll;
