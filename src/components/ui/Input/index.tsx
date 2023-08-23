import Text from '@/ui/Text'
import clsx from 'clsx'
import { FC } from 'react'
import styles from './Input.module.scss'
import { IInput } from './input.interface'

const Input: FC<IInput> = ({
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
        <Text size='subheading' weight='medium' translucent>
          {text}
        </Text>
      )}
    </div>
  )
}

export default Input
