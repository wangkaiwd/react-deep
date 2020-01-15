import React from 'react';
import Input from '../input';
import Button from '../../button/button';

const InputExample = () => {
  return (
    <div>
      <Input placeholder="Basic usage"/>
      <Button>Button</Button><br/>
      <Input prefix="alipay" placeholder="Basic usage"/>
    </div>
  );
};

export default InputExample;
