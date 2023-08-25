import Button from '@/ui/Button'
import { Paragraph, Span } from '@/ui/Text'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Results.module.scss'

const Results: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        <Paragraph size='heading' weight='bold'>
          Перехопи{' '}
          <Span size='heading' weight='bold' accent>
            рак
          </Span>
        </Paragraph>
      </div>
      <div className={styles.subtitle}>
        <Paragraph size='body' weight='medium' translucent width={809}>
          На ранніх стадіях раку людина може не відчувати жодних симптомів. Тому
          так важливо виявити захворювання на ранньому етапі.
        </Paragraph>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <div>
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
          <div>
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
        </div>
        <div>
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
