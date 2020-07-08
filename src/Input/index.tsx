import React from 'react';
import classnames from 'classnames';

import "./index.less"

interface InputProps {
  size?: 'sm' | 'lg';
  className?: string;
}

const Input:React.FC<InputProps> = props  => {

  const {size, className, ...resetProps} = props

  const classes = classnames('o-input', className, {
    [`o-input-${size}`]: size
  })

  return (
    <input className={classes} {...resetProps} />
  )
}

export default Input
