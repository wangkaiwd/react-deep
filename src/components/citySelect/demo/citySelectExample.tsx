import React, { useState } from 'react';
import CitySelect from '../citySelect';
import Button from '../../button/button';
import dataSource from '../dataSource';

const CitySelectExample = () => {
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <Button level={'primary'} onClick={() => setVisible(true)}>选择城市</Button>
      {
        visible &&
        <CitySelect dataSource={dataSource}/>
      }
    </div>
  );
};

export default CitySelectExample;
