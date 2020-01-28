import React, { useState } from 'react';
import CitySelect from '../citySelect';
import Button from '../../button/button';

const CitySelectExample = () => {
  const [currentCity, setCurrentCity] = useState('暂未选择');
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <div><span>当前城市:</span><span>{currentCity}</span></div>
      <Button level={'primary'} onClick={() => setVisible(true)}>选择城市</Button>
      {
        visible &&
        <CitySelect currentCity={currentCity}/>
      }
    </div>
  );
};

export default CitySelectExample;
