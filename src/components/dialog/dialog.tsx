import React, { MouseEventHandler, ReactElement } from 'react';
import './dialog.scss';
import { Icon } from '../../index';
import { createPortal } from 'react-dom';
import { classes, fixedPrefixClasses } from '../../utils/helpers';

const fixSc = fixedPrefixClasses('wui-dialog');
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  title?: string;
  onCancel?: MouseEventHandler<HTMLElement>;
  onOk?: MouseEventHandler<HTMLButtonElement>;
  buttons?: ReactElement[];
}
const Dialog: React.FC<Props> = (props) => {
  const { className, onCancel, buttons, children, title, visible } = props;
  const modal = (
    <div className={classes(fixSc(), className)}>
      <div className={fixSc('mask')}/>
      <div className={fixSc('content')}>
        {title && <header className={fixSc('title')}>{title}</header>}
        <main>
          {children}
        </main>
        {
          buttons && buttons.length > 0 &&
          <footer className={fixSc('footer')}>
            {buttons}
          </footer>
        }
        <div className={fixSc('close')} onClick={onCancel}>
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
