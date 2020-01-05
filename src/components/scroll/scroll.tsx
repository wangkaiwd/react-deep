import React, { EventHandler, FC, MouseEventHandler, UIEventHandler, useEffect, useRef, useState } from 'react';
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
  const barRef = useRef<HTMLDivElement>(null!);
  const clickYRef = useRef(0);
  useEffect(() => {
    const { scrollTop, scrollHeight } = innerRef.current;
    const { height } = innerRef.current.getBoundingClientRect();
    setBarHeight(height * height / scrollHeight);
    setBarTop(scrollTop * height / scrollHeight);
  }, []);
  const onScroll: UIEventHandler<HTMLDivElement> = (e) => {
    const { scrollTop, scrollHeight } = innerRef.current;
    const { height } = innerRef.current.getBoundingClientRect();
    setBarTop(scrollTop * height / scrollHeight);
  };
  const onMouseMove = (e: MouseEvent) => {
    const { clientY } = e;
    const { top: innerTop, height } = innerRef.current.getBoundingClientRect();
    const scrollHeight = innerRef.current.scrollHeight;
    const barTop = clientY - innerTop - clickYRef.current;
    const maxTop = height - barRef.current.getBoundingClientRect().height;
    if (barTop > 0 && barTop < maxTop) {
      innerRef.current.scrollTop = barTop * scrollHeight / height;
      document.body.removeEventListener('mouseup', onMouseUp);
      document.body.addEventListener('mouseup', onMouseUp);
    }
  };
  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    const { top } = e.currentTarget.getBoundingClientRect();
    const { clientY } = e;
    clickYRef.current = clientY - top;
    document.body.addEventListener('mousemove', onMouseMove);
  };
  const onMouseUp = (e: MouseEvent) => {
    document.body.removeEventListener('mousemove', onMouseMove);
    document.body.removeEventListener('mouseup', onMouseUp);
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
          ref={barRef}
          onMouseDown={onMouseDown}
          style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
          className={fixSc('bar')}
        />
      </div>
    </div>
  );
};

export default Scroll;
