import React from 'react'
import classNames from 'classnames'
// 常量可以用枚举
export enum ButtonSize {
  Large = 'lg',
  Small = 'sm'
}

export enum ButtonType {
  Primary = 'primary',
  Default = 'default',
  Link = 'link'
}
 
interface ButtonProps {
  className?: string;
  disabled?: boolean;
  size?: ButtonSize;
  type?: ButtonType;
  children: React.ReactNode,
  href?:string
}




const  OButton:React.FC<ButtonProps> = (props) => {

  const {
    disabled,
    size,
    type,
    children,
    href
  } = props

    // 定义class
  const classes = classNames('button', {
    [`button-${type}`]: type,
    [`button-${size}`]: size,
    'disabled': type === type?.link && disabled
  })

  if (type === type?.link && href) {
    return (
      <a 
        className={classes}
        href={href}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        >
        {children}
      </button>
    )
  }

  
}

export default OButton
