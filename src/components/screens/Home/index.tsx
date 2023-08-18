import Layout from '@/components/layout'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
	return (
		<Layout
			title='Безкоштовний онлайн-тест'
			description="Вчасно проявіть увагу до вашого здоров'я, рак може атакувати будь-яку частину організму. Деякі ознаки раку можуть бути непомітними, але раннє їх виявлення може врятувати життя. Наш безкоштовний тест допоможе виявити можливі ознаки і дати загальну інформацію."
		>
			<section className={styles.background}>
				<Image
					src='/bg.png'
					alt='Background'
					fill
					objectFit='cover'
					priority
					quality={100}
				/>
			</section>
		</Layout>
	)
}

export default Home
