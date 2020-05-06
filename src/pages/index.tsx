import React from 'react';

import '@/styles/index.less';

import OButton, { ButtonSize, ButtonType } from '@/components/o-button';
import OMenu from '@/components/o-menu/menu'
import OMenuItem from '@/components/o-menu/menuItem'

export default () => {

  const handleSelect = (index:number) => {
    console.log(111, index);
    
  }



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

      <OMenu 
        defaultIndex={0}
        onSelect={handleSelect}>
        <OMenuItem>
          sm
        </OMenuItem>
        <OMenuItem>
          sm
        </OMenuItem>
        <OMenuItem>
          sm
        </OMenuItem>
      </OMenu>
    </div>
  );
};
