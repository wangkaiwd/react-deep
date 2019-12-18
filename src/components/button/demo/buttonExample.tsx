import React from 'react';
import Button from '../button';

const ButtonExample = () => {
  return (
    <div>
      <Button style={{ margin: '0 8px' }}>Click Here</Button>
      <Button style={{ margin: '0 8px' }} styleType="primary">Primary</Button>
      <Button style={{ margin: '0 8px' }} styleType="secondary">Secondary</Button>
    </div>
  );
};

export default ButtonExample;
