import React from 'react'
import classNames from 'classnames';

import "./index.less"

interface ButtonProps {
  type?: 'default' | 'primary';
  disabled?: boolean;
  className?: string;
}

const Button:React.FC<ButtonProps> = ({children, type='default', disabled, className, ...restProps}) => {
  const classes = classNames('o-button', className, {
    [`o-button-${type}`]: type,
    disabled
  })

  return (
    <button className={classes} disabled={disabled} {...restProps}>
      {children}
    </button>
  )
}

export default Button
