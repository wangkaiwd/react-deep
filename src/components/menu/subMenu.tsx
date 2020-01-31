import React, { FC, HTMLAttributes } from 'react';

interface IProps extends HTMLAttributes<HTMLDivElement> {

}

const SubMenu: FC<IProps> = (props) => {
  return (
    <div>
      {props.children}
    </div>
  );
};

export default SubMenu;
