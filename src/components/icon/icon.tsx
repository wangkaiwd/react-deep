import React from 'react';
import '@/assets/svgs/wechat.svg';
import './icon.scss';

interface Props {
  name: string;
}
const Icon: React.FunctionComponent<Props> = (props) => {
  return (
    <svg className="wui-icon">
      <use xlinkHref={`#${props.name}`}/>
    </svg>
  );
};

export default Icon;
