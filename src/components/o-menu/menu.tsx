import React from 'react';
import classNames from 'classnames';

type MenuMode = 'horizonatal' | 'vertical';

export interface MenuProps {
  defaultIndex?: number;
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
             v     ?: (selectIndex: number) => void;
}

const OMenu: React.FC<MenuProps> = props => {
  const { className, mode, style, children, defaultIndex } = props;

  const classes = classNames('o-menu', className, {
    'menu-vertical': mode === 'vertical',
  });

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};

OMenu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizonatal',
};

export default OMenu;
