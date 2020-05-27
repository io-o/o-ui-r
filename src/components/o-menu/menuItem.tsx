import React, { useContext } from 'react';
import classNames from 'classnames';

import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const OMenuItem: React.FC<MenuItemProps> = props => {
  const { className, index, style, children, disabled } = props;

  const context = useContext(MenuContext);

  const classes = classNames('o-menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });

  const handleClick = () => {
    if (context.onSelect) {
      context.onSelect(index);
    }
  };

  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

OMenuItem.defaultProps = {};

OMenuItem.displayName = 'MenuItem';

export default OMenuItem;
