import React, { useState } from 'react';
import CitySelect from '../citySelect';
import Button from '../../button/button';

const CitySelectExample = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <Button level={'primary'} onClick={() => setVisible(true)}>选择城市</Button>
      {
        visible &&
        <CitySelect/>
      }
    </div>
  );
};

export default CitySelectExample;
