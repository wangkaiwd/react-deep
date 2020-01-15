import React from 'react';
import Button from '../button';

const ButtonExample = () => {
  return (
    <div>
      <Button style={{ margin: '0 8px' }}>Click Here</Button>
      <Button style={{ margin: '0 8px' }} level="primary">Primary</Button>
      <Button style={{ margin: '0 8px' }} level="secondary">Secondary</Button>
      <Button
        style={{ margin: '0 8px' }}
        icon="github"
        iconPosition="right"
        level="secondary"
      >
        Secondary
      </Button>
      <Button style={{ margin: '0 8px' }} icon="alipay" level="secondary">Secondary</Button>
      <Button style={{ margin: '0 8px' }} level="primary" loading={true}>Primary</Button>
    </div>
  );
};

export default ButtonExample;
