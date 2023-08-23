import Text from '@/ui/Text'
import { FC } from 'react'
import styles from './Results.module.scss'

const Results: FC = () => {
  return (
    <div className={styles.main}>
      <Text size='heading' weight='bold'>
        Перехопи{' '}
        <Text size='heading' weight='bold' accent>
          рак
        </Text>
      </Text>
    </div>
  )
}

export default Results
