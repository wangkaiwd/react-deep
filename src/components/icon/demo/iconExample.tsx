import React, { Fragment } from 'react';
import Icon from '../icon';

const code = require('!!raw-loader!./iconExample.tsx');
const IconExample = () => {
  return (
    <Fragment>
      <Icon name="alipay"/>
      <pre>
        {code.default}
      </pre>
    </Fragment>
  );
};

export default IconExample;
