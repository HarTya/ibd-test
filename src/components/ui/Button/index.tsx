import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
  arrow,
  bold,
  hover,
  bordered,
  selected,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        styles.main,
        {
          [styles.arrow]: !bordered && arrow,
          [styles.bold]: !bordered && bold,
          [styles.hover]: bold && hover,
          [styles.bordered]: !bold && bordered,
          [styles.selected]: bordered && selected
        },
        className
      )}
    >
      {children}
      {arrow && (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='28'
          height='28'
          viewBox='0 0 28 28'
          fill='none'
        >
          <path
            d='M5.83331 14H22.1666'
            stroke='white'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M14 5.83331L22.1667 14L14 22.1666'
            stroke='white'
            strokeWidth='2.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )}
    </button>
  )
}

export default Button
