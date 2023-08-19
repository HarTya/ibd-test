import Image from 'next/image'
import { FC } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
  return (
    <header className={styles.main}>
      <Image
        draggable={false}
        src='/logo.svg'
        alt='Website Logo'
        width={277}
        height={60}
        style={{ userSelect: 'none' }}
        priority
      />
      <Image
        draggable={false}
        src='/ibd.logo.svg'
        alt='IBD Team Logo'
        width={97}
        height={60}
        style={{ userSelect: 'none' }}
        priority
      />
      <Image
        draggable={false}
        src='/alliance.logo.svg'
        alt='Cancer Alliance Logo'
        width={331}
        height={70}
        style={{ userSelect: 'none' }}
        priority
      />
    </header>
  )
}

export default Header
