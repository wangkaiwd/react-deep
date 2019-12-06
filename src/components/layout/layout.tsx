import React, { HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './layout.scss';

const fixSc = fixedPrefixClasses('wui-layout');
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Layout: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={classes(fixSc(), className)} {...rest}>
      {props.children}
    </div>
  );
};

export default Layout;
