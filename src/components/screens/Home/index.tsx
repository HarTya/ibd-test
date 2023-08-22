import Layout from '@/components/layout'
import Button from '@/ui/Button'
import Input from '@/ui/Input'
import Text from '@/ui/Text'
import Image from 'next/image'
import { FC, useState } from 'react'
import styles from './Home.module.scss'

const Home: FC = () => {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  const [four, setFour] = useState(false)
  const [five, setFive] = useState('')
  const [six, setSix] = useState('')
  const [seven, setSeven] = useState('')

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
      <div className={styles.content}>
        <div className={styles.box}>
          <Text size='heading' weight='bold'>
            <Text size='heading' weight='bold' accent>
              UI
            </Text>{' '}
            Buttons
          </Text>
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
          <Button text='accent' bold style={{ width: '150px' }}>
            Назад
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
          <Button style={{ width: '350px' }}>
            Отримати діагностичну панель
          </Button>
          <Button bold style={{ width: '437px' }}>
            Зателефонуйте мені
          </Button>
          <Button text bold style={{ width: '437px' }}>
            Записатись на консультацію
          </Button>
        </div>
        <div className={styles.box}>
          <Text size='heading' weight='bold'>
            <Text size='heading' weight='bold' accent>
              UI
            </Text>{' '}
            Inputs
          </Text>
          <Input state={five} setState={setFive} style={{ width: '350px' }} />
          <Input
            state={six}
            setState={setSix}
            text='см'
            style={{ width: '350px' }}
          />
          <Input
            state={seven}
            setState={setSeven}
            text='кг'
            style={{ width: '350px' }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Home
