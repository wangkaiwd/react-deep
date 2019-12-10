import React, { Fragment } from 'react';
import Icon from '../icon';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './iconExample.scss';

const code = require('!!raw-loader!./iconExample.tsx');
const IconExample = () => {
  return (
    <Fragment>
      <Icon name="alipay"/>
      <SyntaxHighlighter className={'highlight-code'} language="tsx" style={darcula}>
        {code.default}
      </SyntaxHighlighter>
    </Fragment>
  );
};

export default IconExample;
