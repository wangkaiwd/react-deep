import React from 'react';
import './importAllSvgs';
import './icon.scss';

interface Props {
  name: string;
  onClick?: React.MouseEventHandler<SVGElement>;
}
const Icon: React.FunctionComponent<Props> = (props) => {
  return (
    <svg className="wui-icon" onClick={props.onClick}>
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;
Icon.defaultProps = {
  onClick: () => {},
};
