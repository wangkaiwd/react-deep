import React from 'react';
import './dialog.scss';
import { Icon } from '../../index';
import { createPortal } from 'react-dom';

interface Props {
  visible: boolean;
}
const Dialog: React.FC<Props> = (props) => {
  const modal = (
    <div className="wui-dialog">
      <div className="wui-dialog-mask"/>
      <div className="wui-dialog-content">
        {props.children}
        <div className="wui-dialog-close">
          <Icon name="close"/>
        </div>
      </div>
    </div>
  );
  return props.visible ? createPortal(modal, document.body) : null;
};

export default Dialog;
