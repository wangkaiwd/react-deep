import React, { ButtonHTMLAttributes } from 'react';
import './button.scss';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import Icon from '../icon/icon';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'default' | 'primary' | 'secondary';
  icon?: string;
  iconPosition?: 'left' | 'right';
}
const fixSc = fixedPrefixClasses('wui-button');
const sc = classes;
const Button: React.FC<Props> = ({
                                   children,
                                   className,
                                   styleType = 'default',
                                   iconPosition = 'left',
                                   icon,
                                   ...rest
                                 }) => {
  return (
    <button
      className={sc(fixSc('', styleType), className)}
      {...rest}
    >
      {
        icon &&
        <Icon className={fixSc(`icon-${iconPosition}`)} name={icon}/>
      }
      {children}
    </button>
  );
};

export default Button;
