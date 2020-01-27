import React, { useState } from 'react';
import CitySelect from '../citySelect';

const CitySelectExample = () => {
  const [currentCity, setCurrentCity] = useState('暂未选择');
  return (
    <div>
      <div><span>当前城市:</span><span>{currentCity}</span></div>
      <CitySelect/>
    </div>
  );
};

export default CitySelectExample;
