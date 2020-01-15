import React, { FC, InputHTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './input.scss';
import Icon from '../icon/icon';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  prefix?: string;
}
const sc = classes;
const fixSc = fixedPrefixClasses('wui-input');
const Input: FC<IProps> = ({
                             className,
                             prefix,
                             ...rest
                           }) => {
  return (
    <div className={sc(fixSc(), className)}>
      <input
        className={fixSc('content', { prefix })}
        {...rest}
      />
      {
        prefix &&
        <Icon className={fixSc('prefix-icon')} name={prefix}/>
      }
    </div>
  );
};

export default Input;
