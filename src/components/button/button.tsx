import React, { ButtonHTMLAttributes } from 'react';
import './button.scss';
import { classes, fixedPrefixClasses } from '../../utils/helpers';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'default' | 'primary' | 'secondary';
}
const fixSc = fixedPrefixClasses('wui-button');
const sc = classes;
const Button: React.FC<Props> = ({
                                   children,
                                   className,
                                   styleType = 'default',
                                   ...rest
                                 }) => {
  return (
    <button
      className={sc(fixSc('', styleType), className)}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
