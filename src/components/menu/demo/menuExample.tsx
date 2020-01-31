import React from 'react';
import Menu from '../menu';
import MenuItem from '../menuItem';
import SubMenu from '../subMenu';

const MenuExample = () => {
  return (
    <div>
      <Menu selectKey="c1">
        <MenuItem name="c1">
          菜单1
        </MenuItem>
        <MenuItem name="c2">
          菜单2
        </MenuItem>
        <SubMenu name="c3" title="菜单3">
          <MenuItem name="c3-1">菜单3-1</MenuItem>
          <MenuItem name="c3-2">菜单3-2</MenuItem>
        </SubMenu>
      </Menu>
    </div>
  );
};

export default MenuExample;
