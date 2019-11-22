import React from 'react';
import './importAllSvgs';
import './icon.scss';
import { classes } from '@/utils/helpers';

interface Props extends React.SVGAttributes<SVGElement> {
  name: string;
}
const Icon: React.FunctionComponent<Props> = (props) => {
  const { name, className, ...rest } = props;
  return (
    <svg className={classes('wui-icon', className)} {...rest}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
