import React from 'react';

interface Props {
  type?: string;
}
const Button: React.FC<Props> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default Button;
