import React, { FC, MouseEventHandler, UIEventHandler, useEffect, useRef, useState } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './scroll.scss';

interface IScrollProps extends React.HTMLAttributes<HTMLDivElement> {

}
const fixSc = fixedPrefixClasses('wui-scroll');
const sc = classes;
const Scroll: FC<IScrollProps> = ({ className, children, ...rest }) => {
  const [barHeight, setBarHeight] = useState(0);
  const [barTop, setBarTop] = useState(0);
  const [barVisible, setBarVisible] = useState(false);
  const innerRef = useRef<HTMLDivElement>(null!);
  const barRef = useRef<HTMLDivElement>(null!);
  const clickYRef = useRef(0);
  const timerRef = useRef<number | null>(null);
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
    setBarVisible(true);
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31065#issuecomment-446425911
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    timerRef.current = window.setTimeout(() => {
      setBarVisible(false);
    }, 1000);
  };
  const onSelectStart = (e: Event) => {
    e.preventDefault();
  };
  const onMouseMove = (e: MouseEvent) => {
    const { clientY } = e;
    const { top: innerTop, height } = innerRef.current.getBoundingClientRect();
    const barTop = clientY - innerTop - clickYRef.current;
    const maxTop = height - barRef.current.getBoundingClientRect().height;
    if (barTop > 0 && barTop < maxTop) {
      const scrollHeight = innerRef.current.scrollHeight;
      innerRef.current.scrollTop = barTop * scrollHeight / height;
    }
  };
  const onMouseDown: MouseEventHandler<HTMLDivElement> = (e) => {
    const { top } = e.currentTarget.getBoundingClientRect();
    const { clientY } = e;
    clickYRef.current = clientY - top;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('selectstart', onSelectStart);
  };
  const onMouseUp = (e: MouseEvent) => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('selectstart', onSelectStart);
  };
  return (
    <div
      className={sc(fixSc(), className)}
      {...rest}
    >
      <div
        ref={innerRef}
        className={fixSc('inner')}
        onScroll={onScroll}
      >
        {children}
      </div>
      {
        barVisible &&
        <div className={fixSc('track')}>
          <div
            ref={barRef}
            onMouseDown={onMouseDown}
            style={{ height: barHeight, transform: `translateY(${barTop}px)` }}
            className={fixSc('bar')}
          />
        </div>
      }
    </div>
  );
};

export default Scroll;
