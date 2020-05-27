import React, { useState, createContext } from 'react';
import classNames from 'classnames';

import { MenuItemProps } from './menuItem';

import './index.less';

type MenuMode = 'horizonatal' | 'vertical';
type SelectCallback = (selectIndex: string) => void;
export interface MenuProps {
  defaultIndex?: string;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
}

interface OMenuContext {
  index: string;
  onSelect?: SelectCallback;
  defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<OMenuContext>({ index: '0' });

const OMenu: React.FC<MenuProps> = props => {
  const {
    className,
    mode,
    style,
    children,
    defaultIndex,
    onSelect,
    defaultOpenSubMenus,
  } = props;
  const [currentActive, setActive] = useState(defaultIndex);

  const classes = classNames('o-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical',
  });

  const handleClick = (index: string) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  };
  const passedContext: OMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    defaultOpenSubMenus,
  };

  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >;
      const { displayName } = childElement.type;

      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.log('warning');
      }
    });
  };

  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  );
};

OMenu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizonatal',
  defaultOpenSubMenus: [],
};

export default OMenu;
