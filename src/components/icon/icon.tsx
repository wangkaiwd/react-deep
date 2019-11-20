import React from 'react';
import wechat from '@/assets/svgs/wechat.svg';
import './icon.scss';

interface Props {
  name: string;
}
const Icon: React.FunctionComponent<Props> = (props) => {
  return (
    <svg className="wui-icon" viewBox={`${wechat.viewBox}`}>
      <use xlinkHref={`#${wechat}`}/>
    </svg>
  );
};

export default Icon;
