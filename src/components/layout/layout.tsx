import React, { HTMLAttributes, ReactElement, useMemo } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './layout.scss';
import Aside from './aside';

const fixSc = fixedPrefixClasses('wui-layout');
interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactElement | ReactElement[];
}
const Layout: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  const hasAside = useMemo(() => {
    const childrenComponents = Array.isArray(props.children) ? props.children : [props.children];
    // todo: 这里为什么要用类型断言？
    return childrenComponents.some((item) => (item as ReactElement).type === Aside);
  }, []);
  return (
    <div
      className={classes(fixSc(), className, fixSc({ hasAside }))}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Layout;
