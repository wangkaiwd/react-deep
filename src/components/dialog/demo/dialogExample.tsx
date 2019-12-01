import React, { useState } from 'react';
import Dialog from '../dialog';

const DialogExample = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const buttons = [
    <button key="1" onClick={() => setVisible(false)}>确认</button>,
    <button key="2" onClick={onCancel}>取消</button>,
  ];
  return (
    <div>
      <button onClick={onClick}>click</button>
      <Dialog onCancel={onCancel} buttons={buttons} visible={visible}>
        123
      </Dialog>
    </div>
  );
};

export default DialogExample;
