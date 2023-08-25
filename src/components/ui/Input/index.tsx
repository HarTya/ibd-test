import { Paragraph } from '@/ui/Text'
import clsx from 'clsx'
import { FC } from 'react'
import styles from './Input.module.scss'
import { IInput } from './input.interface'

TODO: const Input: FC<IInput> = ({
  state,
  setState,
  text,
  className,
  style,
  ...rest
}) => {
  return (
    <div
      className={clsx(
        styles.main,
        {
          [styles.text]: text && text.length <= 2
        },
        className
      )}
      style={style}
    >
      <input
        {...rest}
        value={state}
        onChange={event => setState(event.target.value)}
      />
      {text && text.length <= 2 && (
        <Paragraph size='subheading' weight='medium' translucent>
          {text}
        </Paragraph>
      )}
    </div>
  )
}

export default Input
