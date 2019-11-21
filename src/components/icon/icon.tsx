import React from 'react';
import './importAllSvgs';
import './icon.scss';

interface Props extends React.SVGAttributes<SVGElement> {
  name: string;
}
const Icon: React.FunctionComponent<Props> = (props) => {
  const { name, ...rest } = props;
  return (
    <svg className="wui-icon" {...rest}>
      <use xlinkHref={`#${name}`}/>
    </svg>
  );
};

export default Icon;
