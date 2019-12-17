import React from 'react';

interface Props {
  type?: string;
}
const Button: React.FC<Props> = (props) => {
  return (
    <button>
      {props.children}
    </button>
  );
};

export default Button;
