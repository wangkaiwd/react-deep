import React, { useState } from 'react';
import Dialog, { alert, confirm, modal } from '../dialog';

const DialogExample = () => {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(!visible);
  };
  const onCancel = () => {
    setVisible(false);
  };
  const onClickModal = () => {
    const close = modal(
      <div>
        我是一个测试modal
        <button onClick={() => close()}>取消</button>
      </div>,
    );
  };
  const buttons = [
    <button key="1" onClick={() => setVisible(false)}>确认</button>,
    <button key="2" onClick={onCancel}>取消</button>,
  ];
  return (
    <div>
      <button onClick={onClick}>click</button>
      <Dialog title="测试标题" buttons={buttons} visible={visible}>
        123
      </Dialog>
      <button onClick={() => alert({ title: 'Alert', content: 'alert content' })}>alert</button>
      <button onClick={() => confirm({ title: 'Alert', content: 'alert content' })}>confirm</button>
      <button onClick={onClickModal}>modal</button>
    </div>
  );
};

export default DialogExample;
