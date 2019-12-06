import React, { HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './footer.scss';

const fixSc = fixedPrefixClasses('wui-footer');
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Footer: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={classes(fixSc(), className)} {...rest}>
      {props.children}
    </div>
  );
};
export default Footer;
