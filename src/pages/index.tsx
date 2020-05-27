import React from 'react';

import '@/styles/index.less';

import OButton, { ButtonSize, ButtonType } from '@/components/o-button';
import OMenu from '@/components/o-menu/menu';
import OMenuItem from '@/components/o-menu/menuItem';
import SubMenu from '@/components/o-menu/subMenu';

export default () => {
  const handleSelect = (index: number) => {
    console.log(111, index);
  };

  return (
    <div>
      <OButton
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
        onClick={() => alert(1)}
      >
        哈哈哈
      </OButton>
      <OButton disabled>disabled</OButton>

      <OMenu defaultIndex={0} onSelect={handleSelect}>
        <OMenuItem>aa</OMenuItem>
        <OMenuItem>bb</OMenuItem>
        <OMenuItem>cc</OMenuItem>
        <SubMenu title="sub">
          <OMenuItem>ee2</OMenuItem>
          <OMenuItem>ee1</OMenuItem>
        </SubMenu>
        <OMenuItem>dd</OMenuItem>
      </OMenu>
    </div>
  );
};
