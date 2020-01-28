import React, { FC, HTMLAttributes, useEffect, useState } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './citySelect.scss';
import Icon from '../icon/icon';
import dataSource from './dataSource';
import pinyin from 'pinyin';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K',
  'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];

interface IProps extends HTMLAttributes<HTMLDivElement> {
  dataSource: string[];
}

interface ICityMap {[key: string]: string[];}

const cityMap: ICityMap = {};
const processCities = () => {
  const tempCities: ICityMap = {};
  dataSource.map((item) => {
    const firstLetter = pinyin(item, { style: pinyin.STYLE_NORMAL })[0][0][0].toUpperCase();
    tempCities[firstLetter] = tempCities[firstLetter] || [];
    tempCities[firstLetter].push(item);
  });
  Object.keys(tempCities).sort().map((key) => {
    cityMap[key] = tempCities[key];
  });
};
processCities();
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
      <div className={fixSc('container')}>
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
          <div className={fixSc('cities')}>
            {Object.keys(cityMap).map((key) => (
              <div className={fixSc('item')} key={key}>
                <div className={fixSc('item-letter')}>
                  {key}
                </div>
                {
                  cityMap[key].map((item) => (
                    <div className={fixSc('item-city')} key={item}>
                      {item}
                    </div>
                  ))
                }
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySelect;
