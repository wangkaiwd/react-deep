import React, { useState } from 'react';
import Dialog from '../dialog';

const DialogExample = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
  };
  return (
    <div>
      <button onClick={onClick}>click</button>
      <Dialog visible={visible}>
        123
      </Dialog>
    </div>
  );
};

export default DialogExample;
