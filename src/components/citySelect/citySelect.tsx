import React, { FC, HTMLAttributes } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './citySelect.scss';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K',
  'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];

interface IProps extends HTMLAttributes<HTMLDivElement> {
  currentCity: string;
}

const fixSc = fixedPrefixClasses('wui-city-select');
const sc = classes;
const CitySelect: FC<IProps> = (props) => {
  return (
    <div className={sc(fixSc(), props.className)}>
      <header className={'header'}>
        选择城市
      </header>
      <div className={fixSc('allCity')}>
        <div className={fixSc('letters')}>
          {
            LETTERS.map((letter) => (
              <div className={fixSc('letter')} key={letter}>
                {letter}
              </div>
            ))
          }
        </div>
        <div className={fixSc('cities')}></div>
      </div>
    </div>
  );
};

export default CitySelect;
