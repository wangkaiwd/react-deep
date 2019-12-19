import React, { FC, InputHTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './input.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
}
const sc = classes;
const fixSc = fixedPrefixClasses('wui-input');
const Input: FC<IProps> = ({
                             className,
                             ...rest
                           }) => {
  return (
    <input
      className={sc(fixSc(), className)}
      {...rest}
    />
  );
};

export default Input;
