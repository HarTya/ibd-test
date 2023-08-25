import Button from '@/ui/Button'
import { Paragraph, Span } from '@/ui/Text'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Results.module.scss'

const Results: FC = () => {
  return (
    <div className={styles.main}>
      <Paragraph size='heading' weight='bold' style={{ marginBottom: '10px' }}>
        Перехопи{' '}
        <Span size='heading' weight='bold' accent>
          рак
        </Span>
      </Paragraph>
      <Paragraph
        size='body'
        weight='medium'
        translucent
        style={{ width: '809px', marginBottom: '65px' }}
      >
        На ранніх стадіях раку людина може не відчувати жодних симптомів. Тому
        так важливо виявити захворювання на ранньому етапі.
      </Paragraph>
      <div className={styles.content}>
        <div style={{ width: '251px' }}>
          <div className={styles.status}>
            <Paragraph
              size='body'
              weight='medium'
              translucent
              style={{ lineHeight: '22px', textAlign: 'center' }}
            >
              ≈{'\n'}
              <Span
                size='body'
                weight='medium'
                translucent
                style={{ lineHeight: '22px' }}
              >
                ?
              </Span>
            </Paragraph>
          </div>
          <Paragraph size='subheading' weight='medium'>
            КРР ризик (рівень)
          </Paragraph>
        </div>
        <div style={{ width: '219.5px' }}>
          <div className={styles.status}>
            <Paragraph
              size='body'
              weight='medium'
              translucent
              style={{ lineHeight: '22px', textAlign: 'center' }}
            >
              %{'\n'}
              <Span
                size='body'
                weight='medium'
                translucent
                style={{ lineHeight: '22px' }}
              >
                ?
              </Span>
            </Paragraph>
          </div>
          <Paragraph size='subheading' weight='medium'>
            Індекс маси тіла
          </Paragraph>
        </div>
        <div style={{ width: '350px' }}>
          <div className={styles.message}>
            <Image
              draggable={false}
              src='/message.svg'
              alt='Message'
              width={35}
              height={35}
              style={{ userSelect: 'none' }}
              priority
            />
            <Paragraph size='body' weight='medium' style={{ marginTop: '1px' }}>
              Пройдіть тест та отримайте{' '}
              <Span size='body' weight='medium' accent>
                безкоштовно
              </Span>{' '}
              <Span size='body' weight='medium'>
                діагностичну панель проти{' '}
              </Span>
              <Span size='body' weight='medium' accent>
                раку шлунково-кишкового тракту
              </Span>
            </Paragraph>
          </div>
          <Button arrow>Пройти тестування</Button>
        </div>
      </div>
    </div>
  )
}

export default Results
