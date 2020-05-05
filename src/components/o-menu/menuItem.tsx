import React from 'react';
import classNames from 'classnames';

export interface MenuItemProps {
  index?: number;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const OMenuItem: React.FC<MenuItemProps> = props => {
  const { className, index, style, children, disabled } = props;

  const classes = classNames('o-menu-item', className, {
    'is-disabled': disabled,
  });

  return (
    <li className={classes} style={style}>
      {children}
    </li>
  );
};

OMenuItem.defaultProps = {};

export default OMenuItem;
