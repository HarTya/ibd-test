import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import styles from './Text.module.scss'
import { IText } from './text.interface'

const Text: FC<PropsWithChildren<IText>> = ({
  size,
  weight,
  accent,
  translucent,
  className,
  children
}) => {
  return (
    <span
      className={clsx(
        {
          [styles.heading]: size === 'heading',
          [styles.subheading]: size === 'subheading',
          [styles.body]: size === 'body',
          [styles.medium]: weight === 'medium',
          [styles.bold]: weight === 'bold',
          [styles.accent]: accent,
          [styles.translucent]: translucent
        },
        className
      )}
    >
      {children}
    </span>
  )
}

export default Text
