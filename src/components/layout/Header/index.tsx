import Image from 'next/image'
import { FC } from 'react'
import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<header className={styles.main}>
			<Image src='/logo.svg' alt='Logo' width={277} height={60} priority />
			<Image
				src='/ibd.logo.svg'
				alt='IBD Team Logo'
				width={97}
				height={60}
				priority
			/>
			<Image
				src='/alliance.logo.png'
				alt='Cancer Alliance Logo'
				width={331}
				height={70}
				priority
				quality={100}
			/>
		</header>
	)
}

export default Header
