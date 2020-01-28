import React, { FC, HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  currentCity: string;
}

const fixSc = fixedPrefixClasses('wui-city-select');
const sc = classes;
const CitySelect: FC<IProps> = (props) => {
  return (
    <div className={sc(fixSc(), props.className)}>
      {props.currentCity}
    </div>
  );
};

export default CitySelect;
