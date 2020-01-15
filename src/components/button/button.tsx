import React, { ButtonHTMLAttributes } from 'react';
import './button.scss';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import Icon from '../icon/icon';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  level?: 'default' | 'primary' | 'secondary';
  icon?: string;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
}
const fixSc = fixedPrefixClasses('wui-button');
const sc = classes;
const Button: React.FC<Props> = ({
                                   children,
                                   className,
                                   level = 'default',
                                   iconPosition = 'left',
                                   icon,
                                   disabled,
                                   loading,
                                   ...rest
                                 }) => {
  const isDisabled = disabled || loading;
  return (
    <button
      className={sc(fixSc('', level, { disabled: isDisabled }), className)}
      disabled={isDisabled}
      {...rest}
    >
      {
        icon && !loading &&
        < Icon className={fixSc(`icon-${iconPosition}`)} name={icon}/>
      }
      {
        loading &&
        <Icon name="spin" className={fixSc(`icon-${iconPosition}`, 'spin')}/>
      }
      {children}
    </button>
  );
};

export default Button;
