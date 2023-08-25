import clsx from 'clsx'
import { FC, PropsWithChildren } from 'react'
import styles from './Text.module.scss'
import { IParagraph, ISpan } from './text.interface'

const Paragraph: FC<PropsWithChildren<IParagraph>> = ({
  size,
  weight,
  accent,
  translucent,
  className,
  children,
  ...rest
}) => {
  return (
    <p
      {...rest}
      className={clsx(
        styles.paragraph,
        {
          [styles.heading]: size === 'heading',
          [styles.subheading]: size === 'subheading',
          [styles.body]: size === 'body',
          [styles.medium]: weight === 'medium',
          [styles.bold]: weight === 'bold',
          [styles.accent]: accent,
          [styles.translucent_black]: !accent && translucent,
          [styles.translucent_accent]: accent && translucent
        },
        className
      )}
    >
      {children}
    </p>
  )
}

const Span: FC<PropsWithChildren<ISpan>> = ({
  size,
  weight,
  accent,
  translucent,
  className,
  children,
  ...rest
}) => {
  return (
    <span
      {...rest}
      className={clsx(
        {
          [styles.heading]: size === 'heading',
          [styles.subheading]: size === 'subheading',
          [styles.body]: size === 'body',
          [styles.medium]: weight === 'medium',
          [styles.bold]: weight === 'bold',
          [styles.accent]: accent,
          [styles.translucent_black]: !accent && translucent,
          [styles.translucent_accent]: accent && translucent
        },
        className
      )}
    >
      {children}
    </span>
  )
}

export { Paragraph, Span }
