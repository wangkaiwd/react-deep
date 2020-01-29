import React, { useState } from 'react';
import CitySelect from '../citySelect';
import Button from '../../button/button';
import dataSource from '../dataSource';

const CitySelectExample = () => {
  const [visible, setVisible] = useState(false);
  const [city, setCity] = useState('选择城市');
  const onClose = (city: string) => {
    setCity(city);
    setVisible(false);
  };
  return (
    <div>
      <Button level={'primary'} onClick={() => setVisible(true)}>{city}</Button>
      {visible &&
      <CitySelect onClose={onClose} dataSource={dataSource}/>}
    </div>
  );
};

export default CitySelectExample;
