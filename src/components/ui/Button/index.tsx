import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import styles from './Button.module.scss'
import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  width,
  bold,
  hover,
  bordered,
  selected,
  className,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={clsx(
        styles.main,
        {
          [styles.bold]: !bordered && bold,
          [styles.hover]: bold && hover,
          [styles.bordered]: !bold && bordered,
          [styles.selected]: bordered && selected
        },
        className
      )}
    >
      <style jsx>{`
        button {
          width: ${width}px;
        }
      `}</style>
      {children}
    </button>
  )
}

export default Button
