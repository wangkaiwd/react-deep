import React, { FC, HTMLAttributes, useEffect, useRef, useState } from 'react';
import { classes, fixedPrefixClasses } from '../../utils/helpers';
import './citySelect.scss';
import Icon from '../icon/icon';
import dataSource from './dataSource';
import pinyin from 'pinyin';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K',
  'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'];

interface IProps extends HTMLAttributes<HTMLDivElement> {
  dataSource: string[];
  onClose: (city: string) => void;
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
    const length = tempCities[key].length;
    const remainder1 = length % 3;
    const remainder2 = (length - 6) % 4;
    cityMap[key] = tempCities[key];
    if (length <= 6 && remainder1 !== 0) {
      for (let i = 0; i < (3 - remainder1); i++) {
        cityMap[key].push('');
      }
    } else if (length > 6 && remainder2 !== 0) {
      for (let i = 0; i < (4 - remainder2); i++) {
        cityMap[key].push('');
      }
    }
  });
};
processCities();
const fixSc = fixedPrefixClasses('wui-city-select');
const sc = classes;
const CitySelect: FC<IProps> = (props) => {
  const [location, setLocation] = useState('没有开启定位');
  const containerRef = useRef<HTMLDivElement>(null!);
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

  const moveToTop = (letter: string) => {
    const letterElements = Array.from(document.querySelectorAll(`.${fixSc('item-letter')}`));
    const container = containerRef.current;
    const target = letterElements.find((item) => item.innerHTML === letter);
    if (target) {
      const { top } = target.getBoundingClientRect();
      container.scrollTop = top;
    }
  };

  const onClickCity = (city: string) => {
    setLocation(city);
  };
  return (
    <div className={sc(fixSc(), props.className)}>
      <div className={fixSc('container')} ref={containerRef}>
        <header className={fixSc('header')}>
          <span className={fixSc('back')} onClick={() => props.onClose(location)}>
            <Icon name="back"/>
          </span>
          选择城市
        </header>
        <div className={fixSc('location')}>
          定位城市: <Icon className={fixSc('icon-location')} name="location"/>{location}
        </div>
        <div className={fixSc('allCity')}>
          <div className={fixSc('letters')}>
            {LETTERS.map((letter) => (
              <div className={fixSc('letter')} key={letter} onClick={() => moveToTop(letter)}>
                {letter}
              </div>
            ))}
          </div>
          <div className={fixSc('cities')}>
            {Object.keys(cityMap).map((key) => (
              <div className={fixSc('item')} key={key}>
                <div className={fixSc('item-letter')}>
                  {key}
                </div>
                {cityMap[key].map((item, index) => (
                  <div className={fixSc('item-city')} key={index} onClick={() => onClickCity(item)}>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitySelect;
