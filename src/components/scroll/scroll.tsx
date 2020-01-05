import React, { FC, UIEventHandler, useEffect, useRef, useState } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './scroll.scss';
import getScrollBarWidth from './scrollBarWidth';

interface IScrollProps extends React.HTMLAttributes<HTMLDivElement> {

}
const fixSc = fixedPrefixClasses('wui-scroll');
const sc = classes;
const Scroll: FC<IScrollProps> = ({ className, children, ...rest }) => {
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, setBarTop] = useState(0);
  const innerRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    const scrollTop = innerRef.current.scrollTop;
    const scrollHeight = innerRef.current.scrollHeight;
    const { height } = innerRef.current.getBoundingClientRect();
    setBarHeight(height * height / scrollHeight);
    setBarTop(scrollTop * height / scrollHeight);
  }, []);
  const onScroll: UIEventHandler<HTMLDivElement> = (e) => {
    const scrollTop = innerRef.current.scrollTop;
    const scrollHeight = innerRef.current.scrollHeight;
    const { height } = innerRef.current.getBoundingClientRect();
    setBarTop(scrollTop * height / scrollHeight);
  };
  return (
    <div className={sc(fixSc(), className)} {...rest}>
      <div
        ref={innerRef}
        className={fixSc('inner')}
        onScroll={onScroll}
      >
        {children}
      </div>
      <div className={fixSc('track')}>
        <div
          style={{ height: barHeight, top: barTop }}
          className={fixSc('bar')}
        />
      </div>
    </div>
  );
};

export default Scroll;
