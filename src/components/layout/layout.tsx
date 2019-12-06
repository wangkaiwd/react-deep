import React, { HTMLAttributes, useMemo } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './layout.scss';

const fixSc = fixedPrefixClasses('wui-layout');
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Layout: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  const hasAside = useMemo(() => {
    if (Array.isArray(props.children)) {
      return props.children.some((item: any) => item.type.name === 'Aside');
    } else if (props.children) {
      return (props.children as any).type.name === 'Aside';
    } else {
      return false;
    }
  }, []);
  return (
    <div
      className={classes(fixSc(), className, hasAside ? fixSc('hasAside') : '')}
      {...rest}
    >
      {props.children}
    </div>
  );
};

export default Layout;
