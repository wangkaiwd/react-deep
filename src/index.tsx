import { render } from 'react-dom';
import * as React from 'react';
import Icon from '@/components/icon/icon';
import { Fragment } from 'react';

const fn: React.MouseEventHandler<SVGElement> = (e) => {
  console.log('fn');
  // e.target：事件触发的元素。可以用来实现事件委托(event delegation)
  // e.currentTarget: 事件绑定的元素
  console.log(e.target);
};
render(
  <Fragment>
    <Icon name="wechat" onMouseEnter={() => {console.log('enter');}}/>
    <Icon name="alipay" className="alipay"/>
    <Icon name="github"/>
  </Fragment>, document.getElementById('root'));
