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

// 快捷使用方式：
// 1. modal(content): 所有的内容都用户传
// 2. alert({title,content})：只显示取消，并且需要用户提供title和content
// 3. confirm({title,content,onOk,onCancel}): 需要用户提供title,content以及确认和取消事件
