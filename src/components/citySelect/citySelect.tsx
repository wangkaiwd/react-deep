import React, { FC, HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  currentCity: string;
}

const CitySelect: FC<IProps> = (props) => {
  return (
    <div>
      {props.currentCity}
    </div>
  );
};

export default CitySelect;
