import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['500', '700'],
  subsets: ['cyrillic', 'latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        *,
        *::after,
        *::before {
          font-family: ${roboto.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}
