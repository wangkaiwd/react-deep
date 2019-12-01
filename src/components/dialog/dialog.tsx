import React from 'react';
import './dialog.scss';
import { Icon } from '../../index';

interface Props {
  visible: boolean;
}
const Dialog: React.FC<Props> = (props) => {
  return props.visible ? (
    <div className="wui-dialog">
      <div className="wui-dialog-mask"/>
      <div className="wui-dialog-content">
        {props.children}
        <div className="wui-dialog-close">
          <Icon name="close"/>
        </div>
      </div>
    </div>
  ) : null;
};

export default Dialog;
