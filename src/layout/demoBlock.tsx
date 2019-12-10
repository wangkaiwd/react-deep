import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { darcula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './demoBlock.scss';

interface Props {
  code: string;
}
const DemoBlock: React.FC<Props> = (props) => {
  return (
    <SyntaxHighlighter className={'highlight-code'} language="tsx" style={darcula}>
      {props.code}
    </SyntaxHighlighter>
  );
};

export default DemoBlock;
