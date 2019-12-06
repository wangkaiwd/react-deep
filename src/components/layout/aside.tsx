import React, { HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';

const fixSc = fixedPrefixClasses('wui-aside');
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Aside: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={classes(fixSc(), className)} {...rest}>
      {props.children}
    </div>
  );
};
export default Aside;
