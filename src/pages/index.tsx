import React from 'react';

import '@/styles/index.less'

import OButton, { ButtonSize, ButtonType } from '@/components/o-button'

export default () => {
  return (
    <div>
      <OButton
        btnType={ButtonType.Primary}
        size={ButtonSize.Large}
        onClick={() => alert(1)}
        >
          哈哈哈</OButton>
      <OButton 
        disabled
        >
          disabled</OButton>
    </div>
  );
}
