import React, { useState, createContext } from 'react';
import classNames from 'classnames';

type MenuMode = 'horizonatal' | 'vertical';
type SelectCallback = (selectIndex: number) => void;
export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
}

interface OMenuContext {
  index: number;
  onSelect?: SelectCallback;
}

export const MenuContext = createContext<OMenuContext>({ index: 0 });

const OMenu: React.FC<MenuProps> = props => {
  const { className, mode, style, children, defaultIndex, onSelect } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  const classes = classNames('o-menu', className, {
    'menu-vertical': mode === 'vertical',
  });

  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: OMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {children}
      </MenuContext.Provider>
    </ul>
  );
};

OMenu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizonatal',
};

export default OMenu;
