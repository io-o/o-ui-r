import React from 'react'
import classNames from 'classnames'
 
import './index.less'

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
  btnType?: ButtonType;
  children: React.ReactNode,
  href?:string
}

// 定义button原生DOM其他属性
type NaviveButtonProps = ButtonProps & React.ButtonHTMLAttributes<HTMLElement>

type AnchorButtonProps = ButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonAllProps = Partial<NaviveButtonProps & AnchorButtonProps>

const  OButton:React.FC<ButtonAllProps> = (props) => {

  const {
    disabled,
    size,
    btnType,
    children,
    href,
    className,
    ...restProps
  } = props

    // 定义class
  const classes = classNames('button', className, {
    [`button-${btnType}`]: btnType,
    [`button-${size}`]: size,
    'disabled': btnType === btnType?.link && disabled
  })

  if (btnType === btnType?.link && href) {
    return (
      <a 
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
        >
        {children}
      </button>
    )
  }

  
}

export default OButton
