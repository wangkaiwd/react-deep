import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './citySelect.scss';
import Icon from '../icon/icon';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K',
  'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];

interface IProps extends HTMLAttributes<HTMLDivElement> {
}

const fixSc = fixedPrefixClasses('wui-city-select');
const sc = classes;
const CitySelect: FC<IProps> = (props) => {
  const [location, setLocation] = useState('没有开启定位');
  useEffect(() => {
    const getCurrentCity = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'https://api.qzone.work/api/ip.address');
      xhr.send();
      xhr.addEventListener('readystatechange', (e) => {
        const request = e.target as XMLHttpRequest;
        if (request.readyState === 4 && request.status === 200) {
          const response = JSON.parse(request.responseText);
          setLocation(response.data.city);
        }
      });
    };
    getCurrentCity();
  }, []);
  return (
    <div className={sc(fixSc(), props.className)}>
      <header className={fixSc('header')}>
        选择城市
      </header>
      <div className={fixSc('location')}>
        定位城市: <Icon className={fixSc('icon-location')} name="location"/>{location}
      </div>
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
