import React, { HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './header.scss';

const fixSc = fixedPrefixClasses('wui-header');
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Header: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={classes(fixSc(), className)} {...rest}>
      {props.children}
    </div>
  );
};
export default Header;
