import React, { ReactElement, InputHTMLAttributes, ChangeEvent } from 'react';
import classNames from 'classnames';

import './index.less';

type InputSize = 'sm' | 'lg';

// Omit 忽略泛型属性
export interface OInputProps
  extends Omit<InputHTMLAttributes<HTMLElement>, 'size'> {
  disabled?: boolean;
  size?: InputSize;
  icon?: string;
  prepand?: string | ReactElement;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const OInput: React.FC<OInputProps> = props => {
  // 取出属性
  const { disabled, size, icon, prepand, ...restProps } = props;

  //根据属性计算className

  if ('value' in props) {
    delete restProps.defaultValue;
  }

  return (
    <>
      <input />
      {prepand && <div>{prepand}</div>}
    </>
  );
};

export default OInput;
