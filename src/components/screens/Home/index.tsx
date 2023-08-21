import Layout from '@/components/layout'
import Button from '@/ui/Button'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)

  return (
    <Layout
      title='Безкоштовний онлайн-тест'
      description="Вчасно проявіть увагу до вашого здоров'я, рак може атакувати будь-яку частину організму. Деякі ознаки раку можуть бути непомітними, але раннє їх виявлення може врятувати життя. Наш безкоштовний тест допоможе виявити можливі ознаки і дати загальну інформацію."
    >
      <section className={styles.background}>
        <Image
          draggable={false}
          src='/bg.png'
          alt='Background'
          fill
          style={{
            userSelect: 'none',
            objectFit: 'cover'
          }}
          priority
          quality={100}
        />
      </section>
      <div className={styles.box}>
        <Button arrow style={{ width: '350px' }}>
          Пройти тестування
        </Button>
        <Button
          bordered
          selected={one}
          onClick={() => setOne(!one)}
          style={{ width: '350px' }}
        >
          Чоловіча
        </Button>
        <Button
          bordered
          selected={two}
          onClick={() => setTwo(!two)}
          style={{ width: '350px' }}
        >
          Жіноча
        </Button>
        <Button bold hover style={{ width: '273px' }}>
          Продовжити
        </Button>
        <Button
          bordered
          selected={three}
          onClick={() => setThree(!three)}
          style={{ width: '175px' }}
        >
          Так
        </Button>
        <Button
          bordered
          selected={four}
          onClick={() => setFour(!four)}
          style={{ width: '175px' }}
        >
          Ні
        </Button>
        <Button bold hover style={{ width: '273px' }}>
          Завершити тест
        </Button>
        <Button style={{ width: '350px' }}>Отримати діагностичну панель</Button>
        <Button bold style={{ width: '437px' }}>
          Зателефонуйте мені
        </Button>
      </div>
    </Layout>
  )
}

export default Home
