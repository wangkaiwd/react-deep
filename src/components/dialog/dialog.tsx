import React, { MouseEventHandler, ReactElement } from 'react';
import './dialog.scss';
import { Icon } from '../../index';
import ReactDOM, { createPortal, unmountComponentAtNode } from 'react-dom';
import { classes, fixedPrefixClasses } from '../../utils/helpers';

const fixSc = fixedPrefixClasses('wui-dialog');
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  visible: boolean;
  title?: string;
  onCancel?: MouseEventHandler<HTMLElement>;
  onOk?: MouseEventHandler<HTMLButtonElement>;
  buttons?: ReactElement[];
  closeOnMaskClick?: boolean;
}
// @see:https://github.com/microsoft/TypeScript/issues/27425
// 解决方法1：https://github.com/microsoft/TypeScript/issues/27425#issuecomment-440936580
// 解决方法2：https://github.com/microsoft/TypeScript/issues/27425#issuecomment-440303291
// 推荐方法：https://github.com/microsoft/TypeScript/issues/27425#issuecomment-478004521(正确的方法是使用函数默认值参数)
const Dialog: React.FC<Props> = ({
                                   buttons,
                                   children,
                                   className,
                                   closeOnMaskClick = false,
                                   onCancel = () => {},
                                   title,
                                   visible = false,
                                 }) => {
  const onClickMask: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (closeOnMaskClick) {
      onCancel(e);
    }
  };
  const modal = (
    <div className={classes(fixSc(), className)}>
      <div className={fixSc('mask')} onClick={onClickMask}/>
      <div className={fixSc('content')}>
        {title && <header className={fixSc('header')}>{title}</header>}
        <main className={fixSc('main')}>
          {children}
        </main>
        {
          buttons && buttons.length > 0 &&
          <footer className={fixSc('footer')}>
            {buttons.map((button) => React.cloneElement(button, { className: fixSc('footer-button') }))}
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

interface AlertProps {
  title?: string;
  content: string | ReactElement;
}
export const alert = ({ title, content }: AlertProps) => {
  const container = document.createElement('div');
  container.classList.add(fixSc('shortcut-container'));
  const renderComponent = (component: ReactElement) => {
    document.body.appendChild(container);
    ReactDOM.render(component, container);
  };
  const unMountComponent = () => {
    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  };
  const closeDialog = () => {
    unMountComponent();
    const cloneDialog = React.cloneElement(dialog, { visible: false });
    renderComponent(cloneDialog);
    unMountComponent();
  };

  const buttons = [
    <button key="1" onClick={closeDialog}>取消</button>,
  ];

  const dialog = (
    <Dialog
      title={title}
      onCancel={closeDialog}
      buttons={buttons}
      visible={true}
    >
      {content}
    </Dialog>
  );
  renderComponent(dialog);
};
