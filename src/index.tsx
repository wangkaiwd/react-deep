import { render } from 'react-dom';
import * as React from 'react';
import Icon from '@/components/icon/icon';
import { Fragment } from 'react';

render(
  <Fragment>
    <Icon name="wechat"/>
    <Icon name="alipay"/>
    <Icon name="github"/>
  </Fragment>, document.getElementById('root'));
