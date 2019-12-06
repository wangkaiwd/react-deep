import React, { HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './content.scss';

const fixSc = fixedPrefixClasses('wui-content');
interface Props extends HTMLAttributes<HTMLDivElement> {

}
const Content: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  return (
    <div className={classes(fixSc(), className)} {...rest}>
      {props.children}
    </div>
  );
};
export default Content;
