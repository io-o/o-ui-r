import React from 'react';

import '@/styles/index.less';

import OButton, { ButtonSize, ButtonType } from '@/components/o-button';
import OMenu from '@/components/o-menu/menu';
import OMenuItem from '@/components/o-menu/menuItem';
import SubMenu from '@/components/o-menu/subMenu';
import OInput from '@/components/o-input';
import AutoComplete from '@/components/o-input/autoComplete';

const testSuggestions = ['aaa', 'vas', 'sdd', 'eedds', 'rfsd'];

export default () => {
  const handleSelect = (index: number) => {
    console.log(111, index);
  };

  // 测试 AutoComplete
  const getSuggestions = (query: string) => {
    return testSuggestions.filter(name => name.includes(query));
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

      <OMenu
        defaultIndex="0"
        defaultOpenSubMenus={['3']}
        onSelect={handleSelect}
      >
        <OMenuItem>aa</OMenuItem>
        <OMenuItem>bb</OMenuItem>
        <OMenuItem>cc</OMenuItem>
        <SubMenu title="sub">
          <OMenuItem>ee2</OMenuItem>
          <OMenuItem>ee1</OMenuItem>
        </SubMenu>
        <OMenuItem>dd</OMenuItem>
      </OMenu>
      <OInput prepand=".com"></OInput>
      <AutoComplete fetchSuggestions={getSuggestions}></AutoComplete>
    </div>
  );
};
