import React, { HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';

const fixSc = fixedPrefixClasses('wui-layout');
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Layout: React.FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={classes(fixSc(), className)} {...props}>
      {props.children}
    </div>
  );
};

export default Layout;
