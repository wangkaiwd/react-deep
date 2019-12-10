import React from 'react';
import DemoBlock from '../../../layout/demoBlock';

const ExampleTest = () => {
  return (
    <DemoBlock code={require('!!raw-loader!./iconExample.tsx').default}/>
  );
};

export default ExampleTest;
