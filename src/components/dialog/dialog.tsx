import React, { MouseEventHandler, ReactElement } from 'react';
import './dialog.scss';
import { Icon } from '../../index';
import { createPortal } from 'react-dom';

interface Props {
  visible: boolean;
  title?: string;
  onCancel?: MouseEventHandler<HTMLElement>;
  onOk?: MouseEventHandler<HTMLButtonElement>;
  buttons?: ReactElement[];
}
const Dialog: React.FC<Props> = (props) => {
  const { onCancel, buttons, children, title, visible } = props;
  const modal = (
    <div className="wui-dialog">
      <div className="wui-dialog-mask"/>
      <div className="wui-dialog-content">
        {title && <header className="wui-dialog-title">{title}</header>}
        <main>
          {children}
        </main>
        {
          buttons && buttons.length > 0 &&
          <footer className="wui-dialog-footer">
            {buttons}
          </footer>
        }
        <div className="wui-dialog-close" onClick={onCancel}>
          <Icon name="close"/>
        </div>
      </div>
    </div>
  );
  return visible ? createPortal(modal, document.body) : null;
};

export default Dialog;
Dialog.defaultProps = {
  onCancel: () => {},
  onOk: () => {},
};
